---
change_id: CHG-20260908-007-sparkle-detail-two-column
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-007
modules:
  - product-catalog
---

# Sparkle Detail Two Column Restore

## 变更原因
用户确认 Sparkle 产品的 Product Details 第三张图片也需要与其他图片一样按默认两列展示。

## 变更前
第三张 detail 图片被配置为跨满整行。

## 变更后
第三张 detail 图片取消全宽特殊样式，回到默认一行两列网格。

## 验收条件
- Product Details 第三张图片不再跨整行
- Product Details 图片按默认两列展示
- `npm run build` 通过

## 影响范围
仅影响 `sparkle-glitter-surface-solid-leather-fabric` 的 Product Details 图片布局。

## 兼容性
不影响其他产品。

## 实现位置
`src/components/ProductDetail.astro`

## 验证结果
待验证。

## 来源
用户纠正 Sparkle 产品第三张 detail 图片展示规则。
