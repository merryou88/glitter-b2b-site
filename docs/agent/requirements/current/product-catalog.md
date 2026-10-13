---
module: product-catalog
status: current
---

### REQ-PRODUCT-001：产品列表页仅展示当前定位相关产品
- 状态：active
- 当前规则：`/products/` 只展示 `performanceProducts` 中适用于 foil、holographic、iridescent、stretch、舞台服装、舞蹈服、表演服、Performance & Party Wear、舞台道具、背景布、活动装饰、泳装、cosplay、dresses、tops、formalwear、lingerie、mermaid skirts 和 Halloween costumes 的产品；glitter leather、PU accessory、鞋材、手袋、工艺、玩具等退出定位产品不得出现在产品卡片、推荐排序、产品总数、场景入口、筛选结果或询盘选择中。产品列表页不再展示应用场景入口，场景导航由独立应用页面承担。
- 验收条件：当前目录页展示 17 个公开产品；筛选、排序和总数均基于这 18 个产品；页面不出现鞋材、手袋、工艺或玩具等退出行业产品入口。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/products.astro`
- 测试路径：`npm run build`，手动检查 `/products/`
- 最后变更编号：CHG-20261006-001-h2015030103-product-detail
- 待确认事项：无

### REQ-PRODUCT-002：每个公开产品生成独立静态详情页
- 状态：active
- 当前规则：`/products/[slug]` 通过 `getStaticPaths()` 为 `performanceProducts` 中每个公开产品生成静态页，并渲染 FAQ 和面包屑结构化数据。询盘型产品页不输出 Product schema，也不输出不完整的 `offers`、虚构价格、评价或评分。
- 验收条件：每个公开产品 slug 都能打开对应详情页；退出行业产品不生成新页面并通过 `_redirects` 迁移；元数据与产品事实一致。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260923-004-remove-product-schema
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
- 状态：retired
- 当前规则：该规则仅保留历史追溯；`non-woven-glitter-fabric` 与 `sparkle-glitter-surface-solid-leather-fabric` 已退出公开产品集合，不再生成列表卡片或详情页。
- 验收条件：两个历史产品不出现在公开产品集合和构建路由中，旧地址返回404。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260923-006-retired-products-404
- 待确认事项：无

### REQ-PRODUCT-011：Coarse Glitter 产品需使用 CNAS 对外展示
- 状态：retired
- 当前规则：该规则仅保留历史追溯；`coarse-glitter-pu-hot-stamping-fabric-cma-certified` 已退出公开产品集合，不再生成首页、列表页或详情页入口。
- 验收条件：该历史产品不出现在公开产品集合和构建路由中，旧地址返回404。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/index.astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260923-006-retired-products-404
- 待确认事项：无

### REQ-PRODUCT-012：退出行业产品不再公开展示
- 状态：active
- 当前规则：非表演服装定位的历史产品不进入当前目录、详情静态路由、首页、应用页相关推荐或询盘产品列表；没有明确同类替代页面的旧产品地址不做栏目首页重定向，直接返回站点404。
- 验收条件：构建产物中不生成退出行业产品详情页；`non-woven-glitter-fabric`、`rainbow-gradient-glitter-synthetic-leather`、`coarse-glitter-pu-hot-stamping-fabric-cma-certified` 和 `sparkle-glitter-surface-solid-leather-fabric` 的带斜杠及不带斜杠旧地址均不匹配重定向规则，并由站点返回404。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`public/_redirects`
- 测试路径：`npm run build`；检查旧地址重定向规则
- 最后变更编号：CHG-20260923-006-retired-products-404
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

### REQ-PRODUCT-016：询盘型产品详情页不输出 Product schema
- 状态：active
- 当前规则：所有公开产品详情页不输出 `Product` JSON-LD，也不输出 `offers`、`review` 或 `aggregateRating`。页面继续保留 `FAQPage`、`BreadcrumbList`、canonical、Meta 和 Open Graph 数据。站点采用 B2B 询盘模式，没有公开价格或真实评价时，不声明商品富媒体结果资格。
- 验收条件：所有公开产品详情页生成源码中不存在 `"@type":"Product"`、`offers`、`review` 或 `aggregateRating`；FAQ 与 Breadcrumb schema 保持存在；博客页 schema 不受影响；页面可见内容、HTML 结构、CSS、GA4 和图片渲染逻辑不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products/[slug].astro`
- 测试路径：`npm run build`；检查生成产品页和博客页源码
- 最后变更编号：CHG-20260923-004-remove-product-schema
- 待确认事项：生产部署和 Google Search Console 复测需在具备部署/GSC权限后执行

