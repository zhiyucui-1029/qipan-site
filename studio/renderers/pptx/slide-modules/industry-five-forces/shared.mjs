export const C = {
  primary: "#14457E",
  secondary: "#0B2F58",
  accent: "#71B300",
  gold: "#D6A84F",
  background: "#F7F8F6",
  surface: "#FFFFFF",
  text: "#172033",
  muted: "#667085",
  divider: "#D7DDE6",
  risk: "#B84A3A",
  warning: "#B98500",
  softBlue: "#EAF1F8",
  softGreen: "#EEF7E6",
  softGold: "#F7F0DF",
  softRed: "#F8EDEA",
};

export const ASSETS = {
  pressureBoardBg: "studio/renderers/pptx/slide-modules/industry-five-forces/assets/pressure-board-bg.svg",
  forceDetailBg: "studio/renderers/pptx/slide-modules/industry-five-forces/assets/force-detail-bg.svg",
};

export function rect(ctx, slide, x, y, w, h, fill, options = {}) {
  return ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill,
    line: options.line ?? ctx.line(options.lineColor ?? "#00000000", options.lineWidth ?? 0),
    name: options.name,
    geometry: options.geometry,
  });
}

export function t(ctx, slide, text, x, y, w, h, options = {}) {
  return ctx.addText(slide, {
    text: String(text ?? ""),
    x,
    y,
    w,
    h,
    fontSize: options.size ?? 24,
    color: options.color ?? C.text,
    bold: options.bold ?? false,
    typeface: options.face ?? "PingFang SC",
    align: options.align ?? "left",
    valign: options.valign ?? "top",
    insets: options.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    fill: options.fill,
    line: options.line,
    name: options.name,
  });
}

export async function icon(ctx, slide, iconName, x, y, size = 36, color = C.primary, name = iconName) {
  try {
    await ctx.addLucideIcon(slide, {
      icon: iconName,
      x,
      y,
      w: size,
      h: size,
      color,
      strokeWidth: 2.1,
      name,
    });
  } catch {
    t(ctx, slide, "•", x, y, size, size, { size, color, bold: true, name: `${name}_fallback` });
  }
}

export async function image(ctx, slide, path, x, y, w, h, options = {}) {
  return ctx.addImage(slide, {
    path,
    x,
    y,
    w,
    h,
    fit: options.fit ?? "fill",
    alt: options.alt ?? "",
    name: options.name,
  });
}

export function addPage(ctx, slide, data, pageNo, section) {
  rect(ctx, slide, 0, 0, ctx.W, ctx.H, C.background, { name: "page_background" });
  rect(ctx, slide, 36, 28, 8, 54, C.primary, { name: "header_rule" });
  t(ctx, slide, section, 58, 30, 240, 28, {
    size: 18,
    bold: true,
    color: C.primary,
    face: "Aptos",
    name: "section_label",
  });
  t(ctx, slide, data.caseLabel, 1210, 34, 320, 28, {
    size: 17,
    bold: true,
    color: C.primary,
    align: "right",
    name: "case_label",
  });
  t(ctx, slide, String(pageNo).padStart(2, "0"), 1506, 828, 52, 28, {
    size: 18,
    bold: true,
    color: C.muted,
    align: "right",
    face: "Aptos",
    name: "page_number",
  });
}

export function titleBlock(ctx, slide, title, subtitle, x = 58, y = 68, w = 900) {
  t(ctx, slide, title, x, y, w, 58, { size: 48, bold: true, color: C.text, name: "slide_title" });
  if (subtitle) {
    t(ctx, slide, subtitle, x, y + 68, w, 34, { size: 22, color: C.muted, name: "slide_subtitle" });
    rect(ctx, slide, x, y + 116, 72, 4, C.accent, { name: "title_accent_rule" });
  }
}

export function footnote(ctx, slide, data) {
  rect(ctx, slide, 42, 818, 1380, 1.2, C.divider, { name: "footer_rule" });
  t(ctx, slide, "来源：", 44, 848, 58, 18, { size: 12, bold: true, color: C.primary, name: "source_label" });
  t(ctx, slide, data.sources.join("  |  "), 104, 848, 1180, 18, {
    size: 10.5,
    color: C.muted,
    face: "Aptos",
    name: "source_footnote",
  });
}

