---
change_id: CHG-20261015-012-full-print-base-material
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 修正规格表Base Material成分
## 变更原因
先前更新成分遗漏specTable的Base Fabric，渲染优先读取此字段，导致仍显示Milk-silk。
## 变更前
Composition及specs已更新，但Base Material仍显示Milk-silk spandex, 4-way stretch。
## 变更后
Base Fabric源字段同步为95% Polyester, 5% Spandex，所有可见成分展示一致。
## 验收条件
生成HTML的Base Material单元格为95% Polyester, 5% Spandex。
## 影响范围
仅目标产品Base Fabric字段。
## 兼容性
落实已确认的成分规则，修正遗漏；不修改其他产品。
## 实现位置
src/data/allProducts.js
## 验证结果
完整构建、产品校验、SEO校验、生成HTML成分检查及git diff --check通过。
## 来源
用户反馈Base Material仍为牛奶丝。