### REQ-PRODUCT-017：H2013060105 公开产品页聚焦 Performance & Party Wear
- 状态：active
- 当前规则：`shiny-foil-4-way-stretch-knit-fabric` 是 H2013060105 的公开详情页，H1 使用 `Shiny Foil 4-Way Stretch Knit Fabric for Performance & Party Wear`，SEO 标题和描述按当前 B2B Performance & Party Wear 定位输出。页面应用重点为 Stage Costumes、Dancewear、Performance Wear、Concert Outfits、Party Wear、Festival Costumes、Performance Bodysuits，不把 Shoes、Bags、Crafts 或 Hair Accessories 作为主要应用。详情页不展示独立 `Product Description` 模块，避免和统一详情页模板的信息层级冲突。产品规格只能使用已确认的 H2013060105 数据：145cm、150g、MOQ 109 yd、30 colors、100% Polyester、高弹/4-way stretch、90S、Hot-stamping foil。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；CTA 带当前产品上下文进入现有询盘流程；页面主要定位不出现退出应用方向；规格不编造 Composition、Width、Weight、MOQ 或颜色信息；`Specifications Table for B2B Buyers` 前不出现 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/shiny-foil-4-way-stretch-knit-fabric/`
- 最后变更编号：CHG-20260915-001-h2013060105-shiny-foil-product
- 待确认事项：无

### REQ-PRODUCT-018：H2013060106 公开产品页聚焦舞台与活动装饰应用
- 状态：active
- 当前规则：`dense-dot-foil-suede-look-fabric` 是 H2013060106 的公开详情页，旧地址 `non-shedding-glitter-suede-look-laser-foil-fabric` 永久 301 重定向到新地址。H1 使用 `Dense Dot Foil Suede-Look Fabric`，标题下方描述使用已确认的 Soft suede-like base、subtle scattered metallic sparkles、wrinkle-resistant 和 flexible performance 文案，并将应用扩展为 evening dresses、fashion apparel、handbags、upholstery、stage decor 和 photo backdrops。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：150cm、130g、MOQ 109 yd、Custom projects MOQ 219 yd、16 colors、Slight Stretch、210T、75D*75DD、Foil、Foil embossing 和 Suede-look fabric；Availability 为 In-Stock，Stock Dispatch 为 5-7 days。
- 验收条件：详情页可生成并显示 Availability: In-Stock、STOCK DISPATCH: 5-7 working days、Custom projects: MOQ 219 yd、Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；详情图按内容顺序连续编号为 `x1`–`x12`，Application 拼图独立位于 `application/1`；PNG/JPG 原图保持无水印，主图首张 WebP 与 Application WebP 不加水印，其余主图和详情图 WebP 每张使用 3 个低透明度、逆时针 45 度倾斜域名水印。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013060106/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/dense-dot-foil-suede-look-fabric/`，并确认旧地址 301 到新地址
- 最后变更编号：CHG-20260923-001-h2013060106-product-url
- 待确认事项：自定义项目的具体生产交期需按项目询价确认

### REQ-PRODUCT-019：H2013120102 公开产品页聚焦蓝紫渐变镭射弹力面料
- 状态：active
- 当前规则：`blue-purple-gradient-laser-foil-spandex-fabric` 是 H2013120102 的公开详情页，H1 使用 `Blue-Purple Gradient Laser Foil 4-Way Stretch Fabric`，SEO 标题、Meta Description、标题下方描述、应用和规格均以 `面料独立站产品数据.xlsx` 中 H2013120102 为准。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：150cm、180g、MOQ 109 yd、1 standard color、4-way stretch、110T、120D*120D、Hot-stamping foil 和 98% Polyester 2% Spandex；库存状态、批量交期和测试合规未在来源数据确认时保持 to be confirmed。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；详情图按内容顺序连续编号为 `x1`–`x9`；Application 拼图独立位于 `application/1`；PNG/JPG 原图保持无水印，主图首张 WebP 与 Application WebP 不加水印，其余主图和详情图 WebP 每张使用 3 个低透明度、逆时针 45 度倾斜域名水印；`Specifications Table for B2B Buyers` 前不出现 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120102/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/blue-purple-gradient-laser-foil-spandex-fabric/`
- 最后变更编号：CHG-20260916-003-h2013120102-product-detail
- 待确认事项：库存状态、批量交期和测试合规需按项目确认

### REQ-PRODUCT-020：新增公开产品必须自带美国买家 SEO 与采购参数
- 状态：active
- 当前规则：新增公开产品写入 `src/data/allProducts.js` 时必须同时完成产品定位、SEO 标题、详情页 H1、Meta Description、采购参数和 FAQ 的优化，不允许先新增再二次补 SEO。产品必须符合当前 performance fabric 定位；不符合定位的 glitter leather、PU accessory、鞋材、手袋、工艺、玩具等产品不得加入当前主产品数据。新增产品的 `metaTitle` 应使用美国采购商搜索习惯，优先表达 `holographic`、`iridescent`、`foil`、`stretch`、`spandex`、`knit`、`fabric`、应用场景和 `Wholesale Supplier`；`title`/H1 以买家识别的材质、效果、弹性和用途开头，不以内部工艺词或 slug 开头。`hot-stamping` 可作为工艺说明或规格项出现，但不作为主要搜索词。`metaDesc` 必须包含应用场景、wholesale/supplier 采购意图、样品/定制/库存/MOQ 等已确认事实。规格和 FAQ 中的 Width 必须只使用 inch 写法，例如 `59"`；MOQ 可继续保留美国买家易读单位，例如 `109 yd`；未知字段必须写 `To be confirmed` 或省略，不能编造。
- 前置数据规则：新增或修改公开产品详情页必须先读取 `products-data/面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet，并以目标 `Product ID` 行作为标题、slug、SEO、应用、规格、MOQ、颜色和来源状态的第一数据源；图片只能补充素材展示，不得替代表格字段。`metaTitle` 优先使用表格中 `SEO Title`，`title`/H1 优先使用表格中 `English Product Name/H1`，`metaDesc` 必须以表格中 `Meta Description`、`Applications2`、规格、MOQ 和颜色政策为基础；未知字段才允许写 `To be confirmed`。
- 验收条件：新增产品在第一次提交时已经具备美国买家搜索习惯的 `metaTitle`、`metaDesc`、H1、采购型 FAQ、样品/定制/MOQ/库存信息和中美单位表达；`npm run validate:products` 与 `npm run build` 通过；公开目录和 sitemap 只包含当前定位产品。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260916-004-product-seo-add-rules
- 待确认事项：真实库存、MOQ、颜色数、测试合规和交期需以产品来源资料或业务确认信息为准

### REQ-PRODUCT-021：H2013090104 公开产品页聚焦彩虹圆点镭射针织面料
- 状态：active
- 当前规则：`rainbow-dot-laser-foil-knit-fabric` 是 H2013090104 的公开详情页，H1 使用 `Rainbow Dot Laser Foil Knit Fabric for Stage Costumes`，SEO 标题按美国采购商搜索习惯补充 `Wholesale Supplier`，标题下方描述、应用和规格以 `面料独立站产品数据.xlsx` 中 H2013090104 及业务确认信息为准。详情页不展示独立 `Product Description` 模块。产品规格只能使用已确认数据：59"、90 GSM、MOQ 219 yd、28 colors、bulk lead time 5-7 days、slight stretch、90S、hot-stamping foil、knit fabric 和 100% Polyester；测试合规未在来源数据确认时保持 to be confirmed。
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

### REQ-PRODUCT-023：产品列表 List 视图图片与内容不得重叠
- 状态：active
- 当前规则：产品列表切换为 List 视图时，图片列使用明确的固定范围，产品内容列允许收缩但不得被图片覆盖；产品标题、规格、应用和 CTA 必须从图片右侧完整开始。
- 验收条件：桌面 List 视图中图片只占左侧图片列，标题与正文不被遮挡；平板和移动端继续按响应式单列规则显示；Grid 视图不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查产品列表 Grid/List 视图
- 最后变更编号：CHG-20260918-001-products-list-image-overlap
- 待确认事项：无

### REQ-PRODUCT-024：产品卡片颜色数量与 MOQ 列对齐
- 状态：active
- 当前规则：产品卡片中的颜色数量与 MOQ 使用相同的两列规格网格，颜色数量从第二列左边界开始，不使用两端分布导致视觉偏移。
- 验收条件：Grid 和 List 视图中，颜色数量与 MOQ 左边界对齐；库存状态位于第一列；其他规格和 CTA 不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查产品卡片 Grid/List 视图
- 最后变更编号：CHG-20260918-002-products-color-moq-alignment
- 待确认事项：无

### REQ-PRODUCT-025：产品详情页不显示复制产品链接按钮
- 状态：active
- 当前规则：所有产品详情页统一不显示 `Copy Product Link` 按钮，也不加载该按钮专用的复制事件、成功提示或样式；采购询盘、样品申请和 WhatsApp 联系入口继续保留。
- 验收条件：当前及后续通过公共 `ProductDetail` 组件生成的产品详情页均不出现复制产品链接按钮；页面不残留 `copy-product-link`、`rfq-toast` 或 `copy_product_link` 逻辑；其他 CTA 行为不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run build`；手动检查任一产品详情页 CTA 区域
- 最后变更编号：CHG-20260919-002-remove-product-copy-link
- 待确认事项：无

