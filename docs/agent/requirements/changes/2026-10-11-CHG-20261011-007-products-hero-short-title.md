---
change_id: CHG-20261011-007-products-hero-short-title
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# Products 页 Hero 标题缩短

## 变更原因
Products 页 Hero 标题仍偏长，需要进一步压缩首屏内容高度。

## 变更后
- `/products/` Hero 标题改为 `Foil Fabrics for Dancewear & Performance Costumes`。
- 其他页面、Hero 样式、模块顺序和产品卡片保持不变。

## 验收条件
- `/products/` 页面显示指定短标题。
- 首页及其他页面不显示该标题。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。
