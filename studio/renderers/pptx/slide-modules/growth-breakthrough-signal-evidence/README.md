# growth-breakthrough-signal-evidence

增长问题破局「公开信号扫描」页 artifact-tool 模块。

目标：把证据墙样张拆成可编辑 PPTX 图层，而不是整页图片。

## 图层约定

- `cards`：6 张证据卡，由 PPT 原生形状和文本框组成。
- `big_numbers`：每张卡的核心数字，独立文本框，可改字号、颜色和字体。
- `metric_notes`：解释数字口径，独立文本框。
- `strategic_reads`：解释数字的增长含义，独立文本框。
- `source_refs`：卡片右上角来源编号和页面底部来源脚注。
- `initial_directions`：底部初步指向标签。

## 常态化生成路径

默认使用耐克中国样张数据。后续换公司时，传入同结构 JSON 即可：

```bash
SIGNAL_SLIDE_DATA_JSON='{"caseLabel":"某公司增长破局 · 2026","cards":[...]}'
```

## 不允许

- 不允许把整页证据墙作为图片塞进 PPT。
- 不允许把大数字、指标说明、战略解读烘焙进背景图。
- 不允许在最终 PPT 里出现「用户确认」。