### REQ-PRODUCT-026：下一批产品必须经过真实资料筛选和用户确认
- 状态：active
- 当前规则：2026-09-19 至 2026-10-19 的下一批产品准备工作必须先盘点工厂供货、寄样、报价、规格、MOQ、交期、应用和素材，建立 3–5 款候选产品的优先级表，并区分 `可立即上架`、`待补资料`、`暂不上架`。候选必须对照 Search Console 查询、美国采购场景和现有公开产品完成搜索价值、询盘价值与定位去重。未知字段不得从同类产品推断。两个尚未满足正式上架条件的产品继续等待。只有获得用户明确确认的产品才能进入 `allProducts.js`、图片处理和页面制作。
- 验收条件：候选表记录每款产品的真实来源、缺失字段、差异说明和状态；未获用户确认时不新增产品数据、图片目录或页面；经确认产品发布后逐项检查 Search Console 索引、GA4 `product_view` 和 RFQ 产品/SKU 归因。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`docs/agent/workflows/next-product-candidate-plan.md`；经确认后才涉及 `src/data/allProducts.js`、`public/images/products/**` 和产品静态路由
- 测试路径：计划阶段检查候选表与资料来源；实施阶段运行 `npm run validate:products`、`npm run build`，并执行单款发布后检查
- 最后变更编号：CHG-20260919-004-next-product-candidate-plan
- 待确认事项：候选产品的工厂供货、样品、报价、交期、完整素材和 Search Console 数据需由用户或业务资料确认

### REQ-PRODUCT-027：H2013060104 公开产品页聚焦双层褶皱烫金针织面料
- 状态：active
- 当前规则：`double-layer-pleated-foil-knit-fabric` 是 H2013060104 的公开详情页，H1 使用 `Double-Layer Pleated Foil Knit Fabric for Performance Skirts`，SEO 标题按美国采购商搜索习惯聚焦 `Pleated Foil Knit Fabric` 与 `Performance Skirt Supplier`。产品规格以 `面料独立站产品数据.xlsx` 中 H2013060104 和用户上传图片为准，只使用已确认数据：58"、200 GSM、MOQ 109 yd、18 colors、slight stretch、90S、hot-stamping foil、double-layer pleated knit fabric、95% Polyester 5% Spandex。密度、批量交期、库存状态和测试合规未确认时保持 `To be confirmed` 或报价确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013060104/main/a1.webp` 至 `a5.webp`；详情图读取 `x4.webp` 至 `x13.webp` 及 `x111.webp` 至 `x113.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013060104/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013060104/`、`products-data/original-images/images/products/H2013060104/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/double-layer-pleated-foil-knit-fabric/`
- 最后变更编号：CHG-20260920-002-h2013060104-product-detail
- 待确认事项：库存状态、批量交期、密度和测试合规需按项目确认；上线后需要复查 Search Console 索引、GA4 `product_view` 和 RFQ 产品归因

