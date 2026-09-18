---
module: product-catalog
status: current
---

### REQ-PRODUCT-001：产品列表页仅展示当前定位相关产品
- 状态：active
- 当前规则：`/products/` 只展示 `performanceProducts` 中适用于 foil、holographic、iridescent、stretch、舞台服装、舞蹈服、表演服、Performance & Party Wear、舞台道具、背景布、活动装饰、泳装、cosplay 和 Halloween costumes 的产品；glitter leather、PU accessory、鞋材、手袋、工艺、玩具等退出定位产品不得出现在产品卡片、推荐排序、产品总数、场景入口、筛选结果或询盘选择中。产品列表页不再展示应用场景入口，场景导航由独立应用页面承担。
- 验收条件：当前目录页展示 8 个公开产品；筛选、排序和总数均基于这 8 个产品；页面不出现鞋材、手袋、工艺或玩具等退出行业产品入口。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/products.astro`
- 测试路径：`npm run build`，手动检查 `/products/`
- 最后变更编号：CHG-20260916-005-h2013090104-product-detail
- 待确认事项：无

### REQ-PRODUCT-002：每个公开产品生成独立静态详情页
- 状态：active
- 当前规则：`/products/[slug]` 通过 `getStaticPaths()` 为 `performanceProducts` 中每个公开产品生成静态页，并渲染 WebPage、Product、FAQ 和面包屑结构化数据。产品没有公开固定售价时，不输出不完整的 `offers`、虚构价格或评分。
- 验收条件：每个公开产品 slug 都能打开对应详情页；退出行业产品不生成新页面并通过 `_redirects` 迁移；元数据与产品事实一致。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products/[slug].astro`、`src/components/ProductSchema.astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260916-002-seo-page-optimization
- 待确认事项：无

### REQ-PRODUCT-003：询盘入口必须带着产品上下文
- 状态：active
- 当前规则：产品卡片和详情页的询盘入口要把产品名或 SKU 传给询盘流程，方便 Worker 和表单保留上下文。
- 验收条件：从产品页发起询盘时，表单里能带上当前产品信息。
- 影响模块：`product-catalog`、`inquiry-forms`
- 代码路径：`src/pages/products.astro`、`src/components/ProductDetail.astro`
- 测试路径：手动从产品页打开询盘弹窗并提交
- 最后变更编号：待确认
- 待确认事项：无

### REQ-PRODUCT-004：指定产品图片按原始高度自然展示
- 状态：active
- 当前规则：`full-print-hot-stamping-spandex-milk-silk` 的 Product Details 第一张图需要横向占满整行，后续图片按默认一行两列展示；application 第三张图需要横向占满整行。
- 验收条件：该产品详情页中 Product Details 首图全宽、其余图片两列展示，application 第三张图跨满两列，图片按原始比例展示。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260908-010-full-print-first-image-fullwidth
- 待确认事项：无

### REQ-PRODUCT-009：Full-Print 产品 detail 图片需连续编号
- 状态：active
- 当前规则：`full-print-hot-stamping-spandex-milk-silk` 的 Product Details 图片需要按 `1.jpg` 到 `6.jpg` 连续编号展示，并保持 WebP 配对。
- 验收条件：该产品 detail 图片连续编号、WebP 成对存在、详情页正常渲染。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260908-009-full-print-detail-renumber
- 待确认事项：无

### REQ-PRODUCT-010：指定产品颜色数标签需同步更新
- 状态：active
- 当前规则：`non-woven-glitter-fabric` 的产品卡片角标与详情页 `Available Colors` 需要同步为 `31 colors`；`sparkle-glitter-surface-solid-leather-fabric` 的产品卡片角标与详情页 `Available Colors` 需要同步为 `35 colors`。
- 验收条件：这两个产品的列表页角标和详情页可见颜色数一致，且分别显示为 `31 colors` 与 `35 colors`。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260908-011-color-count-badge-sync
- 待确认事项：无

### REQ-PRODUCT-011：Coarse Glitter 产品需使用 CNAS 对外展示
- 状态：active
- 当前规则：`coarse-glitter-pu-hot-stamping-fabric-cma-certified` 的产品标题、首页推荐卡片角标、详情页文案与合规说明需要统一展示为 `CNAS Certified`，并避免对外使用 `CMA Certified` 表述。
- 验收条件：该产品在首页、列表页与详情页都显示 `CNAS Certified`；相关合规说明不再出现 `CMA Certified`。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/index.astro`
- 测试路径：`npm run build`
- 最后变更编号：待确认
- 待确认事项：slug 保持不变，仍沿用现有产品地址

