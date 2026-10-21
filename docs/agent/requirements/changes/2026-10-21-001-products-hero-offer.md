---
change_id: CHG-20261021-001-products-hero-offer
date: 2026-10-21
status: superseded
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 产品列表页标题下增加采购文案

## 变更原因
用户指定新增英文文案，并要求桌面与移动端同步。
## 变更前
标题后直接展示原有描述。
## 变更后
标题下新增 Direct factory pricing. Save 50% on bulk orders. Free swatches available.，保留原有描述。
## 验收条件
桌面及移动端显示完整指定文案，紧随 H1，其他目录功能保留。
## 影响范围与兼容性
仅产品列表页文案及局部样式；50% 表述直接来自用户提供的文案，本次未独立核实定价依据。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过，产品与 SEO/内链校验通过；产物检查确认指定文案紧随 H1，样式默认对所有视口生效。
## 来源
用户指定文案及桌面端同步要求。

后续文案由 CHG-20261021-002-products-hero-offer-revision 替代。