### REQ-PRODUCT-028：H2013060102 公开产品页聚焦彩虹条纹四面弹烫金面料
- 状态：active
- 当前规则：`rainbow-stripe-foil-4-way-stretch-fabric` 是 H2013060102 的公开详情页，H1 使用 `Rainbow Stripe Foil 4-Way Stretch Fabric for Stage Costumes`，SEO 标题聚焦 `Rainbow Stripe Foil 4-Way Stretch Fabric` 与 `Wholesale Supplier`。产品规格以 `面料独立站产品数据.xlsx` 中 H2013060102 和用户上传图片为准，只使用已确认数据：59"、180 GSM、MOQ 109 yd、2 colors、4-way stretch、80T、300D*10S、hot-stamping foil、full-print effect 和 95% Polyester 5% Spandex。库存、样品准备时间、批量交期、包装、贸易条款和测试合规未确认时保持 `To be confirmed` 或项目报价确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013060102/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x7.webp`；应用拼图独立读取 `application/1.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013060102/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；应用图不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013060102/`、`products-data/original-images/images/products/H2013060102/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/rainbow-stripe-foil-4-way-stretch-fabric/`
- 最后变更编号：CHG-20260921-001-h2013060102-product-detail
- 待确认事项：库存状态、样品准备时间、批量交期、包装、贸易条款和测试合规需按项目确认；上线后需要复查 Search Console 索引、GA4 `product_view` 和 RFQ 产品归因

