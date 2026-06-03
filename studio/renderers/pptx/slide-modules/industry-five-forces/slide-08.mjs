import { loadFiveForcesData } from "./data.mjs";
import { C, addPage, card, footnote, rect, t, titleBlock } from "./shared.mjs";

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  const data = loadFiveForcesData();
  addPage(ctx, slide, data, 8, "PROFIT DRIVERS");
  titleBlock(ctx, slide, "利润驱动因子", "五力分析不直接跳到行动；它先回答行业的钱到底被谁拿走。");

  card(ctx, slide, 58, 210, 360, 520, { fill: C.primary, lineColor: C.primary, name: "profit_conclusion_panel" });
  t(ctx, slide, "利润池质量", 92, 242, 140, 28, { size: 23, bold: true, color: "#FFFFFF", name: "profit_quality_title" });
  t(ctx, slide, data.attractiveness.label, 92, 294, 190, 48, { size: 40, bold: true, color: C.accent, name: "profit_quality_label" });
  t(ctx, slide, "主要漏损点", 92, 390, 140, 26, { size: 22, bold: true, color: "#FFFFFF", name: "leak_title" });
  ["竞争损耗", "价格实现", "渠道库存"].forEach((item, i) => {
    t(ctx, slide, item, 92, 436 + i * 52, 160, 30, { size: 22, bold: true, color: i === 0 ? C.accent : "#DDEAF4", name: `leak_${i + 1}` });
    rect(ctx, slide, 250, 448 + i * 52, 92 - i * 18, 10, i === 0 ? C.accent : "#9FB8CC", { name: `leak_bar_${i + 1}` });
  });
  t(ctx, slide, "判断：行业仍能赚钱，但利润更多流向具备场景心智、渠道纪律和供应链效率的玩家。", 92, 616, 250, 72, { size: 17, color: "#DDEAF4", name: "profit_conclusion" });

  t(ctx, slide, "利润阀门", 468, 210, 140, 30, { size: 26, bold: true, color: C.text, name: "driver_title" });
  data.profitDrivers.forEach((driver, i) => {
    const x = 468 + i * 150;
    card(ctx, slide, x, 266, 122, 348, { fill: i % 2 === 0 ? "#FFFFFF" : "#F5F9FC", lineColor: driver.color, lineWidth: 1.2, name: `driver_${i + 1}_card` });
    rect(ctx, slide, x + 21, 298, 80, 80, driver.color, { name: `driver_${i + 1}_circle` });
    t(ctx, slide, String(i + 1), x + 21, 320, 80, 34, { size: 30, bold: true, color: "#FFFFFF", align: "center", face: "Aptos Display", name: `driver_${i + 1}_no` });
    t(ctx, slide, driver.name, x + 14, 422, 94, 34, { size: 20, bold: true, color: C.text, align: "center", name: `driver_${i + 1}_name` });
    t(ctx, slide, driver.value, x + 14, 472, 94, 28, { size: 20, bold: true, color: driver.color, align: "center", name: `driver_${i + 1}_value` });
    t(ctx, slide, driver.note, x + 14, 524, 94, 66, { size: 13, color: C.muted, align: "center", name: `driver_${i + 1}_note` });
  });

  card(ctx, slide, 1236, 266, 276, 348, { name: "validation_card" });
  t(ctx, slide, "下一步验证议题", 1262, 296, 196, 28, { size: 23, bold: true, color: C.primary, name: "validation_title" });
  data.validationQuestions.forEach((q, i) => {
    rect(ctx, slide, 1262, 352 + i * 54, 24, 24, i === 0 ? C.primary : "#FFFFFF", { lineColor: C.primary, lineWidth: 1.2, name: `validation_dot_${i + 1}` });
    t(ctx, slide, q, 1298, 346 + i * 54, 164, 34, { size: 17, bold: i === 0, color: C.text, name: `validation_question_${i + 1}` });
  });
  t(ctx, slide, "五力压力 → 利润池受损点 → 驱动因子 → 验证议题", 468, 672, 760, 28, { size: 22, bold: true, color: C.primary, name: "logic_chain" });
  footnote(ctx, slide, data);
  return slide;
}