### REQ-PRODUCT-012：退出行业产品不再公开展示
- 状态：active
- 当前规则：非表演服装定位的历史产品不进入当前目录、详情静态路由、首页、应用页相关推荐或询盘产品列表；旧产品地址统一重定向到 `/products/`。
- 验收条件：构建产物中不生成退出行业产品详情页，旧地址访问后进入当前产品目录。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`public/_redirects`
- 测试路径：`npm run build`；检查旧地址重定向规则
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：历史产品原始图片暂不删除

### REQ-PRODUCT-013：Iridescent Laser Stretch Ice-Silk 产品颜色信息需准确
- 状态：active
- 当前规则：`iridescent-laser-hot-stamping-stretch-ice-silk` 只有 1 个标准颜色；详情页 `Specifications Table for B2B Buyers` 的 `Available Colors` 必须显示为 `1 standard color`。
- 验收条件：该产品详情页不再显示 `31 colors`，并显示 `1 standard color`；其他产品的颜色信息不受影响。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260912-003-iridescent-laser-color-count
- 待确认事项：无

### REQ-PRODUCT-014：Holographic Foil Stretch Spandex 产品列表颜色标签需准确
- 状态：active
- 当前规则：`iridescent-gradient-laser-ice-silk` 的产品列表卡片颜色标签显示为 `19 colors`，并使用 `colorCount: 19` 参与颜色数量排序；详情页颜色信息继续显示 19 色。
- 验收条件：`/products/` 中该产品不再显示 `Standard Color`，而显示 `19 colors`；按颜色数量排序时使用 19。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260913-004-holographic-color-badge
- 待确认事项：无

### REQ-PRODUCT-015：两款 Iridescent 产品颜色信息需准确
- 状态：active
- 当前规则：`plain-iridescent-laser-spandex-4-way-stretch` 和 `iridescent-laser-hot-stamping-stretch-ice-silk` 均只有 1 个标准颜色。两款产品的产品列表角标、颜色排序值和详情页 `Available Colors` 均显示为 `1 standard color`。
- 验收条件：这两款产品列表页不显示 `31 colors`；详情页和列表页均显示 `1 standard color`，其他产品颜色信息不受影响。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products.astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260913-005-iridescent-color-count-correction
- 待确认事项：无

### REQ-PRODUCT-016：产品详情页使用 Article 主 schema 并嵌套 Product 主题
- 状态：active
- 当前规则：所有公开产品详情页通过公共组件输出一个 `Article` JSON-LD，保留产品名称、绝对主图 URL和英文描述，并包含 `publisher` 为 Nixia Fabric；通过 `about` 嵌套一个不含 Offer、Review 或 AggregateRating 的 `Product` 实体，表达文章介绍的面料产品。站点采用询盘模式，不输出虚构价格或报价结构化数据。
- 验收条件：产品页的主产品 schema 类型为 `Article`，包含 `name`、`image`、`description`、`publisher` 和 `about.Product`；`about.Product` 包含产品名称、完整绝对主图 URL和英文描述；产品主 schema 不包含 `offers`、`review` 或 `aggregateRating`；主图为空时不输出该组件 schema；博客页不加载该产品组件；原有页面 HTML、CSS、GA4 和图片渲染逻辑不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductSchema.astro`、`src/pages/products/[slug].astro`
- 测试路径：`npm run build`；检查生成产品页和博客页源码
- 最后变更编号：CHG-20260915-009-product-article-schema
- 待确认事项：生产部署和 Google Search Console 复测需在具备部署/GSC权限后执行

### REQ-PRODUCT-017：H2013060105 公开产品页聚焦 Performance & Party Wear
- 状态：active
- 当前规则：`shiny-foil-4-way-stretch-knit-fabric` 是 H2013060105 的公开详情页，H1 使用 `Shiny Foil 4-Way Stretch Knit Fabric for Performance & Party Wear`，SEO 标题和描述按当前 B2B Performance & Party Wear 定位输出。页面应用重点为 Stage Costumes、Dancewear、Performance Wear、Concert Outfits、Party Wear、Festival Costumes、Performance Bodysuits，不把 Shoes、Bags、Crafts 或 Hair Accessories 作为主要应用。详情页不展示独立 `Product Description` 模块，避免和统一详情页模板的信息层级冲突。产品规格只能使用已确认的 H2013060105 数据：145cm、150g、MOQ 100m、30 colors、100% Polyester、高弹/4-way stretch、90S、Hot-stamping foil。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；CTA 带当前产品上下文进入现有询盘流程；页面主要定位不出现退出应用方向；规格不编造 Composition、Width、Weight、MOQ 或颜色信息；`Specifications Table for B2B Buyers` 前不出现 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/shiny-foil-4-way-stretch-knit-fabric/`
- 最后变更编号：CHG-20260915-001-h2013060105-shiny-foil-product
- 待确认事项：无

