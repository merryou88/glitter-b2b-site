---
change_id: CHG-20261015-003-full-print-hide-hero-sku
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 首屏规格摘要隐藏SKU
## 变更原因
用户要求简化首屏摘要。
## 变更前
摘要以SKU P0002开头。
## 变更后
摘要仅展示幅宽、克重、颜色；产品标识和询盘上下文保持原逻辑。
## 验收条件
指定产品full-print-summary不包含SKU，仍包含幅宽、克重和颜色。
## 影响范围
指定产品首屏摘要。
## 兼容性
CHG-20261015-001中首屏显示SKU的部分被本记录替代，其余规则保持。
## 实现位置
src/components/ProductDetail.astro
## 验证结果
Astro构建与生成HTML摘要检查；git diff --check。完整产品校验的既有图片缺失见前记录。
## 来源
用户本轮要求。
