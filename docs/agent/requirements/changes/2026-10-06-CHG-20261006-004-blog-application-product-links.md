---
change_id: CHG-20261006-004-blog-application-product-links
date: 2026-10-06
status: implemented
requirements:
  - REQ-BLOG-004
  - REQ-BLOG-011
modules:
  - blog-knowledge
  - product-catalog
---

# Blog Application and Product Referral Links

## 变更原因
用户要求新增两篇采购指南，并明确 Blog 与商业页面的导流关系：每篇文章链接一个应用页和 2–4 个相关产品；产品详情页只提供简短延伸阅读，不复制长篇文章；不同文章只推荐真正相关的产品。

## 变更前
- 新增文章尚未加入 Blog 首页采购主题分组。
- 泳装文章指向通用 holographic 应用页，而站点已有专用 swimwear 应用页。
- 产品详情页尚无响应式适配的 Related Buyer Guides 短链接模块。
- 当前 Blog 需求文档仍排除泳装，与用户随后确认的泳装文章和应用页冲突。

## 变更后
- Blog 首页将 metallic/iridescent/holographic 比较指南列入 Fabric Selection，将泳装 foil 采购指南列入 Applications。
- 两篇新文章各展示一个对应应用页；泳装文章链接至 `/applications/swimwear-fabric-supplier/`。
- 文章详情页按关联产品显示最多四个相关产品。
- 关联产品详情页最多展示两条 Related Buyer Guides 简短入口，移动端单列。
- 更新公开 Blog 应用范围，允许已确认的泳装面料采购主题；仍排除鞋包配件、工艺和玩具主题。

## 验收条件
- 两篇新文章均出现在 Blog 首页主题组和 Latest Buyer Guides。
- 每篇文章包含 2–4 个有效产品链接与一个匹配的应用页链接。
- 文章封面引用现存资源，并与其他公开文章封面不重复。
- 产品详情页仅展示短标题入口，不嵌入 Blog 正文。
- 构建、产品校验和 diff 检查通过。

## 影响范围
`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`src/components/ProductDetail.astro` 及 Blog 需求文档。

## 兼容性
不修改既有文章 URL、产品 URL、产品规格或图片文件。

## 实现位置
文章数据、Blog 首页分组、文章详情页关联入口和 `ProductDetail` 的 Related Buyer Guides 模块。

## 验证结果
2026-10-06：`npm run build` 通过，生成 57 个静态页面；`npm run validate:products` 通过，18 个公开产品校验通过；`git diff --check` 通过。新增文章图片资源存在且新增两篇使用不同封面；文章详情页将产品推荐限制为最多 4 个、应用页入口限制为 1 个，产品详情页延伸阅读在移动端单列。

## 来源
用户 2026-10-06 关于新增两篇 Blog 及 Blog、应用页和产品页导流关系的要求。
