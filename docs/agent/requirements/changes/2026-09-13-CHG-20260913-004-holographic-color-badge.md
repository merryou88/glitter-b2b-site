---
change_id: CHG-20260913-004-holographic-color-badge
date: 2026-09-13
status: implemented
requirements:
  - REQ-PRODUCT-014
modules:
  - content-data
  - product-catalog
---

# 修正 Holographic Foil 产品列表颜色标签

## 变更原因
产品详情数据已注明该产品有 19 种颜色，但产品列表卡片仍显示 `Standard Color`。

## 变更前
`iridescent-gradient-laser-ice-silk` 使用 `badge: "Standard Color"` 和 `colorCount: 1`。

## 变更后
产品列表卡片显示 `19 colors`，颜色数量排序使用 `colorCount: 19`；详情页原有的 19 色信息保持不变。

## 验收条件
产品列表页不再显示该产品的 `Standard Color`，而显示 `19 colors`；产品校验和构建通过。

## 影响范围
仅影响 `iridescent-gradient-laser-ice-silk` 的产品列表颜色标签及颜色排序值。

## 实现位置
`src/data/allProducts.js`

## 验证结果
`npm run validate:products` 通过；`npm run build` 通过。

## 来源
用户要求修正该产品列表页的颜色数量展示。
