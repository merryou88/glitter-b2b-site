---
change_id: CHG-20261011-023-products-material-source-format
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-035
modules:
  - product-catalog
---

# Products 列表页 H2013120107 Material 格式修正

## 变更原因
用户确认 `/products/` 列表页中 `Iridescent Laser Foil 4-Way Stretch Fabric` 的 Material 不应改成带斜杠的规范格式，应保留数据源中的 `95% Polyester 5% Spandex` 写法，同时避免重复拼接。

## 变更后
- `/products/` 产品卡片 Material 直接使用 `item.specs.baseMaterial`。
- `iridescent-laser-hot-stamping-stretch-ice-silk` 在产品列表页显示 `95% Polyester 5% Spandex`。
- 不再额外渲染 `95% Polyester / 5% Spandex`，避免出现重复成分文本。

## 验收条件
- `/products/` 中 `Iridescent Laser Foil 4-Way Stretch Fabric` 卡片 Material 显示为 `95% Polyester 5% Spandex`。
- 该卡片 Material 不出现 `95% Polyester 5% Spandex95% Polyester / 5% Spandex` 或 `95% Polyester / 5% Spandex`。
- 其他产品卡片继续读取各自 `specs.baseMaterial`。

## 实现位置
- `src/pages/products.astro`

## 验证结果
- 通过：`git diff --check`
- 通过：`npm run validate:products`
- 通过：`npm run build`
- 通过：构建产物抽查确认 `/products/` 中目标产品卡片 Material 显示为 `95% Polyester 5% Spandex`，没有重复拼接文本。
