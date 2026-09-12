change_id: CHG-20260912-016-performance-market-focus
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-006
  - REQ-DATA-003
  - REQ-PRODUCT-001
  - REQ-PRODUCT-002
  - REQ-PRODUCT-012
  - REQ-COMPANY-007
  - REQ-BLOG-004
modules:
  - site-shell
  - content-data
  - product-catalog
  - company-pages
  - blog-knowledge

# 聚焦表演服装市场

## 变更原因
Nixia Fabric 的公开站点需要与新的战略定位一致，避免鞋材、手袋、泳装、泛时装、装饰、工艺和玩具等行业入口分散客户认知。

## 变更前
公开网站同时展示多个行业应用和产品，其中部分产品、应用页、公司介绍、博客和 SEO 文案面向非表演服装行业。

## 变更后
公开内容统一聚焦舞台服装、舞蹈服、表演服、Cosplay 和 Carnival Costume。目录、首页、应用页、询盘产品列表和产品详情静态路由只使用 4 个表演服装相关产品。退出行业的旧产品和应用地址通过 `_redirects` 迁移，历史源数据与图片暂不删除。

## 验收条件
- 首页、产品目录、应用页、公司页、工厂页、联系页和博客不推广退出行业。
- 产品目录和产品详情只公开 4 个表演服装相关产品。
- 退出行业产品和应用旧地址有重定向规则。
- 公开 SEO、结构化数据、Footer、表单占位文案与新定位一致。

## 影响范围
更新公开内容和路由生成范围；不改变表单提交协议、Worker、邮件收件规则或历史素材文件。

## 兼容性
保留旧地址的 301 跳转；历史产品数据保留在 `allProducts`，但不进入公开页面生成链。

## 实现位置
`src/data/allProducts.js`、`src/pages/products.astro`、`src/pages/products/[slug].astro`、`src/pages/applications/index.astro`、`src/pages/applications/[slug].astro`、`src/pages/index.astro`、`src/layouts/Layout.astro`、`src/components/HeroCarousel.astro`、`src/components/Footer.astro`、`src/pages/about.astro`、`src/pages/factory.astro`、`src/pages/contact.astro`、`src/data/blogArticles.js`、`public/_redirects`

## 验证结果
`npm run build` 通过；构建生成 4 个公开产品详情页和 2 个表演服装应用页，`npm run validate:products` 通过并检查 4 个公开产品。

## 来源
用户确认的 Nixia Fabric 中文战略定义及理想客户范围。
