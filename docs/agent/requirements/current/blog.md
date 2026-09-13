---
module: blog-knowledge
status: current
---

### REQ-BLOG-001：博客文章由静态数据生成
- 状态：active
- 当前规则：博客列表页和文章页都由 `src/data/blogArticles.js` 生成；公开文章集合排除 glitter-focused 文章，列表数量与公开数据集合一致。
- 验收条件：新增文章后，列表页和 `/blog/[slug]` 都能生成。
- 影响模块：`blog-knowledge`
- 代码路径：`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`
- 最后变更编号：待确认
- 待确认事项：当前公开文章总数以 `blogArticles.js` 导出的过滤结果为准

### REQ-BLOG-002：文章必须能回链到真实产品
- 状态：active
- 当前规则：文章详情页的 `focusProducts` 必须映射到真实产品 slug，并展示相关产品卡和询盘 CTA。
- 验收条件：文章页里的推荐产品都能打开对应产品页。
- 影响模块：`blog-knowledge`、`product-catalog`、`inquiry-forms`
- 代码路径：`src/pages/blog/[slug].astro`
- 测试路径：手动打开任意文章页并检查推荐产品链接
- 最后变更编号：待确认
- 待确认事项：无

### REQ-BLOG-003：公开博客内容不推广 glitter 主题
- 状态：active
- 当前规则：博客列表、公开静态文章路由及博客 SEO 不展示以 glitter 为核心主题的文章或关键词；保留 foil、iridescent、stretch 和合规采购内容。
- 验收条件：`/blog/` 仅显示非 glitter 主题文章；旧 glitter 文章地址统一重定向到 `/blog/`；公开博客元数据不含 glitter 关键词。
- 影响模块：`blog-knowledge`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`public/_redirects`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260912-015-blog-remove-glitter-content
- 待确认事项：无

### REQ-BLOG-004：公开博客聚焦表演服装采购
- 状态：active
- 当前规则：公开博客文章只围绕 hot-stamping foil、iridescent、stretch fabric 及其在舞台服装、舞蹈服、表演服和 Cosplay/Carnival Costume 中的采购与合规判断，不推广其他行业。
- 验收条件：博客列表、公开文章正文、SEO 和 RFQ 文案不出现鞋材、手袋、泳装、装饰、工艺或玩具行业引导。
- 影响模块：`blog-knowledge`、`content-data`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`；检查公开博客生成页面文本
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：已排除的历史文章继续保留在源数据中

### REQ-BLOG-005：Full-Print Hot-Stamping Spandex 采购指南
- 状态：active
- 当前规则：公开博客需要包含一篇围绕 `full-print-hot-stamping-spandex-milk-silk` 的采购指南，主题为如何为 dancewear、stage costumes、performance outfits 和 cosplay/carnival costume 选择 hot-stamping spandex fabric。
- 验收条件：博客列表页展示该文章；详情页可生成；文章回链到 `full-print-hot-stamping-spandex-milk-silk` 及相关 stretch/foil 产品；正文包含规格、样品、颜色确认、RFQ 信息和批量前测试建议。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260913-002-hot-stamping-spandex-blog-guide
- 待确认事项：无
