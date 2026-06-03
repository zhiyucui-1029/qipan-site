# pptx renderer

这里放可编辑 PPTX 的渲染逻辑。

最终目标是生成用户可以继续改字、改图、改数据的 PPT 文件。

## 核心要求

PPTX 是主交付物，PNG 只是预览。最终交付不能把整页报告烘焙成一张图片。

新增硬标准：每一页模板都要以用户确认过的目标图作为 golden master。PPTX 导出后的截图必须和目标图做逐像素比较，不能只靠肉眼判断“像不像”。

## 可编辑图层规则

每一页都要尽量拆成 PPT 原生对象：

- 标题、副标题、正文、注释：`text_box`
- 背景块、分割线、标签、卡片：`shape`
- 图标：优先用可编辑矢量或可替换图标对象
- 行业氛围图：`replaceable_picture`
- 图表：优先用可编辑形状和文字组合；必要时才用图片

## 封面页规则

封面页不能直接使用整页生成图作为 PPT 背景。正确做法是：

1. 用 `templates/decks/growth-breakthrough/slides/cover.yaml` 定义版式和可编辑层。
2. 用 `design-system` 生成颜色 token。
3. 用 `asset-packs` 提供右侧行业 hero image。
4. 渲染器用 PPT 原生形状画左侧浅底、右侧斜切蒙版、金色分割线和底部栏。
5. 渲染器把标题、副标题、模块文字、底部文字写成可编辑文本框。
6. 再导出 PNG 预览图。

## 视觉样张和最终 PPT 的关系

Image2 生成的整页封面可以作为视觉参考，帮助确定风格。但最终 PPT 需要重新按图层渲染：

```text
visual reference image -> slide spec -> editable pptx layers -> png preview
```

如果需要使用 Image2，优先让它生成不含文字的行业 hero image，而不是含有完整标题和底部栏的整页封面。

## 像素级还原规则

目标不是“风格接近”，而是：

```text
approved reference image -> editable pptx -> rendered preview -> pixel diff
```

通过标准见 `pixel-fidelity-contract.yaml`。对比工具：

```bash
python3 studio/renderers/pptx/scripts/compare_slide_pixels.py \
  --reference path/to/approved-reference.png \
  --candidate path/to/rendered-pptx-preview.png \
  --diff studio/outputs/<task>/qa/slide-xx-diff.png \
  --json studio/outputs/<task>/qa/slide-xx-pixel-metrics.json
```

整套 deck 批量校验：

```bash
python3 studio/renderers/pptx/scripts/check_deck_pixel_fidelity.py \
  --reference-dir path/to/approved-references \
  --preview-dir studio/outputs/<task>/preview \
  --qa-dir studio/outputs/<task>/qa
```

注意：目标图不能由 PPT 预览图反向冒充。目标图必须来自用户确认过的设计样张，或来自同一页的已确认视觉母版。

## 公开信号扫描页规则

公开信号扫描页使用 `slide-modules/growth-breakthrough-signal-evidence/slide-04.mjs`。这页必须以 6 张可编辑证据卡呈现，每张卡固定为三层：

1. 大数字
2. 指标说明
3. 战略解读

来源编号、来源脚注和初步指向标签也必须是 PPT 原生文本层。
