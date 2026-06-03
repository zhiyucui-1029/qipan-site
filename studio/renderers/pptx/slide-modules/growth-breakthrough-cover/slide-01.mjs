const BRAND_PRESETS = {
  "qipan-site": {
    colors: {
      primary: "#0B4D45",
      secondary: "#0D2D44",
      accent: "#D6A84F",
      background: "#F7F4EE",
      surface: "#FFFFFF",
      text: "#18202B",
      muted: "#6D7583",
      divider: "#D8D1C3",
      overline: "#8A5A2C",
      bottomDivider: "#8BA79F",
      bottomSubtitle: "#D9E3DF",
    },
    lockup: {
      type: "text",
      primary: "qipan.site",
      secondary: "AI Strategy Board Studio",
    },
  },
  "r3-trineering": {
    colors: {
      primary: "#14457E",
      secondary: "#0B2F58",
      accent: "#71B300",
      background: "#F7F8F6",
      surface: "#FFFFFF",
      text: "#172033",
      muted: "#667085",
      divider: "#D7DDE6",
      overline: "#14457E",
      bottomDivider: "#7FA0BD",
      bottomSubtitle: "#E6EEF5",
    },
    lockup: {
      type: "image",
      path: "studio/design-system/brand-assets/r3-trineering/logo-horizontal-color.png",
      alt: "Trineering logo",
      primary: "R3 源力势界",
      secondary: "AI Strategy Board Studio",
    },
  },
};

const selectedBrand = process.env.COVER_BRAND || "qipan-site";
const BRAND = BRAND_PRESETS[selectedBrand] || BRAND_PRESETS["qipan-site"];
const C = BRAND.colors;
const GROWTH_GREEN = "#71B300";

const COVER_LAYOUTS = new Set(["diagonal-split", "dark-research", "symbol-minimal"]);
const selectedLayout = process.env.COVER_LAYOUT || "diagonal-split";

const COVER = {
  layout: COVER_LAYOUTS.has(selectedLayout) ? selectedLayout : "diagonal-split",
  reportSeries: process.env.COVER_REPORT_SERIES || "增长问题破局系列报告 · 2026",
  title: process.env.COVER_TITLE || "耐克中国增长破局",
  subtitle: process.env.COVER_SUBTITLE || "一个全球运动品牌如何重新找回增长位置",
  heroImagePath:
    process.env.COVER_HERO_IMAGE ||
    "studio/asset-packs/sportswear/background-images/nike-china-hero-v01.png",
  heroAlt: process.env.COVER_HERO_ALT || "Growth breakthrough report hero image",
  symbolImagePath:
    process.env.COVER_SYMBOL_IMAGE ||
    "studio/asset-packs/sportswear/background-images/nike-china-symbol-v01.png",
  symbolAlt: process.env.COVER_SYMBOL_ALT || "Growth breakthrough cover symbol visual",
  logoPath: process.env.COVER_LOGO_PATH,
  logoAlt: process.env.COVER_LOGO_ALT || "Brand logo",
};

const CAPABILITY_MODULES = [
  ["Target", "增长诊断", "问题识别"],
  ["TrendingUp", "战略拆解", "路径重构"],
  ["Puzzle", "关键举措", "执行落地"],
  ["Compass", "增长闭环", "验证迭代"],
];

const BOTTOM_MODULES = [
  ["PieChart", "深度洞察", "基于一手研究与数据建模"],
  ["Workflow", "战略导向", "从判断到行动的完整路径"],
  ["BarChart3", "结果驱动", "可验证、可落地、可迭代"],
];

function t(ctx, slide, text, x, y, w, h, options = {}) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: options.size ?? 28,
    color: options.color ?? C.text,
    bold: options.bold ?? false,
    typeface: options.face ?? "PingFang SC",
    align: options.align ?? "left",
    valign: options.valign ?? "top",
    insets: options.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    name: options.name,
  });
}

async function icon(ctx, slide, iconName, x, y, size = 44, color = C.primary) {
  return ctx.addLucideIcon(slide, {
    icon: iconName,
    x,
    y,
    w: size,
    h: size,
    color,
    strokeWidth: 2.1,
  });
}

async function renderBrandLockup(ctx, slide, options = {}) {
  const logoPath = COVER.logoPath || BRAND.lockup.path;
  const x = options.x ?? 62;
  const y = options.y ?? 696;
  const textColor = options.textColor ?? C.muted;
  const primaryColor = options.primaryColor ?? C.primary;
  if (!options.forceText && (BRAND.lockup.type === "image" || COVER.logoPath)) {
    await ctx.addImage(slide, {
      path: logoPath,
      x,
      y,
      w: 158,
      h: 37,
      fit: "contain",
      alt: COVER.logoPath ? COVER.logoAlt : BRAND.lockup.alt,
      name: "brand_logo_horizontal",
    });
    ctx.addShape(slide, {
      x: x + 176,
      y: y + 14,
      w: 1.2,
      h: 24,
      fill: C.divider,
      line: ctx.line(),
      name: "brand_divider",
    });
    t(ctx, slide, BRAND.lockup.secondary, x + 202, y + 14, 240, 24, {
      size: 15,
      color: textColor,
      face: "Aptos",
      name: "brand_studio",
    });
    return;
  }

  t(ctx, slide, BRAND.lockup.primary, x, y + 6, 150, 34, {
    size: 24,
    bold: true,
    color: primaryColor,
    face: "Aptos",
    name: "brand_qipan_site",
  });
  ctx.addShape(slide, {
    x: x + 142,
    y: y + 14,
    w: 1.2,
    h: 24,
    fill: options.dividerColor ?? C.divider,
    line: ctx.line(),
    name: "brand_divider",
  });
  t(ctx, slide, BRAND.lockup.secondary, x + 170, y + 14, 240, 24, {
    size: 15,
    color: textColor,
    face: "Aptos",
    name: "brand_studio",
  });
}