### REQ-PRODUCT-018：H2013060106 公开产品页聚焦舞台与活动装饰应用
- 状态：active
- 当前规则：`non-shedding-glitter-suede-look-laser-foil-fabric` 是 H2013060106 的公开详情页，H1 使用 `Dense Dot Foil Suede-Look Fabric`，标题下方描述使用已确认的 Soft suede-like base、subtle scattered metallic sparkles、wrinkle-resistant 和 flexible performance 文案，并将应用扩展为 evening dresses、fashion apparel、handbags、upholstery、stage decor 和 photo backdrops。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：150cm、130g、MOQ 100m、Custom projects MOQ 200 meters、16 colors、Slight Stretch、210T、75D*75DD、Foil、Foil embossing 和 Suede-look fabric；Availability 为 In-Stock，Stock Dispatch 为 5-7 days。
- 验收条件：详情页可生成并显示 Availability: In-Stock、STOCK DISPATCH: 5-7 working days、Custom projects: MOQ 200 meters、Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；详情图按内容顺序连续编号为 `x1`–`x12`，Application 拼图独立位于 `application/1`；PNG/JPG 原图保持无水印，主图首张 WebP 与 Application WebP 不加水印，其余主图和详情图 WebP 每张使用 3 个低透明度、逆时针 45 度倾斜域名水印。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013060106/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/non-shedding-glitter-suede-look-laser-foil-fabric/`
- 最后变更编号：CHG-20260915-008-h2013060106-description-update
- 待确认事项：自定义项目的具体生产交期需按项目询价确认

### REQ-PRODUCT-019：H2013120102 公开产品页聚焦蓝紫渐变镭射弹力面料
- 状态：active
- 当前规则：`blue-purple-gradient-laser-foil-spandex-fabric` 是 H2013120102 的公开详情页，H1 使用 `Blue-Purple Gradient Laser Foil 4-Way Stretch Fabric`，SEO 标题、Meta Description、标题下方描述、应用和规格均以 `面料独立站产品数据.xlsx` 中 H2013120102 为准。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：150cm、180g、MOQ 100m、1 standard color、4-way stretch、110T、120D*120D、Hot-stamping foil 和 98% Polyester 2% Spandex；库存状态、批量交期和测试合规未在来源数据确认时保持 to be confirmed。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；详情图按内容顺序连续编号为 `x1`–`x9`；Application 拼图独立位于 `application/1`；PNG/JPG 原图保持无水印，主图首张 WebP 与 Application WebP 不加水印，其余主图和详情图 WebP 每张使用 3 个低透明度、逆时针 45 度倾斜域名水印；`Specifications Table for B2B Buyers` 前不出现 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120102/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/blue-purple-gradient-laser-foil-spandex-fabric/`
- 最后变更编号：CHG-20260916-003-h2013120102-product-detail
- 待确认事项：库存状态、批量交期和测试合规需按项目确认

### REQ-PRODUCT-020：新增公开产品必须自带美国买家 SEO 与采购参数
- 状态：active
- 当前规则：新增公开产品写入 `src/data/allProducts.js` 时必须同时完成产品定位、SEO 标题、详情页 H1、Meta Description、采购参数和 FAQ 的优化，不允许先新增再二次补 SEO。产品必须符合当前 performance fabric 定位；不符合定位的 glitter leather、PU accessory、鞋材、手袋、工艺、玩具等产品不得加入当前主产品数据。新增产品的 `metaTitle` 应使用美国采购商搜索习惯，优先表达 `holographic`、`iridescent`、`foil`、`stretch`、`spandex`、`knit`、`fabric`、应用场景和 `Wholesale Supplier`；`title`/H1 以买家识别的材质、效果、弹性和用途开头，不以内部工艺词或 slug 开头。`hot-stamping` 可作为工艺说明或规格项出现，但不作为主要搜索词。`metaDesc` 必须包含应用场景、wholesale/supplier 采购意图、样品/定制/库存/MOQ 等已确认事实。规格和 FAQ 中的宽度、MOQ 等采购参数必须同时给出公制和美国买家易读单位，例如 `150 cm / 59 in`、`100 m / 109 yd`；未知字段必须写 `To be confirmed` 或省略，不能编造。
- 验收条件：新增产品在第一次提交时已经具备美国买家搜索习惯的 `metaTitle`、`metaDesc`、H1、采购型 FAQ、样品/定制/MOQ/库存信息和中美单位表达；`npm run validate:products` 与 `npm run build` 通过；公开目录和 sitemap 只包含当前定位产品。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260916-004-product-seo-add-rules
- 待确认事项：真实库存、MOQ、颜色数、测试合规和交期需以产品来源资料或业务确认信息为准

