---
change_id: CHG-20261006-003-topic-cluster-buyer-decisions
date: 2026-10-06
status: implemented
requirements:
  - REQ-PRODUCT-039
modules:
  - product-catalog
  - site-shell
  - content-data
---

# 产品应用主题集群与采购决策内容

## 变更原因
产品详情页原本主要通过相似产品互链，应用页虽然链接到产品，但产品页缺少回链到应用主题；相近产品的采购说明也存在通用化重复，未充分帮助买家区分表面效果、底材、结构、用途和样品审批重点。

## 变更内容
- 新增产品到应用页的集中关系数据，产品详情页回链到对应的舞台服、舞蹈服、全息面料、泳装和啦啦队等应用指南。
- 更新泳装应用页，加入 H2015030103 产品详情页。
- 为 18 个公开产品补充两条独立的 `Buyer Decision Guide` 内容，按产品事实说明不同采购决策点。
- 沿用现有详情页组件和响应式设计，不修改产品图片、H1、已有产品正文或公共页面视觉体系。

## 验收结果
- `npm run build` 通过，生成 55 个静态页面。
- `npm run validate:products` 通过，18 个公开产品校验通过。
- 18 个产品页均包含 `Application Buying Guides` 和 `Buyer Decision Guide`。
- `/applications/swimwear-fabric-supplier/` 已包含 H2015030103 链接。
- `git diff --check` 通过。

## 实现位置
- `src/components/ProductDetail.astro`
- `src/data/applicationClusters.js`
- `src/data/productDecisionGuides.js`
- `src/pages/applications/[slug].astro`
