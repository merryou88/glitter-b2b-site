---
module: content-data
status: current
---

### REQ-DATA-001：产品数据以 `allProducts.js` 为准
- 状态：active
- 当前规则：当前站点产品目录、详情页和产品相关图片路径都以 `src/data/allProducts.js` 为主数据源。
- 验收条件：新增或修改产品后，目录页和详情页都能同步展示。
- 影响模块：`content-data`、`product-catalog`
- 代码路径：`src/data/allProducts.js`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：待确认
- 待确认事项：无

### REQ-DATA-002：博客数据以 `blogArticles.js` 为准
- 状态：active
- 当前规则：博客列表、文章页和分类筛选都读取 `src/data/blogArticles.js`，分类枚举来自 `blogCategories`。
- 验收条件：新增文章后，列表页和详情页都能生成并显示对应内容。
- 影响模块：`content-data`、`blog-knowledge`
- 代码路径：`src/data/blogArticles.js`
- 测试路径：`npm run build`
- 最后变更编号：待确认
- 待确认事项：`src/data/products.json` 仅在 `src/legacy/[id].astro.bak` 出现，不属于当前主站数据链

### REQ-DATA-003：公开产品集合聚焦表演服装
- 状态：active
- 当前规则：`performanceProducts` 是当前公开产品集合，只包含适用于舞台服装、舞蹈服、表演服和 Cosplay/Carnival Costume 的 4 个产品。其他历史产品数据保留在 `allProducts` 中供历史路由迁移参考，但不得进入公开目录、产品详情静态路由、询盘产品选择或相关推荐。
- 验收条件：公开产品目录、详情页、首页推荐、应用页相关推荐和询盘产品数据都只使用 `performanceProducts`。
- 影响模块：`content-data`、`product-catalog`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`、`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：历史产品图片和历史数据暂不删除

### REQ-DATA-004：指定产品展示图使用品牌水印
- 状态：active
- 当前规则：`iridescent-laser-hot-stamping-stretch-ice-silk` 的主图 1 不使用水印；其他主图和 Product Details 图片使用低透明度、45 度倾斜重复域名水印 `nixiafabric.com`。JPG 与 WebP 展示版本保持同步。
- 验收条件：该产品主图 1 保持无水印；主图 2–5 和详情图 1–6 包含 45 度倾斜重复域名水印；图片尺寸和展示路径不变，面料主体仍清晰可辨，且不使用 Logo 图标水印或固定水印背景框。
- 影响模块：`content-data`、`product-catalog`
- 代码路径：`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/`
- 测试路径：`npm run validate:products`、`npm run build`、人工抽查图片
- 最后变更编号：CHG-20260913-003-main-image-no-watermark
- 待确认事项：无
