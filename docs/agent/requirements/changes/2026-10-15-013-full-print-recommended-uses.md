---
change_id: CHG-20261015-013-full-print-recommended-uses
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 统一推荐用途表达
## 变更原因
用户要求用途内容采用Recommended use形式，而非What applications is this fabric suitable for问句。
## 变更前
用途图标标题为Material use，FAQ自动补充用途问句和完整应用数组。
## 变更后
目标产品用途图标标题及用途FAQ均为Recommended uses；专属FAQ列出六个核心场景和打样确认提示，阻止自动重复添加用途问句。FAQ结构化数据继续读取同一数据。
## 验收条件
目标生成页面包含Recommended uses，不再包含旧用途问句；其他产品不变。
## 影响范围
目标产品FAQ及专属用途图标标题。
## 兼容性
替代原用途问句，保留其他FAQ和应用数据。
## 实现位置
src/data/allProducts.js、src/components/FullPrintBuyingDetails.astro
## 验证结果
完整构建、产品校验、SEO校验、生成HTML文案检查及git diff --check通过。
## 来源
用户本轮反馈。
