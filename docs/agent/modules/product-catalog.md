---
module: product-catalog
paths:
  - src/pages/products.astro
  - src/pages/products/[slug].astro
  - src/components/ProductDetail.astro
  - src/data/allProducts.js
  - src/data/applicationClusters.js
  - src/data/productDecisionGuides.js
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
- 目录主图按 `main/*-main-1.webp` 命名约定通过 `astro:assets` 在构建时生成 360/540/720px WebP，通过 `srcset/sizes` 适配屏幕；非约定命名回退原图。首卡以匹配的响应式预加载及 eager/high 优先获取，其余卡片保持懒加载；产品详情原图不变。生产构建内联目录 CSS，移除阻塞样式请求。
- 列表页首屏以 Wholesale Foil & Metallic Fabrics、B2B 介绍、MOQ/色卡/定制颜色四项事实和双 CTA 面向产品特性采购，优先露出产品；quote/sample 双 CTA 复用 `RFQQuoteModal` 的 `data-rfq-intent`，无 JavaScript 时分别回退到联系页与样品政策页；不将全部目录产品统一称为四面弹，长样品条件置于底部 CTA。
- 全端默认展示全部产品；仅保留同一行搜索、产品特性快捷入口及清除；标签区域可横向滚动；不再显示下拉筛选、更多筛选和排序，默认推荐顺序不变。卡片图片桌面16:10、移动16:9，宽屏≥1280px每行5张、969–1279px每行3张、769–968px每行2张、≤768px每行1张；标题宽屏13px、其他14px，单行省略并提供完整title提示；材料和实际弹力提前展示，缺失弹力显示 Check sample。
- 详情页用 `getStaticPaths()` 为每个产品生成静态页面
- H2013120107、H2013120101 以及 REQ-PRODUCT-057 指定的七个低分详情页在动态路由内使用 `astro:assets` 生成 480/720/1080/1440px 响应式画廊主图（不超过源图尺寸，800px 源图使用 480/720/800px）和 160px 缩略图，通过可选 `optimizedGallery` 传给 `ProductDetail`；首图预加载与画廊候选匹配。缩略图和隐藏视频 poster 不再请求完整原图，视频仍保持 `preload="none"`；其他产品保留原图路径。图库切换更新响应式 source，不再调用图片元素不存在的 `load()` 方法。
- `ProductDetail` 统一承载产品正文、图库、FAQ 和 CTA；Full-Print 样板正文由 `FullPrintBuyingDetails.astro` 渲染，其他产品保留原布局

## 数据与状态
- 当前产品数据数：18；`/products/` 当前展示 `performanceProducts` 中的 18 个产品
- `ProductDetail` 会根据产品对象读取 `specs`、`faqList`、`imageList`、`galleryImages`、`detailImages`
- `src/pages/products/[slug].astro` 负责 FAQ / Breadcrumb JSON-LD；询盘型产品页不输出 Product JSON-LD
- 2026-09-19 至 2026-10-19 的下一批产品候选筛选记录在 `workflows/next-product-candidate-plan.md`；H2013060104、H2013060102、H2013090101、H2013120101、H2013120103、H2013120104 与 H2013120105 已由用户确认并进入公开产品集合，其余初筛对象仍按计划复核

## 外部依赖
- `public/images/products/**`
- `node:fs` 用于检查图片目录是否存在
- `Intl` 与浏览器原生 DOM 仅用于前端筛选交互

## 修改约束
- 先改 `allProducts.js`，再补图片和页面文案
- 保持 slug、图片路径、规格字段和 FAQ 字段一致
- 询盘型产品页不输出 Product schema，也不补公开价格、评分或评论；保留 FAQ 与 Breadcrumb schema
- 新增公开产品必须先确认符合当前 performance fabric 定位：foil、holographic、iridescent、stretch、stage costume、dancewear、cosplay、performance wear、props、backdrops 或 event decoration。glitter leather、PU accessory、鞋材、手袋、工艺、玩具等退出定位产品不得加入当前 `allProducts`
- 新增或修改公开产品详情页必须先读取 `products-data/面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet，并以目标 `Product ID` 行作为标题、slug、SEO、应用、规格、MOQ、颜色和来源状态的第一数据源；图片只能补充素材展示，不得替代表格字段
- 新增公开产品必须一次性写好美国采购商 SEO：`metaTitle` 使用买家搜索词和 `Wholesale Supplier`；H1/title 以材质、效果、弹性和用途开头；`metaDesc` 包含应用、wholesale/supplier、样品/定制/库存/MOQ 等已确认采购事实；`hot-stamping` 作为辅助工艺词，不作为主要搜索词
- 采购参数中 Width 只使用 inch 写法，例如 `59"`；MOQ 按现有库存状态展示：现货详情 `50m Stock / 200m Custom`、现货卡片 `50m`，无现货 `200m`；该用户指令覆盖原始表旧 MOQ；未知字段写 `To be confirmed` 或省略，不编造
- 统一采购展示规则：库存待确认或 `inStock !== true` 时显示 `Made to Order`，自定义样品准备时间为 `3-5 days`，批量生产交期为 `LEAD TIME`、`7-15 days`、`production`；所有产品包装显示 `Roll packing with paper tube inside, plastic bag outside; can follow customer requirement`；已确认现货产品保留现货样品规则
- 候选产品必须先确认可供应、可寄样、可报价，并完成现有产品去重；用户确认前不得修改产品数据、处理上架图片或制作页面

## 验证方式
- `npm run build`
- `npm run validate:products`
- 手动打开 `/products/` 和一个或两个 `/products/{slug}/`

## 常见问题
- 动态路由 slug 与数据不一致
- 图片缺少 `.webp` 回退
- 详情页 schema 失真

## 啦啦队应用页采购对比
`CheerleadingBuyerGuide.astro` 仅在啦啦队应用页挂载，使用四款现有产品的规格与图片替代重复通用对比/产品网格。按款 sample/quote 复用 RFQ，上下文和买家草稿保留，见 REQ-PRODUCT-058。

## 全息应用页效果对比
`HolographicBuyerGuide.astro` 仅在全息应用页挂载，以四款实际目录照片和规格替代通用 shortlist，分离视觉效果与底布参数；响应式图片复用 `responsiveImage`，按款 sample 复用既有 RFQ。见 REQ-PRODUCT-059。
