---
change_id: CHG-20261006-002-seo-metadata-first-batch
date: 2026-10-06
status: implemented
requirements:
  - REQ-SHELL-012
  - REQ-PRODUCT-038
modules:
  - site-shell
  - product-catalog
  - blog-knowledge
---

# SEO 元数据第一批修复

## 变更原因
审计发现两个新增产品页仍使用旧产品主题的 SEO title；多个产品、应用、博客和工厂页面的 title 或 description 超出搜索摘要控制范围，可能造成搜索结果截断和页面主题信号不清。

## 变更内容
- 修正 H2015030102 和 H2015030101 的产品 SEO title，使其与页面 H1 和产品主题一致。
- 压缩 17 个公开产品的 meta description，保留材质/效果、主要应用、MOQ、样品或定制信息。
- 压缩产品列表页、应用页、博客页和工厂页的过长 title/description。
- 未修改产品正文、H1、图片、组件样式或页面交互。

## 验收条件
- 生成 sitemap 中所有可索引页面的 title 不超过 60 个字符的内部控制阈值。
- 生成 sitemap 中所有可索引页面的 meta description 不超过 160 个字符的内部控制阈值。
- 两个目标产品 title 与产品 H1 主题一致。
- 构建、产品数据校验和差异格式检查通过。

## 实现位置
- `src/data/allProducts.js`
- `src/data/blogArticles.js`
- `src/pages/products.astro`
- `src/pages/applications/[slug].astro`
- `src/pages/applications/index.astro`
- `src/pages/factory.astro`

## 验证结果
- 2026-10-06：`npm run build` 通过，共生成 54 个静态页面；sitemap 包含 51 个可索引 URL。
- 2026-10-06：`npm run validate:products` 通过，17 个公开产品数据校验通过。
- 2026-10-06：生成页面扫描确认 sitemap 中所有 title 不超过 60 个字符，description 不超过 160 个字符；两个目标产品 title 与 H1 主题一致。
- 2026-10-06：`git diff --check` 通过。
- 2026-10-06：并发新增 H2015030103 后补齐其 SEO 元数据；最终生成 55 个静态页面、sitemap 包含 52 个 URL，18 个公开产品校验通过，所有生成页面仍满足 title/description 长度阈值。

## 来源
用户 2026-10-06 要求继续执行 SEO 第一批优先修复。
