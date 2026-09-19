---
module: company-pages
status: current
---

### REQ-COMPANY-001：公司与政策页保持静态内容页形态
- 状态：active
- 当前规则：`about`、`factory`、`certifications`、`sample-policy`、`privacy`、`thank-you`、`404` 都是独立静态页，并统一使用 `Layout`。
- 验收条件：这些路由都可直接打开，且公共壳一致。
- 影响模块：`company-pages`、`site-shell`
- 代码路径：`src/pages/about.astro` 等对应页面
- 测试路径：`npm run build`
- 最后变更编号：待确认
- 待确认事项：无

### REQ-COMPANY-002：感谢页和 404 页必须保持 noindex
- 状态：active
- 当前规则：`/thank-you/` 使用 `robots="noindex, follow"`，`/404/` 使用 `robots="noindex"`。
- 验收条件：这两个页面不会被当成普通可索引内容页。
- 影响模块：`company-pages`、`site-shell`
- 代码路径：`src/pages/thank-you.astro`、`src/pages/404.astro`
- 测试路径：查看页面源代码
- 最后变更编号：待确认
- 待确认事项：无

### REQ-COMPANY-003：样品与认证文案必须贴合当前事实
- 状态：active
- 当前规则：`sample-policy` 说明样品免费但运费由客户承担；`certifications` 说明 SGS / REACH / buyer-specific testing 是可安排项。
- 验收条件：文案与代码里的当前产品和服务事实一致。
- 影响模块：`company-pages`
- 代码路径：`src/pages/sample-policy.astro`、`src/pages/certifications.astro`
- 测试路径：手动打开对应页面
- 最后变更编号：待确认
- 待确认事项：无

### REQ-COMPANY-004：隐私页记录当前代码里可见的处理事实
- 状态：active
- 当前规则：`/privacy/` 记录当前收集项、用途、保留期和跨境传输说明；页面里写到 aggregate analytics/security monitoring，但仓库中没有独立分析脚本。
- 验收条件：隐私页内容与当前代码和页面结构一致。
- 影响模块：`company-pages`
- 代码路径：`src/pages/privacy.astro`
- 测试路径：手动打开 `/privacy/`
- 最后变更编号：待确认
- 待确认事项：分析能力是否真的上线，仍需单独确认

### REQ-COMPANY-005：Factory 页面不展示 glitter 专属内容
- 状态：active
- 当前规则：`/factory/` 以 foil、iridescent、stretch 和通用制造能力为主，不展示 glitter 专属产品、生产线、设备、工艺描述、SEO 关键词、图片替代文本或公共 Footer 中的 glitter 文案。
- 验收条件：Factory 页面专属主体内容、页面 SEO 元数据和该页面可见 Footer 不包含 `glitter`、`chunky` 或 `sparkle` 相关内容；foil 转印、质量管理、包装、定制订单和工厂参观内容保持可用。站点级 Organization 结构化数据和询盘产品数据不在本规则范围内。
- 影响模块：`company-pages`、`site-shell`
- 代码路径：`src/pages/factory.astro`
- 测试路径：`npm run build`；检查 `/factory/` 生成页面文本和源代码关键词
- 最后变更编号：CHG-20260912-002
- 待确认事项：无

### REQ-COMPANY-006：About 页面不展示 glitter 专属内容
- 状态：active
- 当前规则：`/about/` 的页面正文、结构化数据、SEO 标题、描述和关键词不展示 glitter 专属内容，页面聚焦 foil、iridescent、stretch、synthetic leather 和通用制造服务。
- 验收条件：About 页面源代码和生成页面的页面专属内容不包含 `glitter`；品牌故事、产品路线、材料重点、全球服务和既有 About 页面结构仍可用。
- 影响模块：`company-pages`
- 代码路径：`src/pages/about.astro`
- 测试路径：检查 `src/pages/about.astro` 与 `dist/about/index.html`；运行 `npm run build`
- 最后变更编号：CHG-20260912-003
- 待确认事项：公共 Footer 及共享产品数据不属于 About 页面专属内容，本次不调整

### REQ-COMPANY-007：公司与联系页面聚焦表演服装客户
- 状态：active
- 当前规则：`about`、`factory` 和 `contact` 的正文与 SEO 聚焦舞台服装制造商、舞蹈服品牌、表演服采购商以及 Cosplay/Carnival Costume 公司，不展示鞋材、手袋、泳装、泛时装、装饰、工艺或玩具行业定位。
- 验收条件：上述页面的可见文案、页面描述和关键词与表演服装市场一致。
- 影响模块：`company-pages`、`site-shell`
- 代码路径：`src/pages/about.astro`、`src/pages/factory.astro`、`src/pages/contact.astro`
- 测试路径：`npm run build`；检查生成页面文本与 meta
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：无

