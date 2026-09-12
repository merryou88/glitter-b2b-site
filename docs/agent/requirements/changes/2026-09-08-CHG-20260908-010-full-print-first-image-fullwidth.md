---
change_id: CHG-20260908-010-full-print-first-image-fullwidth
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-004
modules:
  - product-catalog
---

# Full-Print First Detail Image Full Width

## 变更原因
用户要求 `full-print-hot-stamping-spandex-milk-silk` 的 Product Details 只有第一张图全宽展示，其余图片仍按两列展示。

## 变更前
Product Details 整组图片使用了全宽特殊布局。

## 变更后
Product Details 第一张图全宽，后续图片按默认两列网格展示。

## 验收条件
- 首图全宽
- 其余 detail 图两列展示
- application 第三张图仍全宽
- `npm run build` 通过

## 影响范围
仅影响 `full-print-hot-stamping-spandex-milk-silk` 的 Product Details 布局。

## 兼容性
不影响其他产品。

## 实现位置
`src/components/ProductDetail.astro`

## 验证结果
待验证。

## 来源
用户要求调整 Full-Print 产品 Product Details 图片布局。
