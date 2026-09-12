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
- 验收条件：Factory 页面专属主体内容、页面 SEO 元数据和该页面可见 Footer 不包含 `glitter`、`chunky` 或 `sparkle` 相关内容；foil 转印、质量管理、包装、OEM/ODM 和工厂参观内容保持可用。站点级 Organization 结构化数据和询盘产品数据不在本规则范围内。
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
