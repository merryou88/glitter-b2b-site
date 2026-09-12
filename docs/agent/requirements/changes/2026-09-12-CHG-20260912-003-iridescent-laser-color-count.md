---
change_id: CHG-20260912-003-iridescent-laser-color-count
date: 2026-09-12
status: implemented
requirements:
  - REQ-PRODUCT-013
modules:
  - product-catalog
  - content-data
---

# 修正 Iridescent Laser Stretch Ice-Silk 产品颜色信息

## 变更原因
该产品实际只有 1 个标准颜色，但 B2B 规格表错误显示为 `31 colors`。

## 变更前
`iridescent-laser-hot-stamping-stretch-ice-silk` 的 `availableColors` 为 `31 colors`。

## 变更后
该产品的 `availableColors` 更新为 `1 standard color`。

## 验收条件
产品详情页的 `Specifications Table for B2B Buyers` 中，`Available Colors` 显示 `1 standard color`，且其他产品颜色信息保持不变。

## 影响范围
仅影响该产品详情页的 B2B 规格表颜色字段。

## 兼容性
产品 slug、路由、图片和其他产品数据保持不变。

## 实现位置
`src/data/allProducts.js`

## 验证结果
待运行 `npm run validate:products` 和 `npm run build`。

## 来源
用户确认该产品只有一种颜色。
