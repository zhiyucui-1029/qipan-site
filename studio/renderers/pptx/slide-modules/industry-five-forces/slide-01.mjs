import { loadFiveForcesData } from "./data.mjs";
import { C, addPage, card, footnote, miniForceBars, rect, t, titleBlock } from "./shared.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  const data = loadFiveForcesData();
  addPage(ctx, slide, data, 1, "INDUSTRY ATTRACTIVENESS");
  titleBlock(ctx, slide, "行业吸引力结论", data.attractiveness.claim, 58, 72, 1020);

  card(ctx, slide, 58, 230, 420, 300, { fill: C.primary, lineColor: C.primary, name: "score_panel" });
  t(ctx, slide, data.industry, 94, 258, 260, 26, { size: 22, bold: true, color: "#FFFFFF", name: "industry_label" });
  t(ctx, slide, data.attractiveness.score, 94, 306, 176, 80, { size: 78, bold: true, color: C.accent, face: "Aptos Display", name: "attractiveness_score" });
  t(ctx, slide, "/10", 300, 344, 80, 36, { size: 30, bold: true, color: "#FFFFFF", face: "Aptos", name: "score_unit" });
  t(ctx, slide, data.attractiveness.label, 94, 412, 160, 32, { size: 26, bold: true, color: "#FFFFFF", name: "score_label" });
  t(ctx, slide, "行业有增长，但利润池的可获得性已经分化。", 94, 460, 300, 42, { size: 18, color: "#D8E6F3", name: "score_note" });

  data.attractiveness.pressureSummary.forEach((item, i) => {
    const x = 522 + i * 310;
    card(ctx, slide, x, 230, 270, 138, { name: `conclusion_card_${i + 1}` });
    t(ctx, slide, `0${i + 1}`, x + 22, 252, 50, 28, { size: 23, bold: true, color: C.accent, face: "Aptos", name: `conclusion_no_${i + 1}` });
    t(ctx, slide, item, x + 22, 294, 210, 34, { size: 24, bold: true, color: C.text, name: `conclusion_text_${i + 1}` });
  });

  card(ctx, slide, 522, 410, 420, 264, { name: "ranking_panel" });
  t(ctx, slide, "五力压力排序", 552, 438, 180, 28, { size: 24, bold: true, color: C.text, name: "ranking_title" });
  miniForceBars(ctx, slide, data.forceScores, 552, 492, 330, 34);

  card(ctx, slide, 982, 410, 518, 264, { fill: "#F5F9FC", lineColor: "#BFD0E4", name: "transition_panel" });
  t(ctx, slide, "下一页展开压力棋盘", 1020, 448, 300, 34, { size: 28, bold: true, color: C.primary, name: "transition_title" });
  t(ctx, slide, "总览页只负责给出行业吸引力判断；第二页再把五种力量的挤压方向画清楚。", 1020, 508, 360, 68, { size: 21, color: C.text, name: "transition_text" });
  rect(ctx, slide, 1020, 608, 260, 6, C.accent, { name: "transition_rule" });
  footnote(ctx, slide, data);
  return slide;
}
