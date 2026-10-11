---
change_id: CHG-20261011-021-products-material-deduplicate
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-035
modules:
  - product-catalog
---

# Products 列表 Material 文案去重

## 变更原因
`/products/` 列表卡片中 `Iridescent Laser Foil 4-Way Stretch Fabric` 的 Material 字段同时渲染桌面版和移动版文案，导致显示为 `95% Polyester 5% Spandex95% Polyester / 5% Spandex`。

## 变更后
- 对 `95% Polyester 5% Spandex` 这类成分只渲染一份规范文案：`95% Polyester / 5% Spandex`。
- 删除不再需要的 Material 桌面/移动双版本切换 CSS。
- 产品卡片其他字段和布局不变。

## 验收条件
- `/products/` 中 `Iridescent Laser Foil 4-Way Stretch Fabric` 的 Material 只显示一份 `95% Polyester / 5% Spandex`。
- 不再出现 `Spandex95% Polyester` 这类拼接文本。
- 桌面端和移动端均正常显示。

## 实现位置
- `src/pages/products.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。