export function card(ctx, slide, x, y, w, h, options = {}) {
  rect(ctx, slide, x + 5, y + 6, w, h, "rgba(20, 69, 126, 0.05)", { name: options.name ? `${options.name}_shadow` : undefined });
  rect(ctx, slide, x, y, w, h, options.fill ?? C.surface, {
    lineColor: options.lineColor ?? "#CDD7E5",
    lineWidth: options.lineWidth ?? 1.2,
    name: options.name,
  });
}

export function scoreBar(ctx, slide, score, x, y, w, color, name = "score_bar") {
  rect(ctx, slide, x, y, w, 12, "#E2E8F0", { name: `${name}_track` });
  rect(ctx, slide, x, y, Math.max(8, (score / 10) * w), 12, color, { name: `${name}_value` });
}

export function miniForceBars(ctx, slide, forces, x, y, w, rowH = 44) {
  forces.forEach((force, i) => {
    const yy = y + i * rowH;
    t(ctx, slide, force.name, x, yy, 120, 24, { size: 16, bold: true, color: C.text, name: `mini_force_${i + 1}_name` });
    scoreBar(ctx, slide, force.score, x + 136, yy + 7, w - 198, force.color, `mini_force_${i + 1}`);
    t(ctx, slide, force.level, x + w - 46, yy - 1, 42, 24, {
      size: 15,
      bold: true,
      color: force.color,
      align: "right",
      name: `mini_force_${i + 1}_level`,
    });
  });
}

export async function pressureBoard(ctx, slide, data, x, y, w, h, compact = false) {
  rect(ctx, slide, x, y, w, h, "#F4F8FB", { lineColor: "#C7D5E6", lineWidth: 1.2, name: "pressure_board" });
  const cx = x + w / 2;
  const cy = y + h / 2;
  rect(ctx, slide, cx - 120, cy - 70, 240, 140, C.primary, { name: "profit_pool_center" });
  t(ctx, slide, "行业利润池", cx - 95, cy - 34, 190, 34, { size: 27, bold: true, color: "#FFFFFF", align: "center", name: "profit_pool_text" });
  t(ctx, slide, `${data.attractiveness.score}/10`, cx - 64, cy + 8, 128, 28, { size: 27, bold: true, color: C.accent, align: "center", face: "Aptos Display", name: "profit_pool_score" });

  const zones = [
    { force: data.forceScores[0], px: x + 48, py: cy - 58, arrowIcon: "ArrowRight", ax: cx - 210, ay: cy - 16 },
    { force: data.forceScores[1], px: x + w - 228, py: cy - 58, arrowIcon: "ArrowLeft", ax: cx + 170, ay: cy - 16 },
    { force: data.forceScores[2], px: cx - 98, py: y + h - 108, arrowIcon: "ArrowUp", ax: cx - 17, ay: cy + 90 },
    { force: data.forceScores[3], px: cx - 98, py: y + 42, arrowIcon: "ArrowDown", ax: cx - 17, ay: cy - 130 },
    { force: data.forceScores[4], px: x + w - 228, py: y + 42, arrowIcon: "MoveDownLeft", ax: cx + 156, ay: cy - 116 },
  ];

  for (let i = 0; i < zones.length; i += 1) {
    const zone = zones[i];
    card(ctx, slide, zone.px, zone.py, 196, 76, { fill: "#FFFFFF", lineColor: zone.force.color, lineWidth: 1.4, name: `pressure_zone_${i + 1}` });
    t(ctx, slide, zone.force.name, zone.px + 16, zone.py + 14, 118, 26, { size: compact ? 16 : 18, bold: true, color: C.text, name: `pressure_zone_${i + 1}_name` });
    t(ctx, slide, zone.force.level, zone.px + 138, zone.py + 14, 42, 24, { size: 15, bold: true, color: zone.force.color, align: "right", name: `pressure_zone_${i + 1}_level` });
    scoreBar(ctx, slide, zone.force.score, zone.px + 16, zone.py + 52, 162, zone.force.color, `pressure_zone_${i + 1}_score`);
    await icon(ctx, slide, zone.arrowIcon, zone.ax, zone.ay, compact ? 26 : 34, zone.force.color, `pressure_arrow_${i + 1}`);
  }
}

