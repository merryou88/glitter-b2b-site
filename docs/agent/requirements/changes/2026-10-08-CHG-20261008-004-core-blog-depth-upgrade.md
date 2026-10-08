---
change_id: CHG-20261008-004-core-blog-depth-upgrade
date: 2026-10-08
status: implemented
requirements:
  - REQ-BLOG-013
modules:
  - blog-knowledge
  - content-data
  - product-catalog
---

# Core Blog Depth Upgrade

## 变更原因
用户参考美国面料站 Blog 后指出当前站点核心文章专业深度不足，要求先升级四篇重点文章，使内容更接近美国 B2B 面料采购商的阅读习惯和决策需求。

## 变更前
部分公开 Blog 已有采购指南结构，但 `Hot-Stamping Foil Fabric` 和 `What Is Foil Fabric` 等文章偏短，材料机理、基布差异、生产测试和产品承接不够深入；比较类文章和泳装文章仍可进一步增强决策表与真实采购判断。

## 变更后
升级四篇文章：
- `hot-stamping-foil-finish-guide`
- `what-is-foil-fabric-wholesale-buyer-guide`
- `metallic-vs-iridescent-vs-holographic-fabric`
- `best-foil-fabric-for-swimwear-and-bikinis`

升级内容包括工艺/材料解释、基布与表面效果差异、应用场景判断、样品测试步骤、表格化采购决策、商业路线判断和真实产品导流。泳装文章继续强调不能未经测试假设 chlorine、UV、saltwater、colorfastness 等性能。

## 验收条件
- 四篇文章 URL、canonical 和 H1 不变。
- 四篇文章正文长度、表格/清单和采购判断明显增强。
- 推荐产品仍来自真实产品 slug。
- 不虚构认证、测试结果、库存、交期或贸易条款。
- 构建通过。

## 影响范围
`src/data/blogArticles.js` 与 Blog 需求文档。

## 兼容性
不修改路由、页面模板、图片资源或产品详情页结构。

## 实现位置
`src/data/blogArticles.js` 中四篇文章对象的正文、takeaways、buyerSummary、sections、FAQ 和推荐产品字段。

## 验证结果
2026-10-08：`npm run build` 通过，生成 57 个静态页面；`npm run validate:products` 通过，18 个公开产品校验通过；`npm run validate:seo` 通过，检查 57 个 HTML 页面、54 个 sitemap URL 和站内链接。四篇文章推荐产品 slug 均能映射到真实公开产品。

## 来源
用户 2026-10-08 要求参考美国面料站 Blog 专业程度，先升级四篇核心文章。
