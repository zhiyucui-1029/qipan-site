# growth-breakthrough-cover

增长问题破局封面页 artifact-tool 模块。

目标：把视觉参考图拆成可编辑 PPTX 图层。

## 图层约定

- `hero_image`：右侧可替换图片。
- `background_shapes`：浅底、深色底栏、金色分割线等 PPT 原生形状。
- `title`、`subtitle`、`report_series`：PPT 原生文本框。
- `capability_modules`、`bottom_modules`：图标和文字分层对象。

## 品牌切换

默认使用 `qipan-site` 品牌。构建时可通过环境变量切换：

```bash
COVER_BRAND=r3-trineering
```

品牌色和 logo 来源：

- `studio/design-system/brand-kits/`
- `studio/design-system/brand-assets/`

## 常态化生成路径

现在这页不再依赖“先生成整页图片，再拆 PPT”的探索路径。常态生成只替换槽位：

```bash
COVER_BRAND=r3-trineering
COVER_LAYOUT=dark-research
COVER_REPORT_SERIES="增长问题破局系列报告 · 2026"
COVER_TITLE="耐克中国增长破局"
COVER_SUBTITLE="一个全球运动品牌如何重新找回增长位置"
COVER_HERO_IMAGE="studio/asset-packs/sportswear/background-images/nike-china-hero-v01.png"
COVER_SYMBOL_IMAGE="studio/asset-packs/sportswear/background-images/nike-china-symbol-v01.png"
COVER_LOGO_PATH="studio/design-system/brand-assets/r3-trineering/logo-horizontal-color.png"
```

可选版式：

- `diagonal-split`：现代斜切版，左标题、右行业图、底部信息栏。
- `dark-research`：黑底研究报告版，深色背景、大标题、右侧强主视觉，保留少量能力模块。
- `symbol-minimal`：中心视觉极简版，大面积留白、中心视觉符号、标题和品牌线，不放能力模块。

可替换：

- 品牌色：通过 `COVER_BRAND` 或品牌包映射。
- 版式：通过 `COVER_LAYOUT` 选择，同一张 hero image 可以套入不同版式。
- 标题文案：`COVER_REPORT_SERIES`、`COVER_TITLE`、`COVER_SUBTITLE`。
- Logo：品牌包默认 logo，或 `COVER_LOGO_PATH` 临时覆盖。
- 行业主图：`COVER_HERO_IMAGE`，必须是无文字、无标题、可替换图片。
- 中心视觉图：`COVER_SYMBOL_IMAGE`，用于 `symbol-minimal`，必须无文字、无真实品牌 logo，并保留左侧标题区。

固定不变：

- 能力模块的语义；只有 `diagonal-split` 和 `dark-research` 使用。
- 底部承诺模块的语义；只有 `diagonal-split` 使用。
- 图片、文字、形状分层可编辑的交付原则。

## 不允许

- 不允许把整页封面作为单张图片塞入 PPT。
- 不允许把标题文字烘焙进 hero image。
