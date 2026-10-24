---
change_id: CHG-20261023-007-products-hero-sample-primary
date: 2026-10-23
status: superseded
requirements:
  - REQ-PRODUCT-053
modules:
  - product-catalog
---

# 产品列表首屏 Samples 与 Quote 交换位置及配色

## 变更原因
用户要求互换产品列表页顶部 Samples 和 Quote 按钮的位置及颜色。
## 变更前
左侧 Request Bulk Quote 为金色实心，右侧 Request Samples 为白色描边。
## 变更后
左侧 Request Samples 为金色实心，右侧 Request Bulk Quote 为白色描边；桌面和移动端沿用相同顺序。
## 验收条件
仅顶部双 CTA 交换顺序与样式；Samples 保留 sample 意图和 /sample-policy/ 回退链接，Quote 保留 quote 意图和 /contact/ 回退链接；两者继续打开现有 RFQ 弹窗。
## 影响范围
仅产品目录首屏按钮展示；不改变模块职责、调用关系、表单提交或其他页面。
## 兼容性
复用 btn--primary 和 btn--outline 及现有响应式样式，无 JavaScript 时的回退链接保留。
## 实现位置
src/pages/products.astro 的 page-hero__actions。
## 验证结果
`npm run build` 通过（59 个页面、18 个产品、56 个 sitemap URL 及 SEO/内链校验）。生成的产品列表 HTML 检查通过：Samples 在前并使用 btn--primary / sample，Quote 在后并使用 btn--outline / quote，两者回退链接及 RFQ 标记保留。`git diff --check` 通过。未做浏览器视觉检查或真实表单提交。
## 来源
用户当前要求与产品列表页截图。

## 后续变更
CHG-20261024-001-product-led-catalog 更新首屏定位、卡片和筛选规则；原 RFQ 与卡片 CTA 顺序继续保留。
