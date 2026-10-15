---
change_id: CHG-20261015-015-full-print-deduplicate-faq
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 精简其他重复FAQ
## 变更原因
用户要求检查并删除其他重复FAQ。
## 变更前
除用途条目已删除外，仍有MOQ、样品、定制、检测、库存、交期、报价共7条FAQ。
## 变更后
删除与首屏、采购表、样品区重复的6条FAQ，仅保留如何报价。目标产品跳过通用FAQ自动补充，其他产品继续原规则。
## 验收条件
目标页面与FAQ JSON-LD仅有How is the price quoted?；采购表、样品区和其他产品FAQ保持。
## 影响范围
仅目标产品FAQ数据和自动补充例外规则。
## 兼容性
替代此前保留完整采购FAQ的规则，页面既有采购区域继续承载对应信息。
## 实现位置
src/data/allProducts.js
## 验证结果
完整构建、产品校验、SEO校验通过；生成HTML及JSON-LD的单一FAQ检查、git diff --check通过。
## 来源
用户本轮要求。
