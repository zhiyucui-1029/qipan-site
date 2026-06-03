import { C, icon, rect, t } from "./shared.mjs";

const ART_BASE = "studio/renderers/pptx/slide-modules/industry-five-forces/assets/slide-02-static-base.png";

const PRESSURE_COLORS = {
  high: "#C8272B",
  medium: "#F39A16",
  low: "#149000",
};

const DIRECTION_COLORS = {
  blue: "#14457E",
  red: "#C8272B",
  orange: "#F39A16",
  green: "#149000",
};

function pressureBand(score) {
  if (score >= 60) return { band: "high", label: "高", legendColor: PRESSURE_COLORS.high };
  if (score >= 40) return { band: "medium", label: "中", legendColor: PRESSURE_COLORS.medium };
  return { band: "low", label: "低", legendColor: PRESSURE_COLORS.low };
}

function arrowStyle(score, preferredTone = "red") {
  const pressure = pressureBand(score);
  const baseColor = DIRECTION_COLORS[preferredTone] ?? pressure.legendColor;
  const intensity = Math.max(0.38, Math.min(1, score / 82));
  return {
    color: pressure.band === "high" ? PRESSURE_COLORS.high : pressure.band === "low" ? PRESSURE_COLORS.low : baseColor,
    opacity: intensity,
    width: Math.round(18 + score * 0.18),
    headScale: 0.84 + score / 180,
  };
}

function svgDataUrl(svg) {
  return `data:image/svg+xml;base64,${Buffer.from(svg, "utf8").toString("base64")}`;
}

async function svgLayer(ctx, slide, svg, x, y, w, h, name) {
  return ctx.addImage(slide, {
    dataUrl: svgDataUrl(svg),
    x,
    y,
    w,
    h,
    fit: "contain",
    alt: name,
    name,
  });
}

function straightArrowSvg(style, direction = "right") {
  const flip = direction === "left" ? ' transform="translate(260 0) scale(-1 1)"' : "";
  const head = 188 + style.headScale * 18;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="260" height="116" viewBox="0 0 260 116">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="${style.color}" stop-opacity="0"/>
        <stop offset="55%" stop-color="${style.color}" stop-opacity="${0.38 * style.opacity}"/>
        <stop offset="100%" stop-color="${style.color}" stop-opacity="${style.opacity}"/>
      </linearGradient>
    </defs>
    <g${flip}>
      <path d="M2 ${58 - style.width / 2} L${head} ${58 - style.width / 2} L${head} 31 L252 58 L${head} 89 L${head} ${58 + style.width / 2} L2 ${58 + style.width / 2} Z" fill="url(#g)"/>
    </g>
  </svg>`;
}

function curvedArrowSvg(style, direction = "right") {
  const flip = direction === "left" ? ' transform="translate(230 0) scale(-1 1)"' : "";
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="230" height="190" viewBox="0 0 230 190">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stop-color="${style.color}" stop-opacity="0"/>
        <stop offset="62%" stop-color="${style.color}" stop-opacity="${0.52 * style.opacity}"/>
        <stop offset="100%" stop-color="${style.color}" stop-opacity="${style.opacity}"/>
      </linearGradient>
    </defs>
    <g${flip}>
      <path d="M18 174 C64 124 106 82 158 52" fill="none" stroke="url(#g)" stroke-width="${style.width}" stroke-linecap="round"/>
      <path d="M146 34 L207 43 L170 94 Z" fill="${style.color}" opacity="${style.opacity}"/>
    </g>
  </svg>`;
}

