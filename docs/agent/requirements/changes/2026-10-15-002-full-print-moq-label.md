---
change_id: CHG-20261015-002-full-print-moq-label
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 精简样板页 MOQ 卡片
## 变更原因
用户明确要求卡片显示109yd。
## 变更前
MOQ / 109 yd per design / Minimum。
## 变更后
MOQ / 109yd；仅变更指定产品首屏显示，不更改实际采购条件。
## 验收条件
指定产品卡片显示109yd且无Minimum；其他产品保持原样。
## 影响范围
Full-Print产品首屏卡片。
## 兼容性
前一记录的首屏MOQ展示被本记录替代，其余规则继续生效。
## 实现位置
src/components/ProductDetail.astro
## 验证结果
执行Astro构建及差异空白检查；完整产品校验仍存在前次记录的既有图片缺失。
## 来源
用户本轮明确要求。
