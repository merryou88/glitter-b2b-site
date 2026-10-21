---
change_id: CHG-20261021-002-products-hero-offer-revision
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 产品列表页采购文案修订

## 变更原因
用户提供新的完整文案。
## 变更前
Direct factory pricing. Save 50% on bulk orders. Free swatches available.
## 变更后
Direct factory pricing. Save up to 50% compared to US local retail. Free A4 swatches available for all styles.
## 验收条件
桌面及移动端标题下显示完整新文案，保留既有样式。
## 影响范围与兼容性
仅替换产品列表页采购文案。价格比较和所有款式 A4 免费样卡表述来自用户，本次未独立核实。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过（18 个产品、59 个 HTML 页面及内链校验）；产物检查确认新文案完整且旧文案已移除。
## 来源
用户本轮指定英文文案。
