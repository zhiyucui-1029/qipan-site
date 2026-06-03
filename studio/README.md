# studio

这里是报告生成系统的工作台。

它负责把一个用户问题变成结构化报告：识别行业、收集事实、映射战略棋盘、规划 PPT、生成视觉资产、渲染输出，并做质量检查。

## 子目录

```text
workflows/      报告生成流程
agents/         agent 角色说明和执行契约
templates/      deck 和 slide 模板
design-system/  颜色、主题和品牌色映射规则
asset-packs/    行业素材包
knowledge/      方法论、lens、案例和 source schema
renderers/      PPTX / PNG / PDF 输出引擎
outputs/        本地生成结果，默认不进 git
```

## 原则

- 流程、模板、素材、知识、输出分开。
- 模板控制版式，`design-system` 控制颜色风格，`asset-packs` 控制行业素材。
- 不按 15 页硬拆 15 个 agent；优先用统一 Slide Builder 按 `slide_type` 处理。
- 生成物默认进入 `outputs/`，不要混进模板或素材包。
