const BRAND_PRESETS = {
  "r3-trineering": {
    primary: "#14457E",
    secondary: "#0B2F58",
    accent: "#71B300",
    background: "#F7F8F6",
    surface: "#FFFFFF",
    text: "#172033",
    muted: "#667085",
    divider: "#D7DDE6",
    risk: "#B84A3A",
    warning: "#B98500",
  },
  "qipan-site": {
    primary: "#0B4D45",
    secondary: "#0D2D44",
    accent: "#D6A84F",
    background: "#F7F4EE",
    surface: "#FFFFFF",
    text: "#18202B",
    muted: "#6D7583",
    divider: "#D8D1C3",
    risk: "#B84A3A",
    warning: "#B98500",
  },
};

const selectedBrand = process.env.SIGNAL_BRAND || "r3-trineering";
const C = BRAND_PRESETS[selectedBrand] || BRAND_PRESETS["r3-trineering"];

const DEFAULT_DATA = {
  title: "公开信号扫描",
  subtitle: "先定义指标，再判断它意味着什么",
  caseLabel: "耐克中国增长破局 · 2026",
  sourceFootnote:
    "S1 Nike FY2025 10-K  |  S2 Nike FY26 Q2 Transcript  |  S3 Nike FY26 Q3 Transcript  |  S4 Reuters  |  S5 ANTA 2025 Results",
  initialDirections: ["渠道健康度", "运动场景重构", "本土化溢价"],
  cards: [
    {
      index: "1",
      title: "收入连续承压",
      icon: "TrendingDown",
      sourceRefs: "〔S1/S2/S3〕",
      bigNumber: "-13% / -16% / -10%",
      numberColor: "#B84A3A",
      metricNote: "FY25 全年、FY26 Q2、FY26 Q3 大中华区收入同比变化。",
      strategicRead: "压力跨年度延续，不像单季波动，更像区域增长模型承压。",
      confidence: "高",
      confidenceColor: "#71B300",
      sourceShort: "S1/S2/S3",
    },
    {
      index: "2",
      title: "数字渠道折扣化",
      icon: "BadgePercent",
      sourceRefs: "〔S1/S2〕",
      bigNumber: "-36%",
      numberColor: "#B84A3A",
      metricNote: "FY26 Q2 大中华区数字销售同比变化；FY25 Digital 为 -22%。",
      strategicRead: "线上渠道显著跑输整体收入，折扣/清货正在伤害高端定位。",
      confidence: "高",
      confidenceColor: "#71B300",
      sourceShort: "S1/S2",
    },
    {
      index: "3",
      title: "批发与库存清理",
      icon: "Warehouse",
      sourceRefs: "〔S2/S3〕",
      bigNumber: "-15% / -13%",
      numberColor: "#B84A3A",
      metricNote: "FY26 Q2 / Q3 大中华区批发收入同比变化。",
      strategicRead: "公司主动压低 sell-in，真正要看 sell-through、正价率和伙伴库存。",
      confidence: "高",
      confidenceColor: "#71B300",
      sourceShort: "S2/S3",
    },
    {
      index: "4",
      title: "运动场景仍有增长",
      icon: "Footprints",
      sourceRefs: "〔S2/S3〕",
      bigNumber: "+20%+",
      numberColor: "#71B300",
      metricNote: "跑步品类在 FY26 Q2 连续第二个季度增长超过 20%。",
      strategicRead: "机会在专业运动场景，不在泛潮流品类的平均修补。",
      confidence: "高",
      confidenceColor: "#71B300",
      sourceShort: "S2/S3",
    },
    {
      index: "5",
      title: "溢价理由不足",
      icon: "Gem",
      sourceRefs: "〔S4〕",
      bigNumber: "PREMIUM?",
      numberColor: "#B98500",
      metricNote: "媒体采访指出，全球品牌在中国的 premium price 缺少足够本土理由。",
      strategicRead: "需要重建“为什么中国消费者愿意多付钱”。",
      confidence: "中",
      confidenceColor: "#B98500",
      sourceShort: "S4",
    },
    {
      index: "6",
      title: "竞争生态位被夹击",
      icon: "UsersRound",
      sourceRefs: "〔S4/S5〕",
      bigNumber: "+13.3%",
      numberColor: "#71B300",
      metricNote: "某本土运动品牌 2025 年收入 802.2 亿元，同比增长 13.3%。",
      strategicRead: "本土品牌吃掉大众盘，专业新品牌切走高增长场景。",
      confidence: "高",
      confidenceColor: "#71B300",
      sourceShort: "S4/S5",
    },
  ],
};

