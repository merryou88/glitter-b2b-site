---
change_id: CHG-20261015-007-full-print-costume-leggings
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 增加表演服饰紧身裤用途
## 变更原因
用户确认增加Costume leggings用途。
## 变更前
用途未包含表演服饰紧身裤。
## 变更后
产品应用数据、首屏介绍和用途图标区增加Costume leggings，采用原创裤形线条图标。介绍中表述为可选用途，不声称已有客户生产此类产品。
## 验收条件
目标页面介绍与用途图标均包含Costume leggings；不增加运动健身性能承诺。
## 影响范围
仅目标产品及其专属详情组件，图片不变。
## 兼容性
扩展REQ-PRODUCT-050用途列表，其余规则不变。
## 实现位置
src/data/allProducts.js、src/components/ProductDetail.astro、src/components/FullPrintBuyingDetails.astro
## 验证结果
Astro构建通过，生成页面用途文本检查与git diff --check通过；完整产品校验仍受既有主图缺失影响。
## 来源
用户本轮确认。
