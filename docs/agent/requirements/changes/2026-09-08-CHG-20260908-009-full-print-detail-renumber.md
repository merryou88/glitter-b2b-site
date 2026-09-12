---
change_id: CHG-20260908-009-full-print-detail-renumber
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-009
modules:
  - product-catalog
  - content-data
---

# Full-Print Detail Renumber

## 变更原因
Full-Print Hot-Stamping Spandex Milk-Silk Fabric 的 Product Details 图片更新后，需要按连续编号重新整理。

## 变更前
detail 图片数量较少，编号和素材顺序未完全同步。

## 变更后
detail 图片按 `1.jpg` 到 `6.jpg` 连续编号展示，并保持 WebP 配对。

## 验收条件
- detail 图片连续编号
- 每张 JPG 对应 WebP
- `npm run build` 通过
- `npm run validate:products` 通过

## 影响范围
仅影响 `full-print-hot-stamping-spandex-milk-silk` 的 Product Details 图片数据。

## 兼容性
不影响其他产品。

## 实现位置
`src/data/allProducts.js`
`src/data/products.json`

## 验证结果
待验证。

## 来源
用户要求重新编号并更新该产品的 Product Details 图片。
