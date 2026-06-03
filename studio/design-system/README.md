# studio/design-system

这里放报告的颜色、主题和品牌色映射规则。

它解决一个问题：用户可以上传公司主色、辅色，我们不改版式，只把这些颜色映射成一套可读、可渲染、可复用的 PPT 色彩体系。

## 子目录

```text
themes/      通用主题规则，例如 qipan 默认风格、深色咨询风、浅色报告风
brand-kits/  可复用品牌色包；用户单次上传结果默认放在项目输出里
brand-assets/ 可复用品牌图片资产，例如 logo 和品牌符号
```

## 和其他目录的关系

- `templates/` 决定一页怎么排版。
- `design-system/` 决定这一页用什么颜色 token。
- `asset-packs/` 决定这个行业用什么图片、术语和氛围。
- `outputs/` 记录某个具体项目最终使用的品牌色。

## 色彩 token

模板里不要直接写死颜色，优先使用语义 token：

```yaml
primary: "#0B4D45"
secondary: "#0D2D44"
accent: "#D6A84F"
background: "#F7F4EE"
surface: "#FFFFFF"
text: "#18202B"
muted: "#6D7583"
success: "#2E7D64"
warning: "#C98A2E"
risk: "#B85443"
```

用户上传主色和辅色后，由主题规则生成这些 token。版式不变，只替换 token。

## 用户上传颜色的处理

用户输入：

```yaml
brand_primary: "#111111"
brand_secondary: "#E15A1D"
brand_accent: optional
```

系统需要生成：

```yaml
theme_id: consulting-light
tokens:
  primary: ...
  secondary: ...
  accent: ...
  background: ...
  surface: ...
  text: ...
  muted: ...
```

必须检查：

- 标题和正文对比度是否足够。
- 深色背景上是否有可读文字。
- 图表颜色是否能区分。
- 品牌色太刺眼时，是否需要降饱和或只用于强调色。

## 默认原则

用户可以改颜色风格，但不改版式。这样报告看起来属于用户公司，又不会破坏 qipan.site 的咨询报告质感。
