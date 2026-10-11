---
change_id: CHG-20261011-004-products-hero-mobile-responsive-polish
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# Products 页 Hero 移动端响应式优化

## 变更原因
此前 Hero 背景和移动 CTA 错误应用到了首页轮播；实际需求目标是截图中的 Products 页 Hero。

## 变更前
- Products 页 `.page-hero` 使用深蓝渐变背景，没有面料实拍图和指定移动 CTA。
- 首页 `HeroCarousel` 的图片、轮播内容和原有渐变蒙版保持原有实现。

## 变更后
- Products 页 `.page-hero` 使用已有激光镭射面料实拍图，背景 `cover`、`center`，叠加现有深蓝色 `rgba(22, 41, 77, 0.55)` 蒙版。
- Products 页移动端在四条采购卖点下显示并排 `Get Free Swatches` 与 `Request Custom Quote` CTA。
- 首页 Hero 已恢复原有 `slide1.webp`、轮播按钮和渐变蒙版。
- 产品目录移动端继续完整显示 `95% Polyester / 5% Spandex`，并显示 `✅ Free swatch card available`。

## 验收条件
- 首页 Hero 不再加载 Products 页激光面料图。
- Products 页桌面和移动端 Hero 使用激光镭射面料图与深蓝蒙版。
- 只有 Products 页移动端显示新增 CTA。
- 桌面端不显示新增 CTA。

## 实现位置
- `src/pages/products.astro`
- `src/components/HeroCarousel.astro`

## 验证结果
`npm run build` 通过；Astro static build、`npm run validate:products`（18 个公开产品）和 `npm run validate:seo`（57 个 HTML 页面、54 个 sitemap URL）均通过。首页生成 HTML 继续使用 `/images/home/slide1.webp`，Products 页生成 HTML 包含指定激光面料背景和两个移动 CTA。真实 375px / 768px 浏览器视口仍需人工复核。

## 来源
用户于 2026-10-11 明确指出 Hero 修改目标为 Products 页，而非首页。