### REQ-PRODUCT-029：产品页统一展示生产交期
- 状态：active
- 当前规则：公开产品详情页的首屏交期卡、B2B Specifications 和自动 FAQ 统一显示生产交期：`LEAD TIME`、`7-15 days`、`production`。不再在这些位置使用 `READY STOCK DISPATCH`、`3-5 working days` 或 `Working Days After Confirmation` 作为批量交期展示。自定义样品准备时间显示 `3-5 days`；库存状态、产品列表库存标签、包装和贸易条款继续按现有规则展示。
- 验收条件：所有公开产品详情页首屏交期卡均显示 `LEAD TIME`、`7-15 days`、`production`；B2B Specifications 和自动 FAQ 使用同一交期；产品详情页不再输出旧的三段批量交期文案；自定义样品准备时间显示 `3-5 days`；不改变库存状态、产品 URL、MOQ 或贸易条款。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/components/ProductDetail.astro`、`src/data/allProducts.js`、`src/pages/products.astro`
- 测试路径：`npm run validate:products`、`npm run build`，抽查待确认库存和现货产品详情页及 `/products/`
- 最后变更编号：CHG-20261011-028-sample-preparation-days
- 待确认事项：具体订单的样品运费、批量生产排期和贸易条款仍按项目报价确认；产品原始数据中的历史 Bulk Lead time 字段保留，详情页采购展示以统一组件规则为准

### REQ-PRODUCT-030：H2013090101 公开产品页聚焦全息蛇皮纹弹力面料
- 状态：active
- 当前规则：`holographic-snakeskin-stretch-fabric` 是 H2013090101 的公开详情页，H1 使用 `Laser Foil Snakeskin Stretch Fabric`，SEO 标题聚焦 `Holographic Snakeskin Stretch Fabric` 与 `Swimwear & Dancewear`。产品规格以 `面料独立站产品数据.xlsx` 中 H2013090101 和用户提供图片为准，只使用已确认数据：58"、160 GSM、MOQ 109 yd、70 colors、slight stretch、90S 和 92% Polyester 8% Spandex。密度、后整理、花型结构、库存状态、样品准备时间、批量交期和测试合规未确认时保持 `To be confirmed` 或项目报价确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013090101/main/1.webp`、`2.webp`、`a1.webp`、`a2.webp`、`a3.webp`；详情图读取 `1.webp` 至 `8.webp`；PNG/JPG 原图归档到 `products-data/original-images/images/products/H2013090101/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个分散、不重叠、低透明度、逆时针 45 度倾斜域名水印；所有公开 WebP 单张低于 500 KB；没有独立 application 素材时不生成虚构应用图；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013090101/`、`products-data/original-images/images/products/H2013090101/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/holographic-snakeskin-stretch-fabric/`
- 最后变更编号：CHG-20260923-005-h2013090101-image-compression
- 待确认事项：库存状态、样品准备时间、批量交期、密度、后整理、花型结构、测试合规和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-031：H2013120101 公开产品页聚焦彩虹幻彩金属箔四面弹面料
- 状态：active
- 当前规则：`rainbow-iridescent-laser-foil-nylon-spandex-fabric` 是 H2013120101 的公开详情页，标题及相关命名以用户 2026-10-12 的纠正为准，其余产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2013120101 行为准。H1 使用 `Rainbow Iridescent Foil 4-Way Stretch Spandex Fabric`，SEO 数据标题使用 `Rainbow Iridescent Foil 4-Way Stretch Spandex`，站点自动追加品牌后缀以保持总长度不超过 60 字符，Meta Description、正文、图片 alt、标签、FAQ 和 CTA 同步去除错误的 Laser / Nylon 命名，底材使用已确认的 Polyester-Spandex；应用和规格以表格为准。保留现有 slug 和图片路径以兼容已收录链接。产品规格只能使用已确认数据：59"、180 GSM、MOQ 109 yd、15 colors、4-way stretch、110T、75D*70D、hot-stamping foil、hot-stamping foil construction 和 92% Polyester 8% Spandex。库存、测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013120101/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x12.webp`；应用拼图独立读取 `application/1.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013120101/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；应用图不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120101/`、`products-data/original-images/images/products/H2013120101/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/rainbow-iridescent-laser-foil-nylon-spandex-fabric/`
- 最后变更编号：CHG-20261012-001-h2013120101-title-correction
- 待确认事项：库存状态、测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-032：H2013120103 公开产品页聚焦渐变彩虹点箔针织提花面料
- 状态：active
- 当前规则：`gradient-rainbow-dot-foil-knit-fabric` 是 H2013120103 的公开详情页，产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2013120103 行为准。H1 使用 `Gradient Rainbow Dot Foil Knit Fabric for Stage Costumes`，SEO 标题使用 `Gradient Rainbow Dot Foil Knit Fabric for Stage Costumes | Nixia Fabric`，Meta Description、应用和规格均以表格为准。产品规格只能使用已确认数据：59"、90 GSM、MOQ 219 yd、15 colors、slight stretch、30D、hot-stamping foil、knit jacquard 和 92% Polyester 8% Spandex。密度、库存、测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013120103/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x11.webp`；应用拼图独立读取 `application/1.webp` 和 `application/2.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013120103/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；应用图不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120103/`、`products-data/original-images/images/products/H2013120103/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/gradient-rainbow-dot-foil-knit-fabric/`
- 最后变更编号：CHG-20260929-002-h2013120103-product-detail
- 待确认事项：密度、库存状态、测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-033：H2013120104 公开产品页聚焦彩虹指纹点箔冰丝针织面料
- 状态：active
- 当前规则：`rainbow-fingerprint-dot-foil-ice-silk-fabric` 是 H2013120104 的公开详情页，产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2013120104 行为准。H1 使用 `Rainbow Fingerprint Dot Foil Stretch Knit Fabric`，SEO 标题使用 `Rainbow Fingerprint Dot Foil Ice Silk Stretch Knit Fabric | Nixia Fabric`，Meta Description、应用和已确认特点均以表格为准。产品规格只能使用已确认数据：57"、150 GSM、MOQ 219 yd、4-way stretch、30s、hot-stamping foil、hot-stamping foil construction 和 98% Polyester 2% Spandex。颜色数量、密度、库存、测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013120104/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x14.webp`；应用拼图独立读取 `application/1.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013120104/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；应用图不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120104/`、`products-data/original-images/images/products/H2013120104/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/rainbow-fingerprint-dot-foil-ice-silk-fabric/`
- 最后变更编号：CHG-20260930-003-h2013120104-parameter-refresh
- 待确认事项：颜色数量、密度、库存状态、测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-034：H2013120105 公开产品页聚焦全息鱼鳞牛奶丝四面弹面料
- 状态：active
- 当前规则：`holographic-mermaid-scale-milk-silk-stretch-fabric` 是 H2013120105 的公开详情页，产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2013120105 行为准。H1 使用 `Holographic Mermaid Scale Milk Silk 4-Way Stretch Fabric`，SEO 标题使用 `Holographic Mermaid Scale Milk Silk 4-Way Stretch Fabric for Stage Costumes | Nixia Fabric`，Meta Description、应用和规格均以表格为准。产品规格只能使用已确认数据：59"、180 GSM、MOQ 109 yd、11 colors、high stretch / 4-way stretch、86T、hot-stamping foil mermaid-scale pattern 和 92% Polyester 8% Spandex。纱支、库存、测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013120105/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x9.webp`；没有独立 application 素材时不生成虚构应用图；PNG 原图归档到 `products-data/original-images/images/products/H2013120105/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120105/`、`products-data/original-images/images/products/H2013120105/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/holographic-mermaid-scale-milk-silk-stretch-fabric/`
- 最后变更编号：CHG-20260929-004-h2013120105-product-detail
- 待确认事项：纱支、库存状态、测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-035：H2013120107 产品页统一使用海外采购商易懂定位
- 状态：active
- 当前规则：`iridescent-laser-hot-stamping-stretch-ice-silk` 保持现有 URL，但产品 H1 统一为 `Iridescent Laser Foil 4-Way Stretch Fabric`，不再把 `Ice-Silk` 或 `Hot-Stamping` 放在核心产品名称中。页面明确展示 `95% Polyester 5% Spandex` 和 `4-Way Stretch`，产品列表卡片 Material 只展示一份数据源成分文本 `95% Polyester 5% Spandex`；该产品 MOQ 显示为 `109 yd`，Lead Time 显示为 `7-15 days` / `production`；应用聚焦 `Stage Costumes`、`Performance Wear`、`Dancewear`、`Party Wear` 和 `Show Costumes`。产品页及首页对应产品卡片不得使用 Glitter、Shoes & Bags、Footwear 或 Synthetic Leather 等旧定位内容。
- 前置数据与确认：产品对应 `H2013120107`；`Independent Site Product Data` sheet 提供产品英文名，95% Polyester 5% Spandex、4-way stretch 及五类应用由用户本次确认后写入公开字段。
- 验收条件：详情页 H1、Meta、描述、规格、FAQ、应用和首页产品卡片均使用新定位；产品列表卡片 Material 不重复拼接成分文本，并显示为 `95% Polyester 5% Spandex`；产品列表和详情页 MOQ 只显示 `109 yd`，不追加 `minimum` 或其他说明；详情页 Lead Time 显示为 `7-15 days` / `production`；详情页核心文案不出现旧的 Ice-Silk 核心命名或退出行业应用；询盘上下文使用 `H2013120107`。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/pages/index.astro`、`src/pages/products.astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，检查 `/products/iridescent-laser-hot-stamping-stretch-ice-silk/`
- 最后变更编号：CHG-20261011-023-products-material-source-format
- 待确认事项：宽度、克重、颜色、库存和测试合规继续按现有业务资料与报价确认