function addBaseBackground(ctx, slide, W, H) {
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: C.background,
    line: ctx.line(),
    name: "background_off_white",
  });
}

async function renderHeroImage(ctx, slide, frame, name = "hero_image_replaceable") {
  await ctx.addImage(slide, {
    path: COVER.heroImagePath,
    x: frame.x,
    y: frame.y,
    w: frame.w,
    h: frame.h,
    fit: "cover",
    alt: COVER.heroAlt,
    name,
  });
}

async function renderImage(ctx, slide, imagePath, frame, name, fit = "cover", alt = "") {
  await ctx.addImage(slide, {
    path: imagePath,
    x: frame.x,
    y: frame.y,
    w: frame.w,
    h: frame.h,
    fit,
    alt,
    name,
  });
}

function renderBottomBand(ctx, slide, W, bodyH, bottomH) {
  ctx.addShape(slide, {
    x: 0,
    y: bodyH,
    w: W,
    h: bottomH,
    fill: C.primary,
    line: ctx.line(),
    name: "bottom_brand_band",
  });
}

async function renderDiagonalStructure(ctx, slide, bodyH) {
  // Replaceable hero image. It intentionally contains no baked text.
  await renderHeroImage(ctx, slide, {
    x: 640,
    y: 0,
    w: 960,
    h: bodyH,
  });

  // Editable diagonal mask: accent layer below, off-white panel above.
  ctx.addShape(slide, {
    geometry: "parallelogram",
    x: 42,
    y: 0,
    w: 1040,
    h: bodyH,
    fill: C.accent,
    line: ctx.line(),
    name: "diagonal_accent_separator",
  });
  ctx.addShape(slide, {
    geometry: "parallelogram",
    x: 0,
    y: 0,
    w: 1040,
    h: bodyH,
    fill: C.background,
    line: ctx.line(),
    name: "left_off_white_diagonal_panel",
  });
}

async function renderDarkResearchStructure(ctx, slide, W, H) {
  await renderHeroImage(
    ctx,
    slide,
    {
      x: 0,
      y: 0,
      w: W,
      h: H,
    },
    "hero_image_replaceable_dark_research",
  );
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: W,
    h: H,
    fill: "rgba(4, 12, 14, 0.58)",
    line: ctx.line(),
    name: "dark_research_full_overlay",
  });
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: 690,
    h: H,
    fill: "rgba(4, 12, 14, 0.34)",
    line: ctx.line(),
    name: "dark_research_left_readability_overlay",
  });
}

async function renderSymbolMinimalStructure(ctx, slide, W, H) {
  await renderImage(
    ctx,
    slide,
    COVER.symbolImagePath,
    {
      x: 0,
      y: 0,
      w: W,
      h: H,
    },
    "hero_image_replaceable_symbol",
    "cover",
    COVER.symbolAlt,
  );
}

function renderMainCopy(ctx, slide, positions) {
  t(ctx, slide, COVER.reportSeries, positions.series.x, positions.series.y, positions.series.w, positions.series.h, {
    size: 25,
    color: positions.series.color ?? C.overline,
    bold: true,
    face: "PingFang SC",
    name: "report_series",
  });
  t(ctx, slide, COVER.title, positions.title.x, positions.title.y, positions.title.w, positions.title.h, {
    size: positions.title.size ?? 78,
    color: positions.title.color ?? C.primary,
    bold: true,
    face: "Songti SC",
    name: "title",
  });
  t(ctx, slide, COVER.subtitle, positions.subtitle.x, positions.subtitle.y, positions.subtitle.w, positions.subtitle.h, {
    size: 30,
    color: positions.subtitle.color ?? C.text,
    face: "Songti SC",
    name: "subtitle",
  });
  ctx.addShape(slide, {
    x: positions.rule.x,
    y: positions.rule.y,
    w: 62,
    h: 2.2,
    fill: positions.rule.color ?? C.accent,
    line: ctx.line(),
    name: "small_gold_rule",
  });
}

