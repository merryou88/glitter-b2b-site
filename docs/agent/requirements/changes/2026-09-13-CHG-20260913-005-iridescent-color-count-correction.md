---
change_id: CHG-20260913-005-iridescent-color-count-correction
date: 2026-09-13
status: implemented
requirements:
  - REQ-PRODUCT-015
modules:
  - content-data
  - product-catalog
---

# 修正两款 Iridescent 产品颜色数量

## 变更原因
两款只有一个标准颜色的产品被错误显示为 `31 colors`。

## 变更前
`plain-iridescent-laser-spandex-4-way-stretch` 和 `iridescent-laser-hot-stamping-stretch-ice-silk` 的列表标签显示为 `31 colors`。

## 变更后
两款产品的列表标签均显示为 `1 standard color`，颜色排序值保持为 `1`；详情页颜色信息也统一为 `1 standard color`。

## 验收条件
两款产品的列表页和详情页均显示一个标准颜色，其他产品颜色数据不受影响。

## 影响范围
仅影响上述两款产品的颜色展示字段。

## 实现位置
`src/data/allProducts.js`

## 验证结果
`npm run validate:products` 通过；`npm run build` 通过；已核对两款产品的列表角标、`colorCount` 和详情页 `availableColors` 均为 `1 standard color`。

## 来源
用户指出两款产品实际均只有一个颜色。
