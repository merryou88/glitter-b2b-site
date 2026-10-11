---
change_id: CHG-20261011-006-products-catalog-first-view
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# Products 页目录首屏优化

## 变更原因
优化 `/products/` 首屏，让用户在 Hero 后直接进入产品目录。

## 变更前
- Products 页顺序为 Hero、Buyer Guide 三卡片、产品目录。
- Hero 上下内边距较大，首屏产品网格露出较少。

## 变更后
- Products 页顺序调整为 Hero、产品目录、Buyer Guide 三卡片。
- Hero 默认上下内边距压缩为 `var(--space-xl) var(--space-lg)`。
- Hero 在 `max-width: 768px` 下上下内边距压缩为 `var(--space-lg) var(--space-md)`。
- Hero 背景、文字和 Buyer Guide / 产品卡片既有样式保持不变。

## 验收条件
- `/products/` 首屏在 Hero 后直接看到产品目录。
- Buyer Guide 三卡片在产品列表之后出现。
- 首页及其他页面不受影响。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行 `npm run build`、产品校验、SEO 校验及 diff 检查。
