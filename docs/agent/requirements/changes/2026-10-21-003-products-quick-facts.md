---
change_id: CHG-20261021-003-products-quick-facts
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 产品列表顶部四项特点更新

## 变更原因
用户指定新的四项特点及顺序。
## 变更前
产品数量、MOQ from 109 yd、Samples available、OEM / ODM support。
## 变更后
Factory Direct Pricing；Free Swatches Available；MOQ: 50m Stock / 200m Custom；Custom Gradient & OEM Support。
## 验收条件
桌面和移动端按指定顺序显示四项，移动端保持两列且允许长文案自然换行。
## 影响范围与兼容性
仅替换 Hero 特点，不修改产品数据、产品卡片 MOQ 或其他页面。新 MOQ 来自用户明确提供。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过（18 个产品、59 个页面及内链校验）；产物检查确认四项文案及顺序完全匹配。
## 来源
用户本轮提供的四项英文文案。