function downChevronsSvg(style) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="110" height="72" viewBox="0 0 110 72">
    <path d="M16 8 L55 23 L94 8 L94 20 L55 38 L16 20 Z" fill="${style.color}" opacity="${0.45 * style.opacity}"/>
    <path d="M16 27 L55 42 L94 27 L94 39 L55 57 L16 39 Z" fill="${style.color}" opacity="${0.68 * style.opacity}"/>
    <path d="M16 46 L55 61 L94 46 L94 58 L55 70 L16 58 Z" fill="${style.color}" opacity="${style.opacity}"/>
  </svg>`;
}

async function dynamicArrows(ctx, slide, forces) {
  const supplier = arrowStyle(forces.supplier.score, "blue");
  const buyer = arrowStyle(forces.buyer.score, "blue");
  const entrant = arrowStyle(forces.entrant.score, "red");
  const rivalry = arrowStyle(forces.rivalry.score, "red");
  const substitute = arrowStyle(forces.substitute.score, "red");
  await svgLayer(ctx, slide, straightArrowSvg(supplier, "right"), 420, 354, 212, 112, "dynamic_arrow_supplier");
  await svgLayer(ctx, slide, straightArrowSvg(buyer, "left"), 1060, 354, 212, 112, "dynamic_arrow_buyer");
  await svgLayer(ctx, slide, downChevronsSvg(entrant), 748, 280, 110, 72, "dynamic_arrow_entrant");
  await svgLayer(ctx, slide, curvedArrowSvg(rivalry, "right"), 574, 552, 220, 188, "dynamic_arrow_rivalry");
  await svgLayer(ctx, slide, curvedArrowSvg(substitute, "left"), 848, 552, 220, 188, "dynamic_arrow_substitute");
}

async function forceCard(ctx, slide, card) {
  const iconX = card.iconX ?? card.x + 30;
  const titleX = card.titleX ?? card.x + 106;
  const scoreX = card.scoreX ?? titleX;
  const pressure = pressureBand(card.score);
  const textColor = pressure.band === "medium" ? card.toneColor ?? pressure.legendColor : pressure.legendColor;
  await icon(ctx, slide, card.icon, iconX, card.y + 34, 44, textColor, `${card.name}_icon`);
  t(ctx, slide, card.title, titleX, card.y + 30, 190, 34, {
    size: 24,
    bold: true,
    color: textColor,
    name: `${card.name}_title`,
  });
  t(ctx, slide, card.score, scoreX, card.y + 72, 74, 54, {
    size: 42,
    bold: true,
    color: textColor,
    face: "Aptos Display",
    name: `${card.name}_score`,
  });
  t(ctx, slide, card.level ?? pressure.label, scoreX + 88, card.y + 84, 72, 30, {
    size: 22,
    bold: true,
    color: pressure.legendColor,
    name: `${card.name}_level`,
  });
  card.bullets.forEach((bullet, index) => {
    const y = card.y + 128 + index * 36;
    t(ctx, slide, "•", card.x + 38, y - 2, 20, 24, {
      size: 23,
      bold: true,
      color: C.primary,
      face: "Aptos Display",
      name: `${card.name}_bullet_${index + 1}_dot`,
    });
    t(ctx, slide, bullet, card.x + 68, y, card.w - 92, 28, {
      size: 18,
      bold: true,
      color: "#40506C",
      name: `${card.name}_bullet_${index + 1}`,
    });
  });
}

const DEFAULT_FORCES = {
  supplier: {
    name: "supplier",
    x: 126,
    y: 276,
    w: 332,
    h: 236,
    icon: "ShoppingCart",
    title: "上游议价力",
    score: 58,
    bullets: ["原材料集中度较高", "替代成本较高"],
    titleX: 244,
    scoreX: 244,
    toneColor: DIRECTION_COLORS.blue,
  },
  entrant: {
    name: "entrant",
    x: 610,
    y: 72,
    w: 426,
    h: 206,
    icon: "UserRound",
    title: "新进入者威胁",
    score: 46,
    level: "中高",
    bullets: ["进入门槛中等", "资本与技术驱动进入"],
    iconX: 660,
    titleX: 758,
    scoreX: 758,
    toneColor: DIRECTION_COLORS.red,
  },
  buyer: {
    name: "buyer",
    x: 1206,
    y: 276,
    w: 332,
    h: 236,
    icon: "Users",
    title: "下游议价力",
    score: 42,
    bullets: ["客户集中度中等", "价格敏感度较高"],
    titleX: 1308,
    scoreX: 1308,
    toneColor: DIRECTION_COLORS.blue,
  },
  rivalry: {
    name: "rivalry",
    x: 218,
    y: 548,
    w: 374,
    h: 216,
    icon: "Swords",
    title: "现有竞争者",
    score: 72,
    bullets: ["竞争激烈，产能过剩", "同质化严重，价格战频繁"],
    titleX: 360,
    scoreX: 360,
    toneColor: DIRECTION_COLORS.red,
  },
  substitute: {
    name: "substitute",
    x: 1048,
    y: 548,
    w: 374,
    h: 216,
    icon: "RefreshCw",
    title: "替代品威胁",
    score: 64,
    bullets: ["替代方案成熟", "转移成本不断下降"],
    titleX: 1190,
    scoreX: 1190,
    toneColor: DIRECTION_COLORS.red,
  },
};

function loadPressureMap() {
  if (!process.env.FIVE_FORCES_PRESSURE_MAP_JSON) return DEFAULT_FORCES;
  try {
    const overrides = JSON.parse(process.env.FIVE_FORCES_PRESSURE_MAP_JSON);
    return Object.fromEntries(
      Object.entries(DEFAULT_FORCES).map(([key, value]) => {
        const override = overrides[key] ?? {};
        const merged = { ...value, ...override };
        if (Object.hasOwn(override, "score") && !Object.hasOwn(override, "level")) {
          merged.level = pressureBand(merged.score).label;
        }
        return [key, merged];
      }),
    );
  } catch {
    return DEFAULT_FORCES;
  }
}

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  const forces = loadPressureMap();
  await ctx.addImage(slide, {
    path: ART_BASE,
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fit: "fill",
    alt: "五力压力棋盘艺术底板",
    name: "slide_02_art_base",
  });

  await dynamicArrows(ctx, slide, forces);

  t(ctx, slide, "2)", 48, 34, 94, 68, {
    size: 55,
    bold: true,
    color: C.primary,
    face: "Aptos Display",
    name: "chapter_number",
  });
  t(ctx, slide, "五力压力棋盘", 142, 42, 430, 58, {
    size: 46,
    bold: true,
    color: C.primary,
    name: "slide_title",
  });
  t(ctx, slide, "五种力量共同作用，持续挤压行业利润池", 50, 116, 560, 32, {
    size: 22,
    bold: true,
    color: "#5D6C83",
    name: "slide_subtitle",
  });
  rect(ctx, slide, 50, 163, 72, 5, "#71B300", { name: "title_accent_rule" });

  const red = "#C8272B";
  const orange = "#F39A16";

  t(ctx, slide, "行业", 740, 404, 118, 42, {
    size: 31,
    bold: true,
    color: "#FFFFFF",
    align: "center",
    name: "profit_pool_text_1",
  });
  t(ctx, slide, "利润池", 722, 448, 154, 42, {
    size: 31,
    bold: true,
    color: "#FFFFFF",
    align: "center",
    name: "profit_pool_text_2",
  });
  t(ctx, slide, "价值 / 利润空间", 706, 506, 188, 30, {
    size: 21,
    bold: true,
    color: "#D9E9FA",
    align: "center",
    name: "profit_pool_text_3",
  });

  await forceCard(ctx, slide, forces.supplier);
  await forceCard(ctx, slide, forces.entrant);
  await forceCard(ctx, slide, forces.buyer);
  await forceCard(ctx, slide, forces.rivalry);
  await forceCard(ctx, slide, forces.substitute);

  t(ctx, slide, "压力强度：", 486, 797, 120, 24, {
    size: 18,
    bold: true,
    color: C.primary,
    name: "legend_title",
  });
  const legendItems = [
    { color: red, text: "高（60–100）", x: 650 },
    { color: orange, text: "中（40–59）", x: 845 },
    { color: "#009000", text: "低（0–39）", x: 1040 },
  ];
  legendItems.forEach((item, index) => {
    rect(ctx, slide, item.x, 801, 16, 16, item.color, {
      geometry: "ellipse",
      name: `legend_dot_${index + 1}`,
    });
    t(ctx, slide, item.text, item.x + 28, 797, 130, 24, {
      size: 17,
      bold: true,
      color: "#526177",
      name: `legend_text_${index + 1}`,
    });
  });

  t(ctx, slide, "来源：公司策略 / 行业报告 / 公开数据", 48, 866, 520, 24, {
    size: 17,
    bold: true,
    color: "#667085",
    name: "source_note",
  });
  t(ctx, slide, "注：评分越高表示压力越大", 1220, 866, 320, 24, {
    size: 17,
    bold: true,
    color: "#667085",
    align: "right",
    name: "scoring_note",
  });

  return slide;
}
