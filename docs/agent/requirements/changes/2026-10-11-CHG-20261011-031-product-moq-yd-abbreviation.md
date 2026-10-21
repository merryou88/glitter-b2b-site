---
change_id: CHG-20261011-031-product-moq-yd-abbreviation
date: 2026-10-11
status: superseded
superseded_by: CHG-20261021-007-sitewide-stock-custom-moq
requirements:
  - REQ-PRODUCT-042
modules:
  - product-catalog
  - content-data
---

# Product MOQ yd Abbreviation

## 变更原因
用户要求所有产品中的 yard 单位进一步统一为 `yd`。

## 变更前
公开产品 MOQ 已主要使用 `yd` 展示，但产品目录页和详情页的 MOQ 格式化函数仍使用容易混淆的内部命名，需求文档也仍以长写法描述单位。

## 变更后
公开产品 MOQ 继续只输出 `yd` 缩写；产品目录页和产品详情页的 MOQ 格式化内部命名同步改为 `yd` 语义，当前需求和模块文档改为强调 `yd` 缩写。

## 验收条件
- 产品数据、产品列表页和产品详情页 MOQ 不展示长写法。
- 纯数字 MOQ 渲染时仍换算并展示为 `109 yd`、`219 yd` 等格式。
- 旧的双单位 MOQ 展示不恢复。

## 影响范围
仅影响公开产品 MOQ 单位展示约束和对应格式化命名，不改变产品顺序、样式、筛选、价格或交期。

## 兼容性
不影响已有 URL、slug、筛选参数或产品详情页结构。

## 实现位置
- `src/pages/products.astro`
- `src/components/ProductDetail.astro`
- `docs/agent/modules/product-catalog.md`
- `docs/agent/requirements/current/product-catalog.md`

## 验证结果
- 通过：`rg -n "100 m / 109 yd|200 m / 219 yd|109 yard|219 yard|MOQ from 100|MOQ 100 m|MOQ 200 m" src` 未返回公开源码命中。
- 通过：`rg -n "\\byard(s)?\\b" src/data/allProducts.js src/data/products.json src/data/productDecisionGuides.js src/pages/products.astro src/components/ProductDetail.astro src/pages/index.astro src/components/ContactForm.astro src/components/RfqQuoteForm.astro` 未返回产品 MOQ 展示链路命中。
- 通过：`npm run validate:products`。
- 通过：`npm run build`，构建链路内 `validate:products` 与 `validate:seo` 均通过。
- 通过：构建后旧 MOQ 双单位扫描 `dist` 未返回命中。
- 通过：`git diff --check`。

## 来源
用户于 2026-10-11 提出的“所有产品的yard再改一下，用yd”。
