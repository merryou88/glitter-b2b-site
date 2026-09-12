---
module: content-data
paths:
  - src/data/allProducts.js
  - src/data/blogArticles.js
  - src/legacy/[id].astro.bak
triggers:
  - 产品数据
  - 博客数据
  - article
  - sku
  - slug
  - image
  - gallery
depends_on:
  - product-catalog
  - blog-knowledge
requirement_docs:
  - requirements/current/content-data.md
---

# content-data

## 职责
站点当前有效的内容源。产品和博客页面都从这里读取静态业务数据，而不是从 CMS 或数据库读取。

## 不负责的范围
不负责页面布局、筛选交互、SEO 头部，也不负责邮件或 Worker 逻辑。

## 代码入口
- `src/data/allProducts.js`
- `src/data/blogArticles.js`
- `src/legacy/[id].astro.bak`

## 关键调用关系
- `allProducts.js` 提供产品列表、详情、图片路径、FAQ 和规格
- `blogArticles.js` 提供博客列表、分类、文章内容和关联产品
- `src/legacy/[id].astro.bak` 仍引用 `src/data/products.json`，但不在当前路由图里

## 数据与状态
- 当前产品数：8
- 当前博客文章数：5
- 当前博客分类数：6
- 产品 slug、文章 slug、图片路径都是强约束

## 外部依赖
- `public/images/**`
- `public/shots/**`
- 本地文件系统图片命名

## 修改约束
- 新增/改名产品先改 `allProducts.js`
- 新增博客先改 `blogArticles.js`
- 图片变更要同步检查 `.webp` 与原图是否同时存在

## 验证方式
- `npm run build`
- `npm run validate:products`
- 手动核对引用图片和 slug 是否存在

## 常见问题
- 图片文件存在但路径拼错
- slug 改了但页面或导航没同步
- 误把 `products.json` 当成当前站点主数据源
