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

### REQ-BLOG-012：Blog 最终渲染标题长度校验
- 状态：active
- 当前规则：Blog SEO title 必须按 Layout 完成品牌名处理后的最终 `<title>` 计算长度，并控制在 60 个字符以内；压缩 title 时不修改文章 URL、canonical、H1 或正文主题。
- 验收条件：生成的公开 Blog 页面 title 均不超过 60 个字符；`metallic-vs-iridescent-vs-holographic-fabric` 与 `best-foil-fabric-for-swimwear-and-bikinis` 的 URL、canonical 和 H1 保持不变。
- 影响模块：`blog-knowledge`、`site-shell`
- 代码路径：`src/data/blogArticles.js`、`src/layouts/Layout.astro`
- 测试路径：`npm run build`；扫描生成 Blog 页面的最终 `<title>`
- 最后变更编号：CHG-20261008-001-blog-final-title-length
- 待确认事项：部署后 Google 可能短期保留旧标题或根据查询自行改写标题

### REQ-BLOG-013：核心 Blog 文章专业深度升级
- 状态：active
- 当前规则：核心公开 Blog 文章应采用面向美国 B2B fabric buyers 的深度采购指南结构，围绕材料/工艺原理、基布差异、应用判断、样品测试、商业采购信息和真实产品承接展开；不得为了增强专业感而虚构未确认性能、认证、测试结果或贸易承诺。
- 验收条件：`hot-stamping-foil-finish-guide`、`what-is-foil-fabric-wholesale-buyer-guide`、`metallic-vs-iridescent-vs-holographic-fabric` 和 `best-foil-fabric-for-swimwear-and-bikinis` 保持原 URL 不变；正文包含可执行的采购判断、表格或清单、真实产品回链和询盘 CTA；泳装类文章继续避免未经确认的 chlorine、UV、saltwater、colorfastness 等性能承诺。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`
- 测试路径：`npm run build`、公开 Blog 数据检查
- 最后变更编号：CHG-20261008-004-core-blog-depth-upgrade
- 待确认事项：后续可按同一结构继续升级其他薄内容文章

### REQ-BLOG-014：下一批 Blog 真实内容缺口选题
- 状态：active
- 当前规则：下一批优先 Blog 选题必须填补真实 B2B 面料采购缺口，每篇只服务一个搜索意图，并且每篇文章只链接一个语义匹配的应用页和 2–4 个真实相关产品。优先选题为：`Nylon Spandex vs Polyester Spandex for Foil Fabric`、`90 vs 150 vs 180 vs 200 GSM Performance Fabric`、`Dot vs Scale vs Snakeskin vs Gradient Foil Finish`、`How to Test Foil Fabric After Sewing and Stretching`、`How Much Fabric Is Needed for Dancewear or Costume Production`。
- 验收条件：新增上述文章时不得把多个搜索意图混写在一篇文章中；正文需围绕实际采购判断、样品测试、规格选择或用量估算展开；每篇推荐产品必须来自真实公开产品 slug，并避免所有文章链接同一批产品。
- 影响模块：`blog-knowledge`、`content-data`、`product-catalog`
- 代码路径：`src/data/blogArticles.js`、`src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`、公开 Blog 数据检查
- 最后变更编号：CHG-20261008-005-blog-content-gap-backlog
- 待确认事项：具体写作顺序、每篇对应应用页和产品清单可在实际写作前逐篇确认

### REQ-BLOG-015：公开 Blog 统一机构署名
- 状态：active
- 当前规则：所有公开 Blog 文章在标题区统一显示 `Written by Nixia Fabric Editorial Team`；Article Schema 的作者继续使用真实机构 `Organization: Nixia Fabric`。当前不设置个人作者或独立技术审核人，不得为了 E-E-A-T 虚构姓名或审核关系。
- 验收条件：每篇公开 Blog 页面显示一次统一机构署名；JSON-LD 的 `author.@type` 为 `Organization` 且 `author.name` 为 `Nixia Fabric`；不出现虚构的 `reviewedBy`。
- 影响模块：`blog-knowledge`
- 代码路径：`src/pages/blog/[slug].astro`
- 测试路径：`npm run build`；检查生成 Blog 页面可见署名和 Article JSON-LD
- 最后变更编号：CHG-20261008-006-blog-organization-byline
- 待确认事项：如未来公开真实个人作者，再单独增加 Person 资料与作者页

### REQ-BLOG-016：Blog 发布与实质更新日期
- 状态：active
- 当前规则：`date` 表示文章首次正式上线日期；可选 `updatedDate` 只在正文、规格、测试记录、图片证据或采购结论发生实质变化时设置。仅修改标点、样式或普通内链时不得刷新更新日期。一天发布多篇文章时保留真实日期，不人为错开或回填日期。
- 验收条件：Article Schema 的 `datePublished` 使用 `date`，`dateModified` 使用 `updatedDate` 或回退到 `date`；页面仅在 `updatedDate` 与发布日期不同时显示 `Updated`；未配置更新日期的既有文章视觉不变。
- 影响模块：`blog-knowledge`、`content-data`
- 代码路径：`src/pages/blog/[slug].astro`、`src/data/blogArticles.js`
- 测试路径：`npm run build`；检查生成 Article JSON-LD 和文章元信息
- 最后变更编号：CHG-20261008-007-blog-publication-update-dates
- 待确认事项：后续每次实质更新文章时由内容维护者同时填写 `updatedDate`
