---
change_id: CHG-20260908-011-color-count-badge-sync
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-010
modules:
  - product-catalog
---

# Color Count Badge Sync

## 变更原因
用户要求两个产品的列表页右上角标签和详情页 `Available Colors` 保持一致，并更新为新的色数。

## 变更前
`non-woven-glitter-fabric` 显示旧的标准色标签，`sparkle-glitter-surface-solid-leather-fabric` 显示旧的 17 色标签。

## 变更后
`non-woven-glitter-fabric` 显示 `31 colors`，`sparkle-glitter-surface-solid-leather-fabric` 显示 `35 colors`，详情页 `Available Colors` 同步一致。

## 验收条件
- 两个产品的产品卡片角标更新
- 详情页 `Available Colors` 同步更新
- `npm run build` 通过

## 影响范围
仅影响这两个产品的可见颜色数文案。

## 兼容性
不影响其他产品。

## 实现位置
`src/data/allProducts.js`

## 验证结果
待验证。

## 来源
用户要求同步更新两个产品的颜色数标签与详情页文案。