async function renderCapabilityModules(ctx, slide, positions) {
  for (let i = 0; i < CAPABILITY_MODULES.length; i += 1) {
    const [iconName, title, subtitle] = CAPABILITY_MODULES[i];
    const x = positions.startX + i * positions.gap;
    if (i > 0) {
      ctx.addShape(slide, {
        x: x - positions.dividerOffset,
        y: positions.dividerY,
        w: 1.2,
        h: 72,
        fill: C.divider,
        line: ctx.line(),
        name: `capability_divider_${i}`,
      });
    }
    await icon(ctx, slide, iconName, x, positions.iconY, 46, positions.iconColor ?? C.primary);
    t(ctx, slide, title, x, positions.titleY, 118, 26, {
      size: 19,
      color: positions.titleColor ?? C.primary,
      bold: true,
      name: `capability_${i + 1}_title`,
    });
    t(ctx, slide, subtitle, x, positions.subtitleY, 118, 24, {
      size: 17,
      color: positions.subtitleColor ?? C.muted,
      name: `capability_${i + 1}_subtitle`,
    });
  }
}

async function renderBottomModules(ctx, slide, bodyH) {
  const bx = [72, 585, 1116];
  for (let i = 0; i < BOTTOM_MODULES.length; i += 1) {
    const [iconName, title, subtitle] = BOTTOM_MODULES[i];
    if (i > 0) {
      ctx.addShape(slide, {
        x: bx[i] - 76,
        y: bodyH + 28,
        w: 1.4,
        h: 70,
        fill: C.bottomDivider,
        line: ctx.line(),
        name: `bottom_divider_${i}`,
      });
    }
    await ctx.addLucideIcon(slide, {
      icon: iconName,
      x: bx[i],
      y: bodyH + 28,
      w: 54,
      h: 54,
      color: C.accent,
      strokeWidth: 2.1,
    });
    t(ctx, slide, title, bx[i] + 76, bodyH + 28, 160, 30, {
      size: 25,
      color: C.accent,
      bold: true,
      name: `bottom_${i + 1}_title`,
    });
    t(ctx, slide, subtitle, bx[i] + 76, bodyH + 66, 300, 26, {
      size: 17,
      color: C.bottomSubtitle,
      name: `bottom_${i + 1}_subtitle`,
    });
  }
}

function layoutPositions(layout) {
  if (layout === "dark-research") {
    return {
      copy: {
        series: { x: 74, y: 104, w: 520, h: 42, color: "#EAF2EF" },
        title: { x: 74, y: 248, w: 640, h: 118, size: 74, color: "#F6F8F6" },
        subtitle: { x: 78, y: 362, w: 610, h: 52, color: "#E1E7E4" },
        rule: { x: 78, y: 142, color: GROWTH_GREEN },
      },
      capability: {
        startX: 78,
        gap: 152,
        dividerOffset: 24,
        dividerY: 498,
        iconY: 484,
        titleY: 542,
        subtitleY: 574,
        iconColor: GROWTH_GREEN,
        titleColor: "#F6F8F6",
        subtitleColor: "#AAB5BA",
      },
    };
  }

  if (layout === "symbol-minimal") {
    return {
      copy: {
        series: { x: 100, y: 110, w: 520, h: 42, color: C.secondary },
        title: { x: 100, y: 358, w: 675, h: 108, size: 68, color: C.secondary },
        subtitle: { x: 104, y: 466, w: 650, h: 52 },
        rule: { x: 104, y: 148, color: GROWTH_GREEN },
      },
    };
  }

  return {
    copy: {
      series: { x: 64, y: 156, w: 520, h: 42 },
      title: { x: 64, y: 250, w: 760, h: 105, size: 78 },
      subtitle: { x: 68, y: 390, w: 720, h: 52 },
      rule: { x: 70, y: 468 },
    },
    capability: {
      startX: 70,
      gap: 168,
      dividerOffset: 24,
      dividerY: 540,
      iconY: 526,
      titleY: 584,
      subtitleY: 616,
    },
  };
}

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  const W = ctx.W;
  const H = ctx.H;
  const bottomH = 122;
  const bodyH = H - bottomH;
  const positions = layoutPositions(COVER.layout);

  addBaseBackground(ctx, slide, W, H);

  if (COVER.layout === "dark-research") {
    await renderDarkResearchStructure(ctx, slide, W, H);
    renderMainCopy(ctx, slide, positions.copy);
    await renderCapabilityModules(ctx, slide, positions.capability);
    await renderBrandLockup(ctx, slide, {
      x: 74,
      y: 760,
      forceText: true,
      primaryColor: "#F6F8F6",
      textColor: "#AAB5BA",
      dividerColor: "#3F4D50",
    });
  } else if (COVER.layout === "symbol-minimal") {
    await renderSymbolMinimalStructure(ctx, slide, W, H);
    renderMainCopy(ctx, slide, positions.copy);
    await renderBrandLockup(ctx, slide);
  } else {
    await renderDiagonalStructure(ctx, slide, bodyH);
    renderBottomBand(ctx, slide, W, bodyH, bottomH);
    renderMainCopy(ctx, slide, positions.copy);
    await renderCapabilityModules(ctx, slide, positions.capability);
    await renderBrandLockup(ctx, slide);
    await renderBottomModules(ctx, slide, bodyH);
  }

  return slide;
}