### REQ-PRODUCT-021：H2013090104 公开产品页聚焦彩虹圆点镭射针织面料
- 状态：active
- 当前规则：`rainbow-dot-laser-foil-knit-fabric` 是 H2013090104 的公开详情页，H1 使用 `Rainbow Dot Laser Foil Knit Fabric for Stage Costumes`，SEO 标题按美国采购商搜索习惯补充 `Wholesale Supplier`，标题下方描述、应用和规格以 `面料独立站产品数据.xlsx` 中 H2013090104 及业务确认信息为准。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：150 cm / 59 in、90 GSM、MOQ 200 m / 219 yd、28 colors、bulk lead time 5-7 days、slight stretch、90S、hot-stamping foil、knit fabric 和 100% Polyester；测试合规未在来源数据确认时保持 to be confirmed。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；详情图按内容顺序连续编号为 `x1`–`x23`；PNG/JPG 原图保持无水印，主图首张 WebP 不加水印，其余主图和详情图 WebP 每张使用 3 个低透明度、逆时针 45 度倾斜域名水印；`Specifications Table for B2B Buyers` 前不出现 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013090104/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/rainbow-dot-laser-foil-knit-fabric/`
- 最后变更编号：CHG-20260916-006-h2013090104-color-leadtime
- 待确认事项：测试合规需按项目确认

### REQ-PRODUCT-022：产品列表页采用 B2B 采购型目录布局
- 状态：active
- 当前规则：`/products/` 以美国面料采购商的比较需求组织信息，首屏展示采购摘要，目录区提供关键词搜索、Finish、Stretch、Application、Stock、排序控件和 Grid/List 视图切换；产品卡片必须直接展示宽幅、克重、底材、MOQ、库存状态、颜色数量和主要应用场景。
- 验收条件：采购商无需进入详情页即可比较核心规格；搜索和筛选能联动更新结果数量；Grid 视图继续使用 1:1 产品图，List 视图可横向比较规格；询盘按钮文案为 `Request Sample / Quote`；页面不新增价格或虚构规格。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查 `/products/` 搜索、筛选、排序和移动端布局
- 最后变更编号：CHG-20260916-010-products-b2b-catalog-layout
- 待确认事项：无

### REQ-PRODUCT-005：重点产品轮播角标需匹配品牌深蓝白字风格
- 状态：active
- 当前规则：`plain-iridescent-laser-spandex-4-way-stretch` 详情页轮播图右上角的 `WHOLESALE` 标签需使用深蓝底、白色文字，并保持与站点 logo 图标一致的品牌感。
- 验收条件：该产品轮播角标显示为深蓝色背景与白字，视觉上与 header logo 的深蓝白字风格一致。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260908-003-wholesale-badge-brand-style
- 待确认事项：无

### REQ-PRODUCT-006：Rainbow Gradient 产品标题与图片素材需同步更新
- 状态：active
- 当前规则：`rainbow-gradient-glitter-synthetic-leather` 的展示标题应更新为 `Pastel Rainbow Iridescent Superfine Glitter Faux Leather Fabric for Crafts & Accessories`，并同步使用新的 main、application、detail 图片素材。
- 验收条件：该产品详情页、列表页与 SEO 标题展示新名称；main、application、detail 图片路径均指向新素材。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260908-004-rainbow-product-refresh
- 待确认事项：无

### REQ-PRODUCT-007：Sparkle 产品 detail 与 application 图片需同步更新
- 状态：active
- 当前规则：`sparkle-glitter-surface-solid-leather-fabric` 使用新的 detail 与 application 图片素材；Product Details 图片按默认一行两列展示。
- 验收条件：该产品 detail 图片引用连续编号图片；Product Details 图片包含第三张在内都按默认两列网格展示；application 图片按 `application/` 目录新素材自动展示。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260908-007-sparkle-detail-two-column
- 待确认事项：无

### REQ-PRODUCT-008：Sparkle 图片目录需统一连续编号并补齐 WebP
- 状态：active
- 当前规则：`sparkle-glitter-surface-solid-leather-fabric` 的 `main`、`application`、`detail` 目录需要按连续编号从 `1` 开始命名；缺失的 WebP 需要补齐；详情页继续按新目录展示图片。
- 验收条件：三个目录的文件名连续、可被产品数据直接引用，WebP 文件成对存在，详情页图片正常渲染。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260908-006-sparkle-renumber-and-webp
- 待确认事项：无
