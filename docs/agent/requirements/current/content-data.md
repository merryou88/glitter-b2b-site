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
- 当前规则：`performanceProducts` 是当前公开产品集合，只包含适用于舞台服装、舞蹈服、表演服、Performance & Party Wear、舞台道具、背景布、活动装饰、泳装、cosplay 和 Halloween costumes 的 10 个产品。其他历史产品数据保留在 `allProducts` 中供历史路由迁移参考，但不得进入公开目录、产品详情静态路由、询盘产品选择或相关推荐。
- 验收条件：公开产品目录、详情页、首页推荐、应用页相关推荐和询盘产品数据都只使用 `performanceProducts`，并包含已确认的 H2013060102。
- 影响模块：`content-data`、`product-catalog`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`、`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260921-001-h2013060102-product-detail
- 待确认事项：历史产品图片和历史数据暂不删除

### REQ-DATA-004：指定产品展示图使用品牌水印
- 状态：active
- 当前规则：指定产品的主图 1 不使用水印；主图与 Product Details 图只在 WebP 展示版本添加域名水印，PNG/JPG 原图保持无水印，除每个产品首张主图（如 `main/1.webp` 或 `main/a1.webp`）外每张只放 3 个低透明度、逆时针 45 度倾斜域名水印 `nixiafabric.com`；3 个水印必须分散在不同画面区域，不得互相重叠或交叉遮挡；Application 图片的 PNG/JPG 与 WebP 均不加水印。
- 验收条件：指定产品主图 1 保持无水印；主图与 Product Details 图的 PNG/JPG 原图不加水印，除首张主图外的同名 WebP 每张包含且只包含 3 个低透明度、逆时针 45 度倾斜域名水印，且 3 个水印位置分散、不互相重叠；Application 图片的 PNG/JPG 与 WebP 均保持无水印；图片尺寸和展示路径不变，面料主体仍清晰可辨，且不使用 Logo 图标水印或固定水印背景框。
- 影响模块：`content-data`、`product-catalog`
- 代码路径：`public/images/products/H2013120107/`、`public/images/products/H2013060101/`、`public/images/products/H2013060102/`、`public/images/products/H2013060104/`、`public/images/products/H2013060105/`、`public/images/products/H2013060106/`、`public/images/products/H2013090101/`、`public/images/products/H2013120106/`、`public/images/products/H2013120102/`、`public/images/products/H2013090104/`、`public/images/products/H2013090102/`
- 测试路径：`npm run validate:products`、`npm run build`、人工抽查图片
- 最后变更编号：CHG-20260923-003-h2013120107-image-path
- 待确认事项：无

### REQ-DATA-005：线上图片目录只保留必要展示资源
- 状态：active
- 当前规则：`public/images` 和 `public/shots` 中已有同名 WebP 展示版本的 JPG/PNG 原图不得继续随站点部署；这些原图按原 `public` 路径结构归档到仓库根目录的 `products-data/original-images/`。站点数据、页面和组件应优先引用 WebP，只有缺少 WebP 或确有兼容需求的图片才允许保留 JPG/PNG 在 `public`。
- 验收条件：构建产物不引用已归档的 JPG/PNG；公开产品图片路径校验通过；归档目录保留原路径结构，便于后续回溯源素材。
- 影响模块：`content-data`、`product-catalog`、`site-shell`、`blog-knowledge`
- 代码路径：`src/data/allProducts.js`、`src/data/blogArticles.js`、`src/data/products.json`、`src/pages/**`、`src/components/**`、`public/images/**`、`public/shots/**`、`products-data/original-images/**`
- 测试路径：`npm run validate:products`、`npm run build`，扫描生成页面中的缺失图片引用
- 最后变更编号：CHG-20260916-007-archive-original-images
- 待确认事项：是否还需要为极旧浏览器保留少量 JPG/PNG fallback

### REQ-DATA-006：工厂原始视频不得随站点公开部署
- 状态：active
- 当前规则：Factory 页面使用的原始视频归档在 `products-data/original-videos/`，不得保留在 `public/`；线上只部署经过方向校正、品牌片头、固定水印、网站地址和片尾处理的展示版本。
- 验收条件：`public/images/factory/` 只包含页面实际使用的品牌版视频和 poster；未品牌化源视频保留在非公开归档目录，并可用于后续重新编码。
- 影响模块：`content-data`、`company-pages`
- 代码路径：`products-data/original-videos/images/factory/factory.mp4`、`public/images/factory/nixia-factory-branded.mp4`、`public/images/factory/nixia-factory-poster.jpg`
- 测试路径：检查 `public/images/factory/` 文件清单；运行 `npm run build`
- 最后变更编号：CHG-20260919-001-factory-branded-video
- 待确认事项：无
