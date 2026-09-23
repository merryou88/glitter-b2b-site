---
module: product-catalog
paths:
  - src/pages/products.astro
  - src/pages/products/[slug].astro
  - src/components/ProductDetail.astro
  - src/data/allProducts.js
  - docs/agent/workflows/next-product-candidate-plan.md
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
产品目录和产品详情页。负责列表、筛选、排序、详情渲染和询盘入口。

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
- 当前产品数据数：11；`/products/` 当前展示 `performanceProducts` 中的 11 个产品
- `ProductDetail` 会根据产品对象读取 `specs`、`faqList`、`imageList`、`galleryImages`、`detailImages`
- `src/pages/products/[slug].astro` 负责 FAQ / Breadcrumb JSON-LD；询盘型产品页不输出 Product JSON-LD
- 2026-09-19 至 2026-10-19 的下一批产品候选筛选记录在 `workflows/next-product-candidate-plan.md`；H2013060104、H2013060102 与 H2013090101 已由用户确认并进入公开产品集合，其余初筛对象仍按计划复核

## 外部依赖
- `public/images/products/**`
- `node:fs` 用于检查图片目录是否存在
- `Intl` 与浏览器原生 DOM 仅用于前端筛选交互

## 修改约束
- 先改 `allProducts.js`，再补图片和页面文案
- 保持 slug、图片路径、规格字段和 FAQ 字段一致
- 询盘型产品页不输出 Product schema，也不补公开价格、评分或评论；保留 FAQ 与 Breadcrumb schema
- 新增公开产品必须先确认符合当前 performance fabric 定位：foil、holographic、iridescent、stretch、stage costume、dancewear、cosplay、performance wear、props、backdrops 或 event decoration。glitter leather、PU accessory、鞋材、手袋、工艺、玩具等退出定位产品不得加入当前 `allProducts`
- 新增公开产品必须一次性写好美国采购商 SEO：`metaTitle` 使用买家搜索词和 `Wholesale Supplier`；H1/title 以材质、效果、弹性和用途开头；`metaDesc` 包含应用、wholesale/supplier、样品/定制/库存/MOQ 等已确认采购事实；`hot-stamping` 作为辅助工艺词，不作为主要搜索词
- 采购参数要同时给出公制和美国买家易读单位，例如 `150 cm / 59 in`、`100 m / 109 yd`；未知字段写 `To be confirmed` 或省略，不编造
- 统一采购展示规则：库存待确认或 `inStock !== true` 时显示 `Made to Order`，样品准备时间为 `3-5 working days`，批量交期为 `7-15 working days`；所有产品包装显示 `Roll packing with paper tube inside, plastic bag outside; can follow customer requirement`；已确认现货产品保留现货交期
- 候选产品必须先确认可供应、可寄样、可报价，并完成现有产品去重；用户确认前不得修改产品数据、处理上架图片或制作页面

## 验证方式
- `npm run build`
- `npm run validate:products`
- 手动打开 `/products/` 和一个或两个 `/products/{slug}/`

## 常见问题
- 动态路由 slug 与数据不一致
- 图片缺少 `.webp` 回退
- 详情页 schema 失真
