---
change_id: CHG-20261011-024-product-weight-gsm-unit
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-041
modules:
  - product-catalog
  - content-data
  - blog-knowledge
---

# 公开产品 Weight 单位统一为 GSM

## 变更原因
用户要求所有产品的 Weight 单位统一使用 `GSM`，不再使用 `g/m²` 或 `g/m2`。

## 变更后
- 主产品数据中的 Weight 字段统一为 `GSM`。
- 旧版产品摘要数据中的 Weight 字段同步为 `GSM`。
- 产品详情页采购决策文案中的重量单位同步为 `GSM`。
- 公开博客中引用产品参考规格的 Weight 单位同步为 `GSM`。

## 验收条件
- `/products/` 产品卡片 Weight 显示为 `GSM`。
- `/products/{slug}/` 产品详情页 Weight 显示为 `GSM`。
- 公开数据和当前需求文档中不再出现 `g/m²` 或 `g/m2`。

## 实现位置
- `src/data/allProducts.js`
- `src/data/products.json`
- `src/data/productDecisionGuides.js`
- `src/data/blogArticles.js`
- `docs/agent/requirements/current/product-catalog.md`

## 验证结果
- 通过：`git diff --check`
- 通过：扫描 `src/data`、`src/pages`、`src/components` 和当前需求文档，未发现旧的每平方米克重单位写法。
- 通过：`npm run validate:products`
- 通过：`npm run build`
- 通过：构建产物抽查确认 `/products/` 和产品详情页 Weight 显示为 `GSM`，`dist/products` 与 `dist/blog` 中未发现旧单位写法。