function loadData() {
  if (!process.env.SIGNAL_SLIDE_DATA_JSON) return DEFAULT_DATA;
  try {
    return {
      ...DEFAULT_DATA,
      ...JSON.parse(process.env.SIGNAL_SLIDE_DATA_JSON),
    };
  } catch {
    return DEFAULT_DATA;
  }
}

function t(ctx, slide, text, x, y, w, h, options = {}) {
  return ctx.addText(slide, {
    text,
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

function rect(ctx, slide, x, y, w, h, fill, options = {}) {
  return ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill,
    line: options.line ?? ctx.line(options.lineColor ?? "#00000000", options.lineWidth ?? 0),
    name: options.name,
  });
}

async function icon(ctx, slide, iconName, x, y, size, color, name) {
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
    rect(ctx, slide, x, y, size, size, "#00000000", {
      lineColor: color,
      lineWidth: 2,
      name: `${name}_fallback_box`,
    });
  }
}

function addHeader(ctx, slide, data) {
  const caseLabel = data.caseLabel || "";
  const caseLabelSize = caseLabel.length > 17 ? 16 : caseLabel.length > 13 ? 18 : 21;

  rect(ctx, slide, 36, 26, 8, 66, C.primary, { name: "title_vertical_rule" });
  t(ctx, slide, data.title, 58, 24, 520, 66, {
    size: 56,
    bold: true,
    color: C.primary,
    name: "slide_title",
  });
  t(ctx, slide, data.subtitle, 60, 106, 650, 34, {
    size: 23,
    color: C.muted,
    name: "slide_subtitle",
  });
  rect(ctx, slide, 62, 144, 70, 4, C.accent, { name: "title_green_rule" });
  rect(ctx, slide, 1206, 36, 360, 42, C.primary, { name: "case_label_pill" });
  t(ctx, slide, caseLabel, 1226, 44, 318, 24, {
    size: caseLabelSize,
    bold: true,
    color: "#FFFFFF",
    align: "center",
    name: "case_label",
  });
}

function addCardChrome(ctx, slide, x, y, w, h, card) {
  rect(ctx, slide, x + 4, y + 5, w, h, "rgba(20, 69, 126, 0.06)", {
    name: `card_${card.index}_shadow`,
  });
  rect(ctx, slide, x, y, w, h, C.surface, {
    lineColor: "#C9D3E2",
    lineWidth: 1.2,
    name: `card_${card.index}_surface`,
  });
  rect(ctx, slide, x + 18, y + 18, 46, 46, C.primary, {
    name: `card_${card.index}_index_box`,
  });
  t(ctx, slide, card.index, x + 18, y + 24, 46, 28, {
    size: 23,
    bold: true,
    color: "#FFFFFF",
    align: "center",
    name: `card_${card.index}_index`,
  });
  t(ctx, slide, card.title, x + 78, y + 22, 248, 35, {
    size: 25,
    bold: true,
    color: C.text,
    name: `card_${card.index}_title`,
  });
  t(ctx, slide, card.sourceRefs, x + w - 140, y + 26, 116, 24, {
    size: 13,
    color: C.text,
    align: "right",
    name: `card_${card.index}_source_refs`,
  });
  rect(ctx, slide, x + 18, y + 74, w - 36, 1.2, C.divider, {
    name: `card_${card.index}_title_divider`,
  });
  rect(ctx, slide, x + 18, y + h - 90, w - 36, 1.2, "#DDE3EC", {
    name: `card_${card.index}_read_divider`,
  });
}

