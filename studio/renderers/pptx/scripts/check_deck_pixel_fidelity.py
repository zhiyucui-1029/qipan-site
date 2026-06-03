#!/usr/bin/env python3
"""Run pixel-fidelity checks for every slide reference/preview pair in a deck."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path


SLIDE_RE = re.compile(r"slide-(\d+)\.png$")


def slide_number(path: Path) -> int | None:
    match = SLIDE_RE.search(path.name)
    return int(match.group(1)) if match else None


def main() -> int:
    parser = argparse.ArgumentParser(description="Compare a rendered PPT deck against approved slide references.")
    parser.add_argument("--reference-dir", required=True, type=Path)
    parser.add_argument("--preview-dir", required=True, type=Path)
    parser.add_argument("--qa-dir", required=True, type=Path)
    parser.add_argument("--mae-threshold", type=float, default=1.5)
    parser.add_argument("--mismatch-threshold", type=float, default=0.02)
    parser.add_argument("--pixel-threshold", type=int, default=8)
    parser.add_argument("--warn-only", action="store_true")
    args = parser.parse_args()

    compare_script = Path(__file__).with_name("compare_slide_pixels.py")
    references = sorted(args.reference_dir.glob("slide-*.png"), key=lambda p: slide_number(p) or 0)
    previews = {slide_number(path): path for path in args.preview_dir.glob("slide-*.png") if slide_number(path)}

    if not references:
        print(f"No approved references found in {args.reference_dir}", file=sys.stderr)
        return 1 if not args.warn_only else 0

    args.qa_dir.mkdir(parents=True, exist_ok=True)
    all_metrics = []
    failed = []
    missing = []

    for reference in references:
        number = slide_number(reference)
        preview = previews.get(number)
        if not preview:
            missing.append(reference.name)
            continue

        stem = f"slide-{number:02d}"
        metrics_path = args.qa_dir / f"{stem}-pixel-metrics.json"
        diff_path = args.qa_dir / f"{stem}-diff.png"
        command = [
            sys.executable,
            str(compare_script),
            "--reference",
            str(reference),
            "--candidate",
            str(preview),
            "--diff",
            str(diff_path),
            "--json",
            str(metrics_path),
            "--mae-threshold",
            str(args.mae_threshold),
            "--mismatch-threshold",
            str(args.mismatch_threshold),
            "--pixel-threshold",
            str(args.pixel_threshold),
            "--warn-only",
        ]
        result = subprocess.run(command, text=True, capture_output=True, check=False)
        if result.returncode != 0:
            print(result.stdout, end="")
            print(result.stderr, end="", file=sys.stderr)
            failed.append(reference.name)
            continue

        metrics = json.loads(metrics_path.read_text(encoding="utf-8"))
        all_metrics.append(metrics)
        if not metrics.get("passed"):
            failed.append(reference.name)

    summary = {
        "reference_dir": str(args.reference_dir),
        "preview_dir": str(args.preview_dir),
        "qa_dir": str(args.qa_dir),
        "checked": len(all_metrics),
        "missing_preview": missing,
        "failed": failed,
        "passed": not missing and not failed,
        "slides": all_metrics,
    }
    summary_path = args.qa_dir / "pixel-fidelity-summary.json"
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(summary, ensure_ascii=False, indent=2))

    if not summary["passed"] and not args.warn_only:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