### REQ-PRODUCT-036：H2015030102 公开产品页聚焦金色彩虹金属箔尼龙氨纶四面弹面料
- 状态：active
- 当前规则：`gold-rainbow-gradient-metallic-foil-4-way-stretch-fabric` 是 H2015030102 的公开详情页，产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2015030102 行为准。H1 使用 `Gold Rainbow Gradient Metallic Foil 4-Way Stretch Fabric`，SEO 标题使用 `Glitter Holographic Foil Nylon Spandex Swimsuit Bikini Fabric | Nixia Fabric`，应用和规格均以表格为准。产品规格只能使用已确认数据：59"、200 GSM、MOQ 219 yd、41 stock colors or customized colors、4-way stretch、40D*40D、foil finish、foil construction 和 80% Nylon 20% Spandex。测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA、FAQ 和 Color Options；主图读取 `public/images/products/H2015030102/main/gold-rainbow-gradient-metallic-foil-4-way-stretch-fabric-main-1.webp` 至 `main-4.webp`；色卡读取 17 张 WebP 色卡作为 SKU Color Gallery；JPG 原图归档到 `products-data/original-images/images/products/H2015030102/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；色卡 WebP 不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2015030102/`、`products-data/original-images/images/products/H2015030102/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/gold-rainbow-gradient-metallic-foil-4-way-stretch-fabric/`
- 最后变更编号：CHG-20261005-002-h2015030102-product-detail
- 待确认事项：测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-037：H2015030101 公开产品页聚焦幻彩金属箔尼龙氨纶四面弹面料
- 状态：active
- 当前规则：`iridescent-mystic-metallic-foil-nylon-spandex-fabric` 是 H2015030101 的公开详情页，产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2015030101 行为准。H1 使用 `Iridescent Mystic Metallic Foil Nylon Spandex Fabric`，SEO 标题使用 `Shiny Metallic Foil 4 Way Stretch Nylon Spandex Fabric | Nixia Fabric`，应用和规格均以表格为准。产品规格只能使用已确认数据：59"、200 GSM、MOQ 219 yd、18 colors or customization、4-way stretch、40D*40D、foil finish、foil construction 和 80% Nylon 20% Spandex。库存状态、测试合规和贸易条款未在来源数据确认时保持 `Made to Order`、`To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA、FAQ 和 Color Options；主图读取 `public/images/products/H2015030101/main/iridescent-mystic-metallic-foil-nylon-spandex-fabric-main-1.webp` 至 `main-5.webp`；色卡读取 18 张 WebP 色卡作为 SKU Color Gallery；JPG 原图归档到 `products-data/original-images/images/products/H2015030101/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；色卡 WebP 不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2015030101/`、`products-data/original-images/images/products/H2015030101/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/iridescent-mystic-metallic-foil-nylon-spandex-fabric/`
- 最后变更编号：CHG-20261006-001-h2015030103-product-detail
- 待确认事项：库存状态、测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

### REQ-PRODUCT-005：重点产品 H2013090102 聚焦 Iridescent Spandex 搜索意图
- 状态：active
- 当前规则：`plain-iridescent-laser-spandex-4-way-stretch` 详情页产品标题为 `Iridescent Spandex Laser Foil 4-Way Stretch Fabric`，SEO 标题为 `Iridescent Spandex Fabric | 4-Way Stretch Foil Supplier`，用于承接美国 GSC 中接近当前方向的 `iridescent lycra` / `iridescent spandex fabric` 搜索意图。SKU 保持 `H2013090102`，图片统一读取 `public/images/products/H2013090102/`；详情页轮播图右上角的 `WHOLESALE` 标签需使用深蓝底、白色文字，并保持与站点 logo 图标一致的品牌感。
- 验收条件：该产品详情页 H1 显示 `Iridescent Spandex Laser Foil 4-Way Stretch Fabric`；`Product Name / SKU` 显示 `Iridescent Spandex Laser Foil 4-Way Stretch Fabric / H2013090102`；meta title 包含 `Iridescent Spandex Fabric`；图片从 `H2013090102` 目录读取；轮播角标显示为深蓝色背景与白字，视觉上与 header logo 的深蓝白字风格一致。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013090102/`
- 测试路径：`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20260920-001-us-search-baseline-seo-focus
- 待确认事项：无

### REQ-PRODUCT-006：Rainbow Gradient 产品标题与图片素材需同步更新
- 状态：retired
- 当前规则：该规则仅保留历史追溯；`rainbow-gradient-glitter-synthetic-leather` 已退出公开产品集合，不再生成列表页或详情页入口。
- 验收条件：该历史产品不出现在公开产品集合和构建路由中，旧地址返回404。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/pages/products/[slug].astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260923-006-retired-products-404
- 待确认事项：无

### REQ-PRODUCT-007：Sparkle 产品 detail 与 application 图片需同步更新
- 状态：retired
- 当前规则：该规则仅保留历史追溯；`sparkle-glitter-surface-solid-leather-fabric` 已退出公开产品集合，不再生成详情页。
- 验收条件：该历史产品不出现在公开产品集合和构建路由中，旧地址返回404。
- 影响模块：`product-catalog`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260923-006-retired-products-404
- 待确认事项：无