export async function forceDetailPage(ctx, slide, data, forceKey, pageNo) {
  const force = data.forces[forceKey];
  const scoreInfo = data.forceScores.find((item) => item.id === forceKey);
  addPage(ctx, slide, data, pageNo, "FORCE DETAIL");
  titleBlock(ctx, slide, force.pageTitle, force.headline);

  card(ctx, slide, 58, 202, 360, 560, { name: "left_force_panel" });
  await icon(ctx, slide, force.icon, 88, 228, 48, scoreInfo.color, "force_icon");
  t(ctx, slide, force.level, 156, 228, 78, 32, { size: 24, bold: true, color: scoreInfo.color, name: "force_level" });
  t(ctx, slide, `${force.score}/10`, 88, 280, 210, 58, { size: 54, bold: true, color: scoreInfo.color, face: "Aptos Display", name: "force_score" });
  scoreBar(ctx, slide, force.score, 88, 354, 270, scoreInfo.color, "force_score_bar");
  t(ctx, slide, "这项力量看什么", 88, 396, 210, 28, { size: 21, bold: true, color: C.primary, name: "question_title" });
  force.questions.forEach((q, i) => {
    rect(ctx, slide, 88, 440 + i * 50, 24, 24, i === 0 ? C.primary : C.softBlue, { lineColor: C.primary, lineWidth: 1, name: `question_dot_${i + 1}` });
    t(ctx, slide, q, 124, 436 + i * 50, 238, 36, { size: 17, color: C.text, name: `question_${i + 1}` });
  });
  rect(ctx, slide, 88, 610, 270, 1.2, C.divider, { name: "definition_rule" });
  t(ctx, slide, "定义", 88, 632, 46, 24, { size: 17, bold: true, color: C.primary, name: "definition_label" });
  t(ctx, slide, force.definition, 140, 630, 218, 76, { size: 16, color: C.muted, name: "definition_text" });

  t(ctx, slide, "关键证据", 458, 202, 160, 30, { size: 26, bold: true, color: C.text, name: "evidence_title" });
  force.evidence.forEach((ev, i) => {
    const x = 458 + i * 266;
    card(ctx, slide, x, 246, 240, 188, { name: `evidence_${i + 1}` });
    t(ctx, slide, ev.num, x + 22, 276, 194, 48, { size: ev.num.length > 7 ? 31 : 42, bold: true, color: scoreInfo.color, face: "Aptos Display", name: `evidence_${i + 1}_num` });
    t(ctx, slide, ev.note, x + 22, 338, 194, 58, { size: 15, color: C.text, name: `evidence_${i + 1}_note` });
    t(ctx, slide, `〔${ev.source}〕`, x + 22, 402, 80, 18, { size: 12, color: C.muted, name: `evidence_${i + 1}_source` });
  });

  card(ctx, slide, 458, 474, 510, 230, { fill: "#FFFFFF", name: "drivers_card" });
  t(ctx, slide, "压力驱动因素", 486, 502, 180, 28, { size: 24, bold: true, color: C.primary, name: "drivers_title" });
  force.drivers.forEach((d, i) => {
    rect(ctx, slide, 486, 550 + i * 36, 10, 10, scoreInfo.color, { name: `driver_bullet_${i + 1}` });
    t(ctx, slide, d, 512, 541 + i * 36, 410, 26, { size: 17, color: C.text, name: `driver_${i + 1}` });
  });

  card(ctx, slide, 1000, 474, 500, 230, { fill: "#F5F9FC", lineColor: "#BFD0E4", name: "implication_card" });
  t(ctx, slide, "战略含义", 1032, 502, 138, 28, { size: 24, bold: true, color: C.primary, name: "implication_title" });
  t(ctx, slide, force.implication, 1032, 548, 410, 92, { size: 21, bold: true, color: C.text, name: "implication_text" });
  t(ctx, slide, "下一步：把这项压力映射到利润池驱动因子，而不是直接写行动清单。", 1032, 654, 410, 34, { size: 15, color: C.muted, name: "next_step_hint" });

  footnote(ctx, slide, data);
}