### REQ-COMPANY-008：Factory 页面展示自有生产与可核验制造流程
- 状态：active
- 当前规则：`/factory/` 明确展示 Nixia 拥有自有生产车间，页面聚焦 foil fabric processing、样品与效果匹配、质量检验、卷装包装和买家审厂支持；页面展示品牌化工厂实拍视频，并可安排项目相关的远程视频验厂。页面不得虚构未经确认的面积、设备数量、产能、员工数量、交期或证书归属。
- 验收条件：Factory 页面首屏和生产介绍不再使用会弱化自有工厂定位的 `production partners` 表述；页面包含工厂能力概览、生产流程控制点、质量管理、品牌化工厂视频、视频验厂联系入口和审厂支持；页面仍不展示 glitter 专属内容。
- 影响模块：`company-pages`、`site-shell`
- 代码路径：`src/pages/factory.astro`
- 测试路径：`npm run build`；检查 `/factory/` 生成页面文本、页面 SEO 元数据和移动端布局
- 最后变更编号：CHG-20260919-003-factory-procurement-workflow
- 待确认事项：可公开的具体工厂数据和测试标准

### REQ-COMPANY-009：Factory 地图使用稳定的懒加载与常驻备用入口
- 状态：active
- 当前规则：`/factory/` 的 Google Maps iframe 使用浏览器原生懒加载，不通过静态资源探测或固定超时判断地图是否可用；地图下方始终展示工厂地址和 Google Maps 外链，供网络受限或 iframe 加载失败时使用。
- 验收条件：页面不会在 iframe 尚未进入视口时误判加载失败并隐藏地图；地图 iframe 有可访问名称；桌面端和移动端都能看到工厂地址及外部地图入口。
- 影响模块：`company-pages`
- 代码路径：`src/pages/factory.astro`
- 测试路径：`npm run build`；检查 `/factory/` 生成页面不包含地图探测脚本，并检查移动端地图辅助信息布局
- 最后变更编号：CHG-20260918-005-factory-map-loading
- 待确认事项：中国大陆网络可能无法访问 Google Maps，此限制不由页面代码控制

### REQ-COMPANY-010：Factory 页面展示品牌化工厂实拍视频
- 状态：active
- 当前规则：`/factory/` 嵌入品牌化工厂实拍视频，视频校正画面方向并使用 Nixia Fabric 片头、固定品牌水印、网站地址和片尾；页面播放器不自动播放，使用 poster、`preload="metadata"` 和 `playsinline`，兼顾移动端性能与内联播放。
- 验收条件：Factory 页面可播放 `/images/factory/nixia-factory-branded.mp4`；成片为网页兼容的 H.264/AAC MP4，画面方向正确，片头、主画面水印和片尾可见；播放器保持 16:9 且移动端不发生布局位移；页面仍提供联系入口以安排项目相关的视频验厂。
- 影响模块：`company-pages`、`content-data`
- 代码路径：`src/pages/factory.astro`、`public/images/factory/nixia-factory-branded.mp4`、`public/images/factory/nixia-factory-poster.jpg`
- 测试路径：`npm run build`；检查视频编码、时长、画面方向和 Factory 页面生成 HTML
- 最后变更编号：CHG-20260919-001-factory-branded-video
- 待确认事项：无

### REQ-COMPANY-011：Factory 页面说明标准化质量控制与订单执行边界
- 状态：active
- 当前规则：`/factory/` 说明从订单规格确认、来料检查、首件确认、烫金转印、过程检验、成品卷检到包装放行的通用生产与质量控制方法，并说明定制订单的可行性评估、打样、买家确认、批量生产和出货流程。Composition、GSM、width、stretch、颜色、MOQ 和交期等产品或订单特定信息由产品详情页及正式报价承载，不在 Factory 页面给出统一数值。摩擦、洗涤、尺寸变化、化学合规等测试仅作为可按买家和产品要求约定的项目，测试方法、费用、判定标准和报告方须在生产前确认；包装形式、标签和唛头同样按订单确认。
- 验收条件：Factory 页面只保留一套生产流程和一套质量控制框架；采购商能看到定制订单、测试和包装如何执行；页面链接到产品、联系和认证支持页面；页面不声称具备未经确认的实验室、仪器、固定设备、默认证书或所有订单必过的测试，也不公开说明上游材料采购安排。
- 影响模块：`company-pages`、`product-catalog`
- 代码路径：`src/pages/factory.astro`、`src/pages/products/[slug].astro`、`src/data/allProducts.js`
- 测试路径：`npm run build`；检查 `dist/factory/index.html` 的流程、测试、MOQ、交期和包装文案；检查 Factory 页面关键词
- 最后变更编号：CHG-20260919-003-factory-procurement-workflow
- 待确认事项：单个产品的最终规格、MOQ、交期、测试判定值和包装细节以对应产品数据及正式订单文件为准