### REQ-PRODUCT-008：Sparkle 图片目录需统一连续编号并补齐 WebP
- 状态：retired
- 当前规则：该规则仅保留历史追溯；`sparkle-glitter-surface-solid-leather-fabric` 已退出公开产品集合，其历史图片目录不再参与公开页面构建。
- 验收条件：该历史产品不出现在公开产品集合和构建路由中，旧地址返回404。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`、`npm run validate:products`
- 最后变更编号：CHG-20260923-006-retired-products-404
- 待确认事项：无

### REQ-PRODUCT-038：第一批公开页面 SEO 元数据长度与主题校验
- 状态：active
- 当前规则：公开产品、产品列表、应用、博客和工厂页面的生成 title 控制在 60 个字符以内，meta description 控制在 160 个字符以内。产品 SEO title 必须与页面 H1 和实际产品主题一致；H2015030102 使用 `Gold Rainbow Metallic Foil Stretch Fabric | Nixia Fabric`，H2015030101 使用 `Iridescent Mystic Metallic Foil Fabric | Nixia Fabric`。
- 验收条件：生成 sitemap 中所有可索引页面通过 title/description 长度扫描；两个目标产品不存在旧产品主题 title；产品正文、H1、图片和样式不因元数据修复而改变。
- 影响模块：`product-catalog`、`site-shell`、`blog-knowledge`
- 代码路径：`src/data/allProducts.js`、`src/data/blogArticles.js`、`src/pages/products.astro`、`src/pages/applications/[slug].astro`、`src/pages/applications/index.astro`、`src/pages/factory.astro`
- 测试路径：`npm run build`、`npm run validate:products`、生成 sitemap 页面元数据扫描
- 最后变更编号：CHG-20261006-002-seo-metadata-first-batch
- 待确认事项：部署后需在 Google Search Console 观察摘要和查询点击率变化

### REQ-PRODUCT-039：产品页与应用页建立双向主题集群并提供差异化采购决策
- 状态：active
- 当前规则：应用页通过推荐材料链接到对应产品详情页；产品详情页必须根据产品用途回链到相关应用指南，形成产品与应用之间的双向主题集群。每个公开产品页同时提供至少两条针对该产品材质、表面效果、结构、用途、颜色、MOQ 或样品审批条件的独立采购决策内容，不使用所有相近产品通用的泛化卖点替代。
- 验收条件：18 个公开产品页均包含应用指南回链和采购决策区；`/applications/swimwear-fabric-supplier/` 包含 H2015030103；应用集群链接不指向旧产品或不存在页面；采购决策内容与当前产品事实一致，不新增未经确认的性能承诺。
- 影响模块：`product-catalog`、`site-shell`、`content-data`
- 代码路径：`src/components/ProductDetail.astro`、`src/data/applicationClusters.js`、`src/data/productDecisionGuides.js`、`src/pages/applications/[slug].astro`
- 测试路径：`npm run build`、`npm run validate:products`，检查所有产品页和应用页的互链及生成内容
- 最后变更编号：CHG-20261006-003-topic-cluster-buyer-decisions
- 待确认事项：部署后观察应用页与产品页的自然搜索入口和页面路径表现

### REQ-PRODUCT-040：移动端产品目录使用应用标签过滤
- 状态：active
- 当前规则：`/products/` 在 `max-width: 768px` 下隐藏关键词搜索、Finish、Stretch、Application、Stock、Sort 控件以及 Grid/List 视图切换；移动端直接显示四个应用标签 `Dancewear`、`Stage Costumes`、`Performance Apparel`、`Swimwear`，点击标签过滤产品卡片。移动端产品卡固定使用网格卡片布局；桌面端现有搜索、筛选、排序和 Grid/List 能力保持不变。
- 验收条件：375px、390px 和 768px 视口下不显示搜索框、下拉筛选或 Grid/List 切换；四个应用标签可点击并更新产品数量和卡片结果；再次点击当前标签可恢复全部产品；产品卡保持网格展示。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查 `/products/` 在 375px、390px、768px 和桌面视口下的筛选与卡片布局
- 最后变更编号：CHG-20261011-014-mobile-products-application-tabs
- 待确认事项：Performance Apparel 标签覆盖产品数据中的 `Performance Wear`、`Performance Outfits`、`Performance Apparel` 和 `Performance Dress` 应用名称。

### REQ-PRODUCT-041：公开产品 Weight 单位统一使用 GSM
- 状态：active
- 当前规则：公开产品规格、产品列表卡片、产品详情页、产品相关采购决策文案和博客中的产品参考规格，Weight 单位统一展示为 `GSM`，不得使用旧的每平方米克重符号写法。
- 验收条件：主产品数据、旧版产品摘要数据、产品决策文案和公开博客产品参考规格中不再出现旧的每平方米克重符号写法；列表页和详情页 Weight 字段显示 `GSM`。
- 影响模块：`product-catalog`、`content-data`、`blog-knowledge`
- 代码路径：`src/data/allProducts.js`、`src/data/products.json`、`src/data/productDecisionGuides.js`、`src/data/blogArticles.js`
- 测试路径：扫描公开数据、页面、组件和当前需求文档中的旧 Weight 单位写法；`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20261011-024-product-weight-gsm-unit
- 待确认事项：历史备份文件和站外 outreach 计划文档不属于当前公开页面展示链路，暂不要求同步。

### REQ-PRODUCT-042：公开产品 MOQ 统一使用 yd 展示
- 状态：active
- 当前规则：公开产品的 MOQ 对外只使用 `yd` 缩写展示，例如 `109 yd`、`219 yd`；不再在产品列表、产品详情页、首页产品精选、规格表、FAQ、产品摘要、相关产品卡、公开博客产品参考或旧版产品摘要数据中展示 `100 m / 109 yd`、`200 m / 219 yd` 等双单位 MOQ，也不使用长写法。产品宽幅、卷长、交期条件或非 MOQ 数量说明不属于本规则范围。
- 验收条件：公开产品数据、旧版产品摘要数据、首页产品精选、产品目录页、产品详情页和公开博客产品参考中不再出现 MOQ 双单位写法；纯数字 MOQ 会在页面渲染时按米数换算为 `yd` 展示；长写法统一为 `109 yd` 这类 `yd` 格式；颜色或设计维度的限定可保留为 `per colorway`、`per design`。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/data/products.json`、`src/data/productDecisionGuides.js`、`src/data/blogArticles.js`、`src/pages/index.astro`、`src/pages/products.astro`、`src/components/ProductDetail.astro`、`src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`
- 测试路径：定向文本扫描、`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20261011-031-product-moq-yd-abbreviation
- 待确认事项：无

