---
change_id: CHG-20261011-027-product-width-inch-only
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-043
modules:
  - product-catalog
  - content-data
  - blog-knowledge
---

# 公开产品 Width 统一为 inch-only 格式

## 变更原因
用户要求所有产品的 Width 只使用 inch 写法，例如 `59"`，不再展示 `150 cm / 59 in` 这类厘米与英寸并列格式。

## 变更后
- 主产品数据中的 Width 改为 `59"`、`58"`、`57"` 等 inch-only 格式。
- 旧版产品摘要数据中的 Width 同步为 inch-only 格式。
- 公开博客中引用产品参考规格的 Width 同步为 inch-only 格式。
- 产品目录模块文档中的新增产品规则同步为 Width 只使用 inch 写法。

## 验收条件
- `/products/` 产品卡片 Width 显示为 `59"` 等 inch-only 格式。
- `/products/{slug}/` 产品详情页 Width 显示为 inch-only 格式。
- RFQ 产品上下文中的 Width 显示为 inch-only 格式。
- 公开数据和构建产物中不再出现厘米与英寸并列的 Width 写法。

## 实现位置
- `src/data/allProducts.js`
- `src/data/products.json`
- `src/data/blogArticles.js`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/modules/product-catalog.md`

## 验证结果
- 通过：`git diff --check`
- 通过：扫描 `src/data`、`src/pages`、`src/components`、当前需求文档和模块文档，未发现厘米与英寸并列的旧 Width 写法。
- 通过：`npm run validate:products`
- 通过：`npm run build`
- 通过：构建产物抽查确认 `/products/`、产品详情页、RFQ 产品上下文和博客输出中 Width 显示为 `59"`、`58"`、`57"`、`55"` 等 inch-only 格式。
