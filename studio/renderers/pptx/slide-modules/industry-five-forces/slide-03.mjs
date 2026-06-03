import { loadFiveForcesData } from "./data.mjs";
import { ASSETS, C, addPage, footnote, icon, image, rect, scoreBar, t, titleBlock } from "./shared.mjs";

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  const data = loadFiveForcesData();
  const force = data.forces.rivalry;
  const scoreInfo = data.forceScores.find((item) => item.id === "rivalry");
  addPage(ctx, slide, data, 3, "FORCE DETAIL");
  titleBlock(ctx, slide, force.pageTitle, force.headline);

  const vx = 58;
  const vy = 198;
  await image(ctx, slide, ASSETS.forceDetailBg, vx, vy, 1440, 570, {
    name: "force_detail_visual_asset",
    alt: "Single force detail visual base",
  });

  await icon(ctx, slide, force.icon, vx + 62, vy + 42, 48, "#FFFFFF", "force_icon");
  t(ctx, slide, force.level, vx + 126, vy + 44, 80, 32, {
    size: 24,
    bold: true,
    color: "#FFB2A8",
    name: "force_level",
  });
  t(ctx, slide, `${force.score}/10`, vx + 62, vy + 112, 210, 58, {
    size: 56,
    bold: true,
    color: "#FFFFFF",
    face: "Aptos Display",
    name: "force_score",
  });
  scoreBar(ctx, slide, force.score, vx + 62, vy + 238, 216, scoreInfo.color, "force_score_bar");

  t(ctx, slide, "这项力量看什么", vx + 62, vy + 286, 210, 28, {
    size: 20,
    bold: true,
    color: "#EAF3FF",
    name: "question_title",
  });
  force.questions.forEach((q, i) => {
    rect(ctx, slide, vx + 62, vy + 330 + i * 42, 20, 20, i === 0 ? "#FFFFFF" : "rgba(255,255,255,0.10)", {
      lineColor: "#FFFFFF",
      lineWidth: 1,
      name: `question_dot_${i + 1}`,
    });
    t(ctx, slide, q, vx + 98, vy + 326 + i * 42, 220, 30, {
      size: 16,
      color: "#F6FAFF",
      name: `question_${i + 1}`,
    });
  });
  t(ctx, slide, "定义", vx + 62, vy + 456, 46, 24, { size: 16, bold: true, color: "#EAF3FF", name: "definition_label" });
  t(ctx, slide, force.definition, vx + 116, vy + 454, 210, 58, { size: 14, color: "#C8D7E8", name: "definition_text" });

  t(ctx, slide, "关键证据", vx + 382, vy + 2, 160, 30, { size: 26, bold: true, color: C.text, name: "evidence_title" });
  force.evidence.forEach((ev, i) => {
    const x = vx + 382 + i * 266;
    t(ctx, slide, ev.num, x + 22, vy + 66, 194, 46, {
      size: ev.num.length > 7 ? 31 : 42,
      bold: true,
      color: scoreInfo.color,
      face: "Aptos Display",
      name: `evidence_${i + 1}_num`,
    });
    t(ctx, slide, ev.note, x + 22, vy + 126, 194, 56, { size: 15, color: C.text, name: `evidence_${i + 1}_note` });
    t(ctx, slide, `〔${ev.source}〕`, x + 22, vy + 190, 80, 18, { size: 12, color: C.muted, name: `evidence_${i + 1}_source` });
  });

  t(ctx, slide, "压力驱动因素", vx + 410, vy + 286, 180, 28, {
    size: 24,
    bold: true,
    color: C.primary,
    name: "drivers_title",
  });
  force.drivers.forEach((d, i) => {
    rect(ctx, slide, vx + 410, vy + 340 + i * 36, 10, 10, scoreInfo.color, { name: `driver_bullet_${i + 1}` });
    t(ctx, slide, d, vx + 436, vy + 331 + i * 36, 410, 26, { size: 17, color: C.text, name: `driver_${i + 1}` });
  });

  t(ctx, slide, "战略含义", vx + 954, vy + 286, 138, 28, {
    size: 24,
    bold: true,
    color: C.primary,
    name: "implication_title",
  });
  t(ctx, slide, force.implication, vx + 954, vy + 342, 390, 78, {
    size: 22,
    bold: true,
    color: C.text,
    name: "implication_text",
  });
  t(ctx, slide, "下一步：映射到利润驱动因子，判断利润到底被谁拿走。", vx + 954, vy + 438, 390, 34, {
    size: 15,
    color: C.muted,
    name: "next_step_hint",
  });

  footnote(ctx, slide, data);
  return slide;
}
