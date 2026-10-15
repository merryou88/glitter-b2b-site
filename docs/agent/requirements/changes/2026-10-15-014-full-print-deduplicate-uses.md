---
change_id: CHG-20261015-014-full-print-deduplicate-uses
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 删除重复用途FAQ
## 变更原因
用户采纳保留上方推荐用途、删除下方重复FAQ的建议。
## 变更前
用途图标区及FAQ重复展示推荐用途。
## 变更后
保留Recommended Uses图标区，删除用途FAQ；目标产品跳过通用用途FAQ补充，页面和结构化数据读取一致的精简faqList。
## 验收条件
目标页面保留六个用途图标，FAQ及JSON-LD均无用途条目，其他FAQ与其他产品不变。
## 影响范围
目标产品FAQ数据及专属用途标题。
## 兼容性
替代CHG-20261015-013中添加用途FAQ的规则，保留推荐用途展示。
## 实现位置
src/data/allProducts.js、src/components/FullPrintBuyingDetails.astro
## 验证结果
完整构建、产品和SEO校验通过；生成HTML用途区及FAQ JSON-LD检查、git diff --check通过。
## 来源
用户确认按建议优化。
