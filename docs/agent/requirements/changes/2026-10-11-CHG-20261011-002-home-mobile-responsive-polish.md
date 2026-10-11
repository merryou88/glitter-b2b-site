---
change_id: CHG-20261011-002-home-mobile-responsive-polish
date: 2026-10-11
status: superseded
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 首页移动端响应式局部优���（已被 Products 页修正版取代）

## 变更原因
优化手机端首页 Hero、Featured Foil Fabrics 卡片和产品目录卡片的空间利用与采购入口，同时保持桌面端原有布局。

## 变更前
- Hero 使用轮播图片和浅色渐变遮罩，移动端 CTA 只有轮播原有按钮。
- Featured Foil Fabrics 卡片没有单独的移动端详情辅助链接。
- 产品目录卡片的成分字段使用单行省略样式，库存卡片没有移动端免费色卡提示。
- 当前源码未发现字面量 `<h2>Products</h2>`。

## 变更后
- Hero 共用已有激光镭射面料实拍图，使用现有深蓝色 `rgba(22, 41, 77, 0.55)` 蒙版。
- 移动端新增并排 `Get Free Swatches` 和 `Request Custom Quote` CTA；桌面端不显示这组 CTA。
- 移动端前三张 Featured Foil Fabrics 卡片显示 `View Details →` 辅助链接，原有图片继续作为左侧预览缩略图。
- 移动端完整显示 `95% Polyester / 5% Spandex`，并显示 `✅ Free swatch card available`。
- 保留 `h2.products-mobile-title` 的移动端隐藏 CSS 选择器，未新增或删除不存在的标题元素。

## 验收条件
- `max-width: 768px` 下 Hero CTA 并排，Hero 背景居中覆盖且白色文字可读。
- 桌面端新增移动 CTA、移动详情链接、移动库存提示均不可见。
- 产品卡片移动端成分文字不出现省略号。
- 首页与产品目录构建成功。

## 影响范围
`src/components/HeroCarousel.astro`、`src/pages/index.astro`、`src/pages/products.astro`、`src/styles/global.css`。

## 兼容性
Hero 使用现有 WebP 产品图；该图片没有独立移动版，因此移动端 source 回退到同一张 WebP，不产生缺失资源请求。

## 实现位置
- `src/components/HeroCarousel.astro`
- `src/pages/index.astro`
- `src/pages/products.astro`
- `src/styles/global.css`

## 验证结果
该记录中将 Hero 错误归属到首页，已由 `CHG-20261011-004-products-hero-mobile-responsive-polish` superseded。产品卡片相关改动仍保留在当前代码中。

## 来源
用户于 2026-10-11 提出的首页与产品目录响应式局部优化要求。