async function addEvidenceCard(ctx, slide, card, frame) {
  const { x, y, w, h } = frame;
  const numberColor = card.numberColor || C.primary;
  addCardChrome(ctx, slide, x, y, w, h, card);

  await icon(ctx, slide, card.icon, x + 30, y + 105, 62, numberColor, `card_${card.index}_icon`);

  const numberSize = card.bigNumber.includes("PREMIUM")
    ? 48
    : card.bigNumber.length > 16
      ? 34
      : card.bigNumber.length > 11
        ? 40
        : card.bigNumber.length > 8
          ? 48
          : 66;
  t(ctx, slide, card.bigNumber, x + 110, y + 94, w - 126, 78, {
    size: numberSize,
    bold: true,
    color: numberColor,
    face: "Aptos Display",
    name: `card_${card.index}_big_number`,
  });

  t(ctx, slide, "指标说明：", x + 22, y + 178, 96, 24, {
    size: 17,
    bold: true,
    color: C.text,
    name: `card_${card.index}_metric_label`,
  });
  t(ctx, slide, card.metricNote, x + 120, y + 178, w - 144, 46, {
    size: 16,
    color: C.text,
    name: `card_${card.index}_metric_note`,
  });

  t(ctx, slide, "解读：", x + 22, y + 232, 62, 24, {
    size: 17,
    bold: true,
    color: C.primary,
    name: `card_${card.index}_read_label`,
  });
  t(ctx, slide, card.strategicRead, x + 96, y + 232, w - 122, 44, {
    size: 16,
    color: C.text,
    name: `card_${card.index}_strategic_read`,
  });

  t(ctx, slide, `来源：${card.sourceShort}`, x + 22, y + h - 30, 220, 18, {
    size: 12,
    color: C.text,
    name: `card_${card.index}_source_short`,
  });
  t(ctx, slide, "可信度：", x + w - 118, y + h - 30, 70, 18, {
    size: 13,
    color: C.muted,
    align: "right",
    name: `card_${card.index}_confidence_label`,
  });
  rect(ctx, slide, x + w - 44, y + h - 34, 26, 22, card.confidenceColor || C.accent, {
    name: `card_${card.index}_confidence_chip`,
  });
  t(ctx, slide, card.confidence, x + w - 39, y + h - 31, 16, 18, {
    size: 13,
    bold: true,
    color: "#FFFFFF",
    align: "center",
    name: `card_${card.index}_confidence`,
  });
}

function addFooter(ctx, slide, data, W) {
  rect(ctx, slide, 34, 820, W - 68, 1.2, C.divider, { name: "footer_rule" });
  t(ctx, slide, "来源说明：", 38, 850, 84, 20, {
    size: 15,
    bold: true,
    color: C.primary,
    name: "source_footnote_label",
  });
  t(ctx, slide, data.sourceFootnote, 140, 850, 748, 20, {
    size: 12.5,
    color: C.text,
    face: "Aptos",
    name: "source_footnote",
  });

  rect(ctx, slide, 920, 834, 1.2, 46, C.divider, { name: "direction_divider" });
  t(ctx, slide, "初步指向", 942, 846, 96, 28, {
    size: 23,
    bold: true,
    color: C.primary,
    name: "initial_direction_title",
  });

  const chipColors = [C.primary, C.accent, C.warning, C.secondary];
  let x = 1050;
  data.initialDirections.slice(0, 4).forEach((label, index) => {
    const chipW = Math.max(128, label.length * 22 + 42);
    rect(ctx, slide, x, 834, chipW, 46, "#FFFFFF", {
      lineColor: chipColors[index],
      lineWidth: 1.3,
      name: `direction_chip_${index + 1}`,
    });
    t(ctx, slide, label, x + 18, 846, chipW - 36, 22, {
      size: 19,
      bold: true,
      color: chipColors[index],
      align: "center",
      name: `direction_chip_${index + 1}_text`,
    });
    x += chipW + 16;
  });
}

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  const W = ctx.W;
  const H = ctx.H;
  const data = loadData();

  rect(ctx, slide, 0, 0, W, H, C.background, { name: "background" });
  addHeader(ctx, slide, data);

  const marginX = 34;
  const gapX = 18;
  const cardW = (W - marginX * 2 - gapX * 2) / 3;
  const cardH = 310;
  const startY = 160;
  const gapY = 20;

  for (let i = 0; i < Math.min(data.cards.length, 6); i += 1) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    await addEvidenceCard(ctx, slide, data.cards[i], {
      x: marginX + col * (cardW + gapX),
      y: startY + row * (cardH + gapY),
      w: cardW,
      h: cardH,
    });
  }

  addFooter(ctx, slide, data, W);
  return slide;
}
