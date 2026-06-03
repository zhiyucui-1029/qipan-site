#!/usr/bin/env python3
"""Compare a rendered PPT slide preview against an approved reference image.

This is intentionally small and dependency-light. It uses Pillow, which is
available in the local Codex runtime, to produce measurable fidelity gates:
mean absolute error, RMSE, max channel delta, mismatch ratio, and a heatmap.
"""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

from PIL import Image


def load_rgb(path: Path) -> Image.Image:
    image = Image.open(path).convert("RGBA")
    white = Image.new("RGBA", image.size, (255, 255, 255, 255))
    return Image.alpha_composite(white, image).convert("RGB")


def compare(reference_path: Path, candidate_path: Path, pixel_threshold: int) -> tuple[dict, Image.Image | None]:
    reference = load_rgb(reference_path)
    candidate = load_rgb(candidate_path)

    metrics = {
        "reference": str(reference_path),
        "candidate": str(candidate_path),
        "reference_size": list(reference.size),
        "candidate_size": list(candidate.size),
        "same_size": reference.size == candidate.size,
    }

    if reference.size != candidate.size:
        metrics.update(
            {
                "passed": False,
                "reason": "size_mismatch",
                "mean_abs_error": None,
                "rmse": None,
                "max_abs_error": None,
                "mismatch_ratio": None,
            }
        )
        return metrics, None

    width, height = reference.size
    total_pixels = width * height
    total_channels = total_pixels * 3
    abs_sum = 0
    square_sum = 0
    max_delta = 0
    mismatch_pixels = 0
    diff = Image.new("RGB", reference.size)

    ref_px = reference.load()
    cand_px = candidate.load()
    diff_px = diff.load()

    for y in range(height):
        for x in range(width):
            r = ref_px[x, y]
            c = cand_px[x, y]
            channel_deltas = (abs(r[0] - c[0]), abs(r[1] - c[1]), abs(r[2] - c[2]))
            px_max = max(channel_deltas)
            if px_max > pixel_threshold:
                mismatch_pixels += 1
            max_delta = max(max_delta, px_max)
            abs_sum += channel_deltas[0] + channel_deltas[1] + channel_deltas[2]
            square_sum += channel_deltas[0] ** 2 + channel_deltas[1] ** 2 + channel_deltas[2] ** 2

            heat = min(255, px_max * 8)
            diff_px[x, y] = (heat, max(0, heat // 4), 255 - heat if heat else 0)

    metrics.update(
        {
            "mean_abs_error": abs_sum / total_channels,
            "rmse": math.sqrt(square_sum / total_channels),
            "max_abs_error": max_delta,
            "mismatch_ratio": mismatch_pixels / total_pixels,
            "pixel_delta_threshold": pixel_threshold,
        }
    )
    return metrics, diff


def main() -> int:
    parser = argparse.ArgumentParser(description="Pixel-compare a PPT preview against a reference image.")
    parser.add_argument("--reference", required=True, type=Path)
    parser.add_argument("--candidate", required=True, type=Path)
    parser.add_argument("--diff", type=Path)
    parser.add_argument("--json", dest="json_path", type=Path)
    parser.add_argument("--mae-threshold", type=float, default=1.5)
    parser.add_argument("--mismatch-threshold", type=float, default=0.02)
    parser.add_argument("--pixel-threshold", type=int, default=8)
    parser.add_argument("--warn-only", action="store_true")
    args = parser.parse_args()

    metrics, diff = compare(args.reference, args.candidate, args.pixel_threshold)
    if metrics.get("same_size"):
        metrics["passed"] = (
            metrics["mean_abs_error"] <= args.mae_threshold
            and metrics["mismatch_ratio"] <= args.mismatch_threshold
        )
        metrics["thresholds"] = {
            "mean_abs_error_max": args.mae_threshold,
            "mismatch_ratio_max": args.mismatch_threshold,
        }

    if args.diff and diff is not None:
        args.diff.parent.mkdir(parents=True, exist_ok=True)
        diff.save(args.diff)
        metrics["diff"] = str(args.diff)

    if args.json_path:
        args.json_path.parent.mkdir(parents=True, exist_ok=True)
        args.json_path.write_text(json.dumps(metrics, ensure_ascii=False, indent=2), encoding="utf-8")

    print(json.dumps(metrics, ensure_ascii=False, indent=2))
    if not metrics["passed"] and not args.warn_only:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