### REQ-PRODUCT-043：公开产品 Width 只使用 inch 写法
- 状态：active
- 当前规则：公开产品规格、产品列表卡片、产品详情页、RFQ 产品上下文、旧版产品摘要数据和公开博客中的产品参考规格，Width 统一只展示 inch 写法，例如 `59"`、`58"`、`57"`、`55"`；不得再展示厘米与英寸并列的宽度写法。
- 验收条件：主产品数据、旧版产品摘要数据、产品详情页和公开博客产品参考规格中不再出现厘米与英寸并列的 Width；列表页、详情页和 RFQ 产品上下文中的 Width 显示为 `59"` 等 inch-only 格式。
- 影响模块：`product-catalog`、`content-data`、`blog-knowledge`
- 代码路径：`src/data/allProducts.js`、`src/data/products.json`、`src/data/blogArticles.js`、`docs/agent/modules/product-catalog.md`
- 测试路径：扫描公开数据、页面、组件和当前需求文档中的旧 Width 单位写法；`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20261011-027-product-width-inch-only
- 待确认事项：历史备份文件和站外 outreach 计划文档不属于当前公开页面展示链路，暂不要求同步。

### REQ-PRODUCT-044：B2B Specifications Table 仅保留 Lead Time
- 状态：active
- 当前规则：所有公开产品详情页的 `Specifications Table for B2B Buyers` 只保留一行 `Lead Time`，删除重复的全大写 `LEAD TIME` 行。页面其他位置的交期卡片、FAQ 和采购说明继续按现有规则展示。
- 验收条件：所有产品详情页的 B2B Specifications Table 中保留一行 `Lead Time`，不存在重复的 `LEAD TIME` 行；详情页其他交期展示不受影响。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，检查生成的产品详情页 HTML
- 最后变更编号：CHG-20261011-030-keep-b2b-lead-time
- 待确认事项：无

### REQ-PRODUCT-045：公开成分比例不使用斜杠分隔
- 状态：active
- 当前规则：公开页面中的成分比例统一不使用 `/` 分隔，写作 `95% Polyester 5% Spandex`、`98% polyester 2% spandex`、`80% Nylon 20% Spandex`。该规则适用于产品数据、首页产品卡片、产品详情页、产品目录页和公开博客正文中的成分描述。
- 验收条件：`src` 中不再出现带斜杠的百分比成分写法；成分比例真实值不变；历史变更记录可保留旧引用。
- 影响模块：`product-catalog`、`content-data`、`blog-knowledge`、`site-shell`
- 代码路径：`src/data/allProducts.js`、`src/pages/index.astro`、`src/data/blogArticles.js`
- 测试路径：定向文本扫描、`npm run build`
- 最后变更编号：CHG-20261011-032-composition-format-no-slash
- 待确认事项：无

### REQ-PRODUCT-046：B2B 表格 Custom projects MOQ 统一文案
- 状态：active
- 当前规则：所有公开产品详情页 `Specifications Table for B2B Buyers` 的 MOQ 行，`Custom projects` 部分统一显示为 `MOQ to be confirmed based on customization requirements.`，不再使用具体产品自定义 MOQ 数值。
- 验收条件：所有公开产品详情页 B2B 表格的 MOQ 行均包含统一的 `Custom projects: MOQ to be confirmed based on customization requirements.` 文案；标准产品 MOQ 数值保持不变。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，检查生成的产品详情页 HTML
- 最后变更编号：CHG-20261011-033-unify-custom-project-moq-copy
- 待确认事项：无

### REQ-PRODUCT-047：移动端产品卡片库存提示样式统一
- 状态：active
- 当前规则：产品列表页移动端产品卡片中的 `Free swatch card available` 提示，字体、字号、行高和字重与同一卡片中的 `In-Stock` 文本保持一致；桌面端和产品详情页不受影响。
- 验收条件：移动端产品卡片中库存提示与 `In-Stock` 使用相同的文字尺寸和字重；库存提示颜色及其他卡片布局保持不变。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查 `/products/` 移动端卡片
- 最后变更编号：CHG-20261011-034-mobile-swatch-note-style
- 待确认事项：无

### REQ-PRODUCT-048：移动端产品页 Hero 优点两列展示
- 状态：active
- 当前规则：产品列表页移动端 Hero 下方的四个采购优点以两列两行展示；桌面端继续使用原有横向排列。
- 验收条件：移动端产品页 Hero 中四个优点不再逐行排列，而是同一行展示两个；四项文案完整可见，桌面端布局不变。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；手动检查 `/products/` 移动端布局
- 最后变更编号：CHG-20261011-035-mobile-products-hero-facts-grid
- 待确认事项：无

### REQ-PRODUCT-049：广告应用落地页突出采购意图并收敛推荐产品
- 状态：active
- 当前规则：`dancewear-fabric-supplier` 应用落地页首屏明确覆盖 foil、iridescent、holographic stretch fabrics 及 stage costumes 等广告相关采购意图，隐藏重复菜单作用的可视 Breadcrumb，首屏之后优先展示适合舞蹈服饰的面料产品，展示样品/批量采购/custom 选项，并提供直接的 `Request Samples & Quote` 入口；移动端推荐产品首批最多展示 8 个，避免将主要询盘入口推离首屏路径。
- 验收条件：页面首屏可见采购范围、至少三个采购事实标签和询盘 CTA；首屏之后可直接看到至少 4 个舞蹈服饰面料产品及其详情入口；CTA 可打开现有 RFQ；推荐产品区在该页面最多展示 8 个；其他应用页现有内容结构保持可用。
- 影响模块：`product-catalog`、`site-shell`
- 代码路径：`src/pages/applications/[slug].astro`
- 测试路径：`npm run build`、`git diff --check`；移动端检查首屏 CTA、采购标签和推荐产品数量。
- 最后变更编号：CHG-20261013-001-dancewear-landing-conversion
- 待确认事项：广告账户中的关键词、地区和预算仍需在 Google Ads 后台单独调整。
