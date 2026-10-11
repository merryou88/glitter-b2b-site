---
change_id: CHG-20261011-008-products-hero-description-full-width
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# Products 页 Hero 描述全宽

## 变更原因
Products 页 Hero 描述文案被 `640px` 最大宽度限制，首屏横向空间利用不足。

## 变更后
- `/products/` Hero 描述设置为 `width: 100%`。
- 移除 `max-width: 640px` 限制。
- 文案内容、Hero 背景、标题和其他页面保持不变。

## 验收条件
- `/products/` Hero 描述占满容器可用宽度。
- 桌面和移动端文字均不超出容器。
- 首页及其他页面不受影响。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。
