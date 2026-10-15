---
change_id: CHG-20261015-009-full-print-use-order
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# 优先展示核心应用
## 变更原因
用户要求推荐场景优先展示。
## 变更前
新增派对吊带裙和紧身裤图标在泳装之前。
## 变更后
用途图标依次为Swimwear、Swim caps、Dancewear、Stage costumes、Costume leggings、Party slip dresses；应用数据同步此优先顺序，其他应用保留在后。首屏介绍已有相同顺序。
## 验收条件
生成页面用途图标顺序匹配以上列表。
## 影响范围
仅目标产品应用顺序及专属用途图标区。
## 兼容性
替代此前图标插入顺序；不删除用途。依据用户确认的主要客户用途，不声称市场规模排名。
## 实现位置
src/components/FullPrintBuyingDetails.astro、src/data/allProducts.js
## 验证结果
Astro构建、生成HTML用途顺序检查与git diff --check通过；完整产品校验仍受既有主图缺失影响。
## 来源
用户本轮要求及此前泳装主要用途确认。
