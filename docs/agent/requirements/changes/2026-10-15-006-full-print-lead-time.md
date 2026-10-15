---
change_id: CHG-20261015-006-full-print-lead-time
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 精简Full-Print交期卡片
## 变更原因
用户要求去掉交期卡片production文字。
## 变更前
展示LEAD TIME、7-15 days、production。
## 变更后
仅展示LEAD TIME和7-15 days。
## 验收条件
目标产品交期卡片不渲染production；其他产品不变。
## 影响范围
仅目标产品交期卡片。
## 兼容性
替代该产品原有交期卡片三行展示规则，实际交期不变。
## 实现位置
src/components/ProductDetail.astro
## 验证结果
Astro构建通过；生成HTML交期卡片检查与git diff --check通过。完整产品校验仍受既有图片缺失影响。
## 来源
用户本轮明确要求。
