---
module: product-catalog
paths:
  - src/pages/products.astro
  - src/pages/products/[slug].astro
  - src/components/ProductDetail.astro
  - src/data/allProducts.js
triggers:
  - product
  - products
  - sku
  - MOQ
  - sample
  - catalog
  - detail page
depends_on:
  - site-shell
  - content-data
  - inquiry-forms
requirement_docs:
  - requirements/current/product-catalog.md
---

# product-catalog

## 职责
产品目录和产品详情页。负责列表、筛选、排序、详情渲染、产品 schema 和询盘入口。

## 不负责的范围
不负责博客、公司页、Worker 实现或 Resend 旧端点。

## 代码入口
- `src/pages/products.astro`
- `src/pages/products/[slug].astro`
- `src/components/ProductDetail.astro`
- `src/data/allProducts.js`

## 关键调用关系
- 列表页从 `allProducts` 生成卡片与筛选条件
- 详情页用 `getStaticPaths()` 为每个产品生成静态页面
- `ProductDetail` 统一承载产品正文、图库、FAQ 和 CTA

## 数据与状态
- 当前产品数据数：8；`/products/` 当前展示不含 `glitter` 标签的 4 个产品
- `ProductDetail` 会根据产品对象读取 `specs`、`faqList`、`imageList`、`galleryImages`、`detailImages`
- `src/pages/products/[slug].astro` 负责 Product / FAQ / Breadcrumb JSON-LD

## 外部依赖
- `public/images/products/**`
- `node:fs` 用于检查图片目录是否存在
- `Intl` 与浏览器原生 DOM 仅用于前端筛选交互

## 修改约束
- 先改 `allProducts.js`，再补图片和页面文案
- 保持 slug、图片路径、规格字段和 FAQ 字段一致
- 产品 schema 只能写代码里能确认的事实，不要补公开价格或评分
- 产品列表页使用 `catalogProducts` 过滤带 `glitter` 标签的产品；不要据此删除对应产品详情页或主数据

## 验证方式
- `npm run build`
- 手动打开 `/products/` 和一个或两个 `/products/{slug}/`

## 常见问题
- 动态路由 slug 与数据不一致
- 图片缺少 `.webp` 回退
- 详情页 schema 失真
