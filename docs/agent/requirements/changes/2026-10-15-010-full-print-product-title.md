---
change_id: CHG-20261015-010-full-print-product-title
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 更新泳装面料产品标题
## 变更原因
用户确认采用此前建议的产品标题。
## 变更前
Full-Print Foil Spandex Milk-Silk Fabric。
## 变更后
Metallic Foil 4-Way Stretch Fabric for Swimwear。共享产品title驱动H1、产品卡片、面包屑和询盘产品名称；原slug及SEO独立字段保留。
## 验收条件
原产品地址的H1显示新标题，询盘入口使用新产品名称。
## 影响范围
目标产品显示标题及其共享引用。
## 兼容性
替代原显示标题，不更改URL、SKU或图片。
## 实现位置
src/data/allProducts.js
## 验证结果
Astro构建、生成HTML的H1与询盘产品名称检查及git diff --check通过；完整产品校验仍受既有主图缺失影响。
## 来源
用户明确选择此前推荐标题。
