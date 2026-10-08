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
- 当前规则：博客列表、公开静态文章路由及博客 SEO 不展示以 glitter 为核心主题的文章或关键词；保留 foil、iridescent、stretch 和合规采购内容。没有明确同主题替代文章的旧 glitter 文章地址不重定向到博客首页，直接返回站点404。
- 验收条件：`/blog/` 仅显示非 glitter 主题文章；`cnas-certification-coarse-glitter-pu-hot-stamping-fabric`、`what-is-glitter-fabric`、`glitter-vs-foil-comparison` 和 `how-to-choose-glitter-surface-solid-leather-fabric` 的旧地址不生成静态文章、不匹配重定向规则并返回404；公开博客元数据不含 glitter 关键词。
- 影响模块：`blog-knowledge`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`public/_redirects`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260923-007-retired-blogs-404
- 待确认事项：无

### REQ-BLOG-004：公开博客聚焦面料采购场景
- 状态：active
- 当前规则：公开博客文章围绕 hot-stamping foil、iridescent、stretch fabric 及已确认的服装应用采购与合规判断，包括舞台服装、舞蹈服、表演服、Cosplay/Carnival Costume 和泳装；不推广鞋包配件、工艺或玩具行业。
- 验收条件：博客列表、公开文章正文、SEO 和 RFQ 文案服务于上述面料及服装采购场景，不引导鞋包配件、工艺或玩具采购。
- 影响模块：`blog-knowledge`、`content-data`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`；检查公开博客生成页面文本
- 最后变更编号：CHG-20261006-004-blog-application-product-links
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

### REQ-BLOG-006：博客首页使用采购资料库布局
- 状态：active
- 当前规则：`/blog/` 需要以 B2B 采购资料库方式呈现：紧凑标题区、一个 Featured Buying Guide、其余文章为横向 Buyer Guide 列表、按采购问题浏览的辅助区，以及单一工厂询盘 CTA。文章数量较少时不得使用生硬的等宽两列卡片网格或空泛分类筛选。
- 验收条件：博客首页突出一篇主推指南；其余文章按列表展示；页面只保留一个主要询盘 CTA 区；移动端内容自然单列展示。
- 影响模块：`blog-knowledge`、`site-shell`
- 代码路径：`src/pages/blog/index.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260916-009-blog-resource-center-layout
- 待确认事项：无

### REQ-BLOG-007：博客内容集群、内链与采购模板
- 状态：active
- 当前规则：公开博客需要按 `Fabric Selection`、`Applications`、`Sample & RFQ`、`Testing & Compliance` 四类采购任务组织入口；文章详情页必须包含统一的采购动作模块、推荐产品和 Related Buyer Guides 内链。公开集合继续排除 glitter、鞋包配件等不符合当前定位的内容，并保留 RFQ、样品、MOQ、GSM、合规和质检类高意图文章。
- 验收条件：`/blog/` 展示四个资源主题分组；公开文章详情页展示 Sample & RFQ Next Steps、Recommended Products 和 Related Buyer Guides；公开 Blog 路由不生成 glitter/shoes/bags 主题文章；构建成功。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260918-003-blog-content-seo-internal-links
- 待确认事项：无

### REQ-BLOG-008：Custom Foil Fabric Development 决策文章
- 状态：active
- 当前规则：公开博客需要包含一篇围绕 `Custom Foil Fabric Development: When Buyers Should Choose Custom Instead of Stock` 的采购决策文章，用来解释 stock foil fabric 与 custom foil fabric development 的适用场景，并从文章详情页优先内链到 `/applications/custom-foil-fabric-development/`。
- 验收条件：`/blog/custom-foil-fabric-development-stock-vs-custom/` 可生成；文章聚焦 dancewear、stage costumes、performance apparel、cosplay/carnival costume；正文包含 stock vs custom 判断、可定制项目、样品流程、MOQ/lead time、常见错误和 FAQ；详情页展示指向 custom foil fabric development 应用页的内链模块。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`；检查生成页包含 `/applications/custom-foil-fabric-development/`
- 最后变更编号：CHG-20260930-005-custom-foil-blog
- 待确认事项：无

### REQ-BLOG-009：Foil Stretch Fabric 出货前质检文章
- 状态：active
- 当前规则：公开博客保留 `Pre-Shipment Quality Control Checklist for Foil Stretch Fabric`，内容面向面料采购经理，必须覆盖 approved sample 对照、颜色与 foil 表面、usable width、数量与卷装、拉伸/缝制抽查、包装与文件、异常记录和放行决定。文章应提供可执行的表格或清单，不得使用无法验证的绝对质量承诺。
- 验收条件：文章使用独立 URL `/blog/pre-shipment-quality-control-checklist-foil-stretch-fabric/`；`/blog/what-to-include-in-a-custom-fabric-rfq/` 保留给 Custom Fabric RFQ 文章；标题、摘要和正文均围绕出货前质检；正文包含实际检查顺序、异常处理方式、FAQ 和询盘入口；构建成功。
- 影响模块：`blog-knowledge`、`content-data`
- 代码路径：`src/data/blogArticles.js`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20261005-001-pre-shipment-qc-guide
- 待确认事项：无

### REQ-BLOG-010：三篇面料样品与批量前测试指南
- 状态：active
- 当前规则：公开博客新增三篇面向采购经理的实操指南：`How to Compare Foil Fabric Samples from Different Suppliers`、`Stretch Recovery vs. Stretch Amount: What Fabric Buyers Should Check` 和 `How to Evaluate Foil Adhesion Before Bulk Production`。文章必须围绕真实采购流程展开，提供样品对比、拉伸/回复、裁剪缝制、表面检查、过程测试、记录和批量放行建议，不得把内部筛查步骤描述为认证测试或绝对性能保证。
- 验收条件：三篇文章都能生成独立静态路由；每篇包含详细正文、至少一张采购表格或可执行清单、FAQ、真实产品回链和询盘 CTA；首页资源分组能找到三篇文章；公开文章不引入 glitter、鞋包或无关行业内容；构建或页面生成检查通过。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`
- 测试路径：`npm run build`；文章数据检查；公开产品校验
- 最后变更编号：CHG-20261005-002-sample-testing-buyer-guides
- 待确认事项：无

### REQ-BLOG-011：文章与应用页、产品页导流
- 状态：active
- 当前规则：每篇公开 Blog 文章配置一个语义匹配的主应用页入口，并推荐 2–4 个真实、相关的产品；不得把全部产品泛化地挂到所有文章。被文章关联的产品详情页可展示最多两条简短 Related Buyer Guides 延伸阅读入口，不复制 Blog 长篇正文。
- 验收条件：文章详情页每篇最多展示一个主应用页入口和 2–4 个有效产品；文章关联产品页只出现简短 Blog 标题、分类与阅读时长链接；Blog 首页主题分组能发现新增文章。
- 影响模块：`blog-knowledge`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`；检查公开 Blog 的产品 slug、应用页映射和图片资源
- 最后变更编号：CHG-20261006-004-blog-application-product-links
- 待确认事项：既有文章的应用页如缺少明确语义映射，应后续按文章主题补齐，不依赖默认排序选择
