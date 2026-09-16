---
change_id: CHG-20260916-002-seo-page-optimization
date: 2026-09-16
module: site-shell
status: implemented
affects:
  - REQ-SHELL-011
  - REQ-PRODUCT-002
---

# SEO Page Optimization

## 变更原因
站点基础收录条件正常，但部分产品和博客页面存在标题过长、描述过长、产品结构化数据语义不准确，以及新增公开页面内链覆盖不足的问题。

## 变更内容
- 修正 `iridescent-laser-hot-stamping-stretch-ice-silk` 的产品标题，避免 H1 输出 slug。
- 压缩首页、产品目录、联系页、合规页、工厂页、样品页及重点产品/博客页面的 meta title 与 description。
- 将产品公共 JSON-LD 从 `Article` 改为 `WebPage` 的 `mainEntity: Product`，继续不输出没有真实公开价格的 `offers`。
- 首页热门产品区增加当前公开产品入口，并增加 `/applications/` 入口。
- 应用索引页增加指向产品目录和博客的内链。

## 不变内容
- 不修改页面整体样式系统。
- 不修改产品图片和产品规格数据。
- 不恢复空价格、虚构评分或虚构评论。

## 验收条件
- 所有公开页面 canonical 自指，目标页面保持 `index, follow`。
- 产品页不再将产品主体标记为 Article。
- 当前公开产品详情页均有首页或其他公开页面内链。
- 构建与产品数据校验通过。

## 验证
- 2026-09-16：`npm run build` 通过，Astro 生成 23 个页面。
- 2026-09-16：`npm run validate:products` 通过，6 个公开产品资源校验通过。
- 2026-09-16：静态回归检查确认公开页面 canonical 自指、目标页面为 `index, follow`，6 个产品页和 3 个博客页均出现在生成的 sitemap 中。
- 2026-09-16：静态回归检查确认产品结构化数据使用 `WebPage` + `mainEntity: Product`，未输出 `offers`、价格、评分或评论。
