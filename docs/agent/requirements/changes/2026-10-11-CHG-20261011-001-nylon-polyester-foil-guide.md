---
change_id: CHG-20261011-001-nylon-polyester-foil-guide
date: 2026-10-11
status: implemented
requirements:
  - REQ-BLOG-002
  - REQ-BLOG-011
  - REQ-BLOG-014
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Nylon-Spandex vs Polyester-Spandex Foil Fabric Guide

## 变更原因
用户确认先发布下一批内容缺口中的 `Nylon Spandex vs Polyester Spandex for Foil Fabric`，文章需要服务一个明确的基布选择搜索意图，并建立应用页与产品页导流。

## 变更前
Blog 缺少专门比较 nylon-spandex 与 polyester-spandex foil fabric 的采购指南，买家只能从单个产品页分散查看基布和应用信息。

## 变更后
- 新增 `/blog/nylon-spandex-vs-polyester-spandex-foil-fabric/`。
- 文章围绕基布、foil 表面、stretch/recovery、缝制、灯光审核、应用匹配和 RFQ 展开。
- 文章链接一个应用页 `/applications/foil-fabric-for-stage-costumes/`。
- 文章推荐 4 个真实产品，包含 3 个 nylon-spandex 方向和 1 个 polyester-spandex 方向。
- 文章明确说明纤维名称不能替代实际样品测试，不虚构泳装、抗氯、UV 或色牢度性能。

## 验收条件
- 新文章能生成独立静态路由。
- Blog 首页可发现文章。
- 推荐产品 slug 全部映射到真实公开产品。
- 文章只展示一个主应用页入口和 2–4 个产品。
- 构建与产品/SEO 校验通过。

## 影响范围
`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`。

## 兼容性
不修改既有 URL、产品规格、图片文件或其他文章 URL。

## 实现位置
文章数据、Blog 首页 Fabric Selection 分组、文章详情页应用页映射。

## 验证结果
2026-10-11：`npm run build` 通过，生成 58 个静态页面；`npm run validate:products` 通过，18 个公开产品校验通过；`npm run validate:seo` 通过，检查 58 个 HTML 页面、55 个 sitemap URL 和站内链接。文章包含 9 个章节、4 张采购表格、6 个 FAQ，推荐产品均映射到真实公开产品。

## 来源
用户 2026-10-11 确认开始编写并发布该文章。
