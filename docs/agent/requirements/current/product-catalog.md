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

### REQ-PRODUCT-022：产品列表 B2B 采购比较布局
- 状态：active
- 当前规则：目录首屏按烫金及金属光泽产品特性定位。全端仅保留同一行的搜索、面料效果快捷标签和 Clear filters；移除 Finish/Stretch/Application/Stock/Sort 和 More filters，无 Grid/List 切换。产品卡片图片桌面 16:10、移动 16:9；宽屏≥1280px每行5张、969–1279px每行3张、769–968px每行2张、≤768px每行1张；标题宽屏13px、其他14px，单行省略并提供完整title提示；标题去除 for 后用途尾缀，省略重复简介，直接显示真实幅宽、克重、Composition / Base、Stretch、MOQ、库存、颜色及用途。材料文字可换行；弹力优先读取 specTable 的 Stretch/Elasticity，缺失时显示 Check sample。询盘按钮及详情链接顺序和现有 RFQ 上下文不变。
- 验收条件：18 个产品默认全部可见；搜索、特性快捷入口及清除可组合操作，默认推荐顺序不变；375/390/768/1024/1440px 无横向溢出，材料与弹力可读；quote/sample 意图及产品上下文保留；既有响应式图片和预加载保留。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`、`git diff --check`、本地浏览器响应式/筛选/RFQ 检查。
- 最后变更编号：CHG-20261024-004-catalog-five-columns
- 待确认事项：尚未部署；线上广告效果需发布后观察。

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
- 当前规则：`rainbow-iridescent-laser-foil-nylon-spandex-fabric` 是 H2013120101 的公开详情页，标题及相关命名以用户 2026-10-12 的纠正为准，其余产品事实必须以 `面料独立站产品数据.xlsx` 的 `Independent Site Product Data` sheet 中 H2013120101 行为准。H1 使用 `Rainbow Iridescent Foil 4-Way Stretch Spandex Fabric`，SEO 数据标题使用 `Rainbow Iridescent Foil 4-Way Stretch Spandex`，站点自动追加品牌后缀以保持总长度不超过 60 字符，Meta Description、正文、图片 alt、标签、FAQ 和 CTA 同步去除错误的 Laser / Nylon 命名，底材使用已确认的 Polyester-Spandex；应用和规格以表格为准。保留现有 slug 和图片路径以兼容已收录链接。产品规格只能使用已确认数据：59"、180 GSM、MOQ 50m Stock / 200m Custom、15 colors、4-way stretch、110T、75D*70D、hot-stamping foil、hot-stamping foil construction 和 92% Polyester 8% Spandex。库存以用户 2026-10-21 确认为有现货（inStock: true，In-Stock），采用免费现货样品政策；不将 15 色全部视为已确认库存色。测试合规和贸易条款未在来源数据确认时保持 `To be confirmed` 或项目确认表述。
- 验收条件：详情页可生成并显示 Key Features、Recommended Applications、Why Choose、Ready Stock & Custom Development、Sample CTA 和 FAQ；主图读取 `public/images/products/H2013120101/main/a1.webp` 至 `a5.webp`；详情图连续读取 `x1.webp` 至 `x12.webp`；应用拼图独立读取 `application/1.webp`；PNG 原图归档到 `products-data/original-images/images/products/H2013120101/`，线上目录只保留 WebP 展示图；主图首张 WebP 不加水印，其余主图和详情图 WebP 添加 3 个低透明度、逆时针 45 度倾斜域名水印；应用图不加水印；`Specifications Table for B2B Buyers` 前不出现独立 `Product Description` 模块。
- 影响模块：`product-catalog`、`content-data`、`inquiry-forms`
- 代码路径：`src/data/allProducts.js`、`src/components/ProductDetail.astro`、`public/images/products/H2013120101/`、`products-data/original-images/images/products/H2013120101/`
- 测试路径：`npm run validate:products`、`npm run build`，手动检查 `/products/rainbow-iridescent-laser-foil-nylon-spandex-fabric/`
- 最后变更编号：CHG-20261021-008-h2013120101-in-stock
- 待确认事项：测试合规、贸易条款和上线后 Search Console/GA4/RFQ 归因需按项目确认

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
- 验收条件：公开产品页的应用集群链接不指向已移除或不存在的应用页；采购决策内容与当前产品事实一致，不新增未经确认的性能承诺。
- 影响模块：`product-catalog`、`site-shell`、`content-data`
- 代码路径：`src/components/ProductDetail.astro`、`src/data/applicationClusters.js`、`src/data/productDecisionGuides.js`、`src/pages/applications/[slug].astro`
- 测试路径：`npm run build`、`npm run validate:products`，检查所有产品页和应用页的互链及生成内容
- 最后变更编号：CHG-20261006-003-topic-cluster-buyer-decisions
- 待确认事项：部署后观察应用页与产品页的自然搜索入口和页面路径表现

### REQ-PRODUCT-040：产品目录全端特性筛选
- 状态：active
- 当前规则：全端默认展示全部 18 个产品，移除移动 Dancewear 默认筛选和应用标签；增加 All Fabrics/Foil/Metallic/Holographic/Iridescent 快捷入口，基于现有标题、简介、底材和标签的特性文字匹配，不编造分类或性能。搜索与效果快捷标签全端同一行展示，标签超宽时仅标签区域横向滚动，不再展示下拉筛选及排序；搜索和快捷标签可组合；Clear filters 重置两者，始终保持默认推荐排序，跨断点不重设条件。
- 验收条件：18 个产品默认全部可见；搜索、特性快捷入口及清除可组合操作，默认推荐顺序不变；375/390/768/1024/1440px 无横向溢出，材料与弹力可读；quote/sample 意图及产品上下文保留；既有响应式图片和预加载保留。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`、`git diff --check`、本地浏览器响应式/筛选/RFQ 检查。
- 最后变更编号：CHG-20261024-004-catalog-five-columns
- 待确认事项：尚未部署；线上广告效果需发布后观察。

### REQ-PRODUCT-041：公开产品 Weight 单位统一使用 GSM
- 状态：active
- 当前规则：公开产品规格、产品列表卡片、产品详情页、产品相关采购决策文案和博客中的产品参考规格，Weight 单位统一展示为 `GSM`，不得使用旧的每平方米克重符号写法。
- 验收条件：主产品数据、旧版产品摘要数据、产品决策文案和公开博客产品参考规格中不再出现旧的每平方米克重符号写法；列表页和详情页 Weight 字段显示 `GSM`。
- 影响模块：`product-catalog`、`content-data`、`blog-knowledge`
- 代码路径：`src/data/allProducts.js`、`src/data/products.json`、`src/data/productDecisionGuides.js`、`src/data/blogArticles.js`
- 测试路径：扫描公开数据、页面、组件和当前需求文档中的旧 Weight 单位写法；`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20261011-024-product-weight-gsm-unit
- 待确认事项：历史备份文件和站外 outreach 计划文档不属于当前公开页面展示链路，暂不要求同步。

### REQ-PRODUCT-042：全站 MOQ 按库存状态使用米数
- 状态：active
- 当前规则：以现有 inStock 状态为准：有现货产品起订量为 `50m`，详情页参数、描述、FAQ 与 SEO 中统一为 `50m Stock / 200m Custom`；无现货产品统一为 `200m`。首页、列表和相关产品卡显示现货 `50m`、无现货 `200m`。博客产品引用、旧版摘要与询盘示例同步；不改变库存状态，不再自动换算为 yd。最新用户指令覆盖原始产品表的旧 MOQ，原始表不修改。
- 验收条件：18 款产品中 9 款现货、9 款无现货；参数、描述、B2B 表、FAQ、元数据及推荐内容无旧 MOQ 冲突；非 MOQ 的宽度、卷长和数量换算不受影响。
- 影响模块：`product-catalog`、`content-data`
- 代码路径：`src/data/allProducts.js`、`src/data/products.json`、`src/data/productDecisionGuides.js`、`src/data/blogArticles.js`、`src/pages/index.astro`、`src/pages/products.astro`、`src/components/ProductDetail.astro`、`src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`
- 测试路径：定向文本扫描、`npm run validate:products`、`npm run build`
- 最后变更编号：CHG-20261021-007-sitewide-stock-custom-moq
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

### REQ-PRODUCT-046：B2B MOQ 与库存规则一致
- 状态：active
- 当前规则：所有产品详情页 B2B Specifications Table 的 MOQ 行与产品规格一致：有现货 `50m Stock / 200m Custom`，无现货 `200m`；不再用定制 MOQ 待确认文案覆盖已确认门槛。
- 验收条件：18 个详情页的 B2B MOQ 与产品参数一致。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`
- 测试路径：`npm run validate:products`、`npm run build`，检查生成的产品详情页 HTML
- 最后变更编号：CHG-20261021-007-sitewide-stock-custom-moq
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

### REQ-PRODUCT-050：Full-Print 产品采购详情样板
- 状态：active
- 当前规则：仅 `full-print-hot-stamping-spandex-milk-silk` 使用精简采购详情；产品显示标题为 `Metallic Foil 4-Way Stretch Fabric for Swimwear`，保留原slug；主图库仅保留图1至图5，已删除的图6、图7不再配置；详情图保持原配置。首屏介绍按面料与工艺、160 GSM及59英寸规格、四面弹与光泽特点、客户应用、22种现货色与定制颜色的顺序描述；规格摘要不显示SKU。首屏展示用途、幅宽、克重、颜色、MOQ与生产交期，分别提供带产品上下文的 quote/sample RFQ 入口。该产品首屏 MOQ 卡片仅显示 `MOQ` 和 `50m Stock / 200m Custom`，不显示 `per design` 或 `Minimum`。该产品交期卡片仅展示 `LEAD TIME` 和 `7-15 days`，不显示 `production`。下方以原创 SVG 线条图标展示四面弹、烫金光泽、柔软手感、定制颜色，以及泳衣、泳帽、舞蹈服、舞台服和表演服饰紧身裤（Costume leggings）、派对吊带裙（Party slip dresses）用途；首屏介绍也补充Costume leggings和Party slip dresses作为可选用途，不表述为已有客户使用事实或运动健身性能承诺；用途图标区标题为 `Recommended Uses`；FAQ保留4条：抗氯/UV性能是否验证、烫金反复拉伸洗涤表现、定制样品确认、如何报价；未确认的性能明确无已验证测试结果，建议按实际成衣与护理流程测试样品；用户确认定制订单须客户确认样品后才开始大货；用途、MOQ、现货样品政策、通用定制范围、检测服务、库存和交期不重复为FAQ；该产品跳过通用FAQ自动补充，页面和FAQ结构化数据保持一致；用途图标按Swimwear、Swim caps、Dancewear、Stage costumes、Costume leggings、Party slip dresses排序，应用数据同步优先顺序，以已确认的泳装客户用途优先，不作为市场规模排名；护理采用用户确认的40°C机洗、低温滚筒烘干、低温熨烫、可干洗、不可漂白。合并重复规格和采购说明，保留详情图片、样品入口和FAQ。该产品成分由用户确认为95%涤纶、5%氨纶，首屏介绍、Fabric features及规格表的Composition和Base Material均展示此成分，Base Material不再显示Milk-silk；不得增加未确认的耐氯、UV等性能承诺。
- 验收条件：该产品出现三个图标分区和单一规格采购表；quote/sample 分别打开现有 RFQ 并带产品名；护理描述不再与旧版冷洗/自然晾干说明混用；移动端分区堆叠；其他产品继续原布局。
- 影响模块：`product-catalog`
- 代码路径：`src/components/ProductDetail.astro`、`src/components/FullPrintBuyingDetails.astro`、`src/data/allProducts.js`
- 测试路径：`npm run build`、`npm run validate:seo`、本地预览。
- 最后变更编号：CHG-20261015-016-full-print-buyer-faq
- 待确认事项：工作区缺少产品数据工作簿，本次以当前代码及用户明确确认的泳衣/泳帽用途和护理要求为依据，不编造参数。

### REQ-PRODUCT-051：产品目录首位推荐产品
- 状态：active
- 当前规则：`/products/` 默认推荐排序第一位为 `iridescent-gradient-laser-ice-silk`（Iridescent Gradient Foil Stretch Fabric for Dancewear & Costumes），原首位产品顺延至第二位，其余相对顺序保留。桌面和移动端一致。
- 验收条件：生成的产品网格首卡为指定产品，手动选择其他排序方式仍使用原有逻辑。
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`；产物首卡检查
- 最后变更编号：CHG-20261021-006-gradient-product-first

### REQ-PRODUCT-052：移除目录视图切换及空操作行
- 状态：active
- 当前规则：全端移除 Grid/List 按钮和 catalog-summary 容器，固定网格展示，不再读取 catalogView 历史偏好；Clear filters 放入桌面筛选控件区。桌面缩小 Hero 顶部内边距至 1rem，移动端保持 0.75rem。
- 验收条件：筛选栏下方无独立视图操作行；移动端全部产品默认展示（REQ-PRODUCT-040）、桌面筛选和排序仍可用。
- 代码路径：src/pages/products.astro
- 测试路径：npm run build；页面交互模拟检查
- 最后变更编号：CHG-20261021-012-desktop-hero-gap-remove-view-switch

### REQ-PRODUCT-053：Products 广告落地页以产品特性和采购服务为主
- 状态：active
- 当前规则：仅 /products/ 使用 H1 Wholesale Foil & Metallic Fabrics；简介为 Explore holographic, iridescent and foil stretch fabrics for costume and apparel production. Custom colors available for bulk orders. 保留已确认 Stock MOQ from 50m 和 Custom MOQ from 200m，另外两项为 Fabric Swatches Available、Custom Colors Available。不统一承诺四面弹。保留金色 Request Samples 在左、描边 Request Bulk Quote 在右，继续复用现有 quote/sample RFQ。首屏下全端按特性筛选，默认不限制应用；产品卡缩短图片并提前展示真实规格。其他页面、产品原始数据、RFQ 提交流程不变。
- 验收条件：18 个产品默认全部可见；搜索、特性快捷入口及清除可组合操作，默认推荐顺序不变；375/390/768/1024/1440px 无横向溢出，材料与弹力可读；quote/sample 意图及产品上下文保留；既有响应式图片和预加载保留。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`、`git diff --check`、本地浏览器响应式/筛选/RFQ 检查。
- 最后变更编号：CHG-20261024-004-catalog-five-columns
- 待确认事项：尚未部署；线上广告效果需发布后观察。

### REQ-PRODUCT-054：产品目录移动端加载速度
- 状态：active
- 当前规则：`/products/` 使用 Astro 构建期图片优化，将符合 `main/*-main-1.webp` 命名的目录主图生成 360/540/720px、质量 72 的 WebP，按实际容器宽度通过 `srcset/sizes` 供浏览器选择；不改产品详情原图。不符合命名约定的图片保留原图回退和加载失败占位。默认推荐首卡图片在 head 使用匹配的 `imagesrcset/imagesizes` 预加载，并使用 `loading="eager"` 和 `fetchpriority="high"`，其余卡片懒加载。生产构建内联目录本地样式。性能优化保留；当前目录文案和筛选按 REQ-PRODUCT-022/040/053 展示，集合、推荐排序和 RFQ 逻辑不变。
- 验收条件：18 张目录图片均有响应式输出，首卡预加载与最终图片候选一致，不重复下载原图；生产 HTML 无本地外部 stylesheet；375/390/768/1024/1440px 无横向溢出，全端特性筛选、搜索/排序和 quote/sample 弹窗正常；构建与产品/SEO 校验通过。
- 影响模块：`product-catalog`、`site-shell`
- 代码路径：`src/pages/products.astro`、`scripts/inline-home-styles.mjs`
- 测试路径：`npm run build`、`git diff --check`；浏览器慢速网络模拟及响应式交互检查。
- 最后变更编号：CHG-20261023-001-products-mobile-loading
- 待确认事项：本地网络模拟不等于线上手机体验，发布后应在用户目标地区复测。

### REQ-PRODUCT-055：H2013120107 详情页移动端加载速度
- 状态：active
- 当前规则：仅 `/products/iridescent-laser-hot-stamping-stretch-ice-silk/` 的五张画廊图使用构建期响应式 WebP（480/720/1080/1440px，最大不超过源图宽度，质量 76），按手机/桌面画廊实际宽度选图。画廊缩略图使用 160px、质量 70 的 WebP，视频 poster 复用第一张缩略图，视频仍为 `preload="none"`。head 的响应式预加载与首图候选及 sizes 完全匹配，移除旧原图预加载。生产构建内联该页本地 CSS。保留图片顺序、产品内容、SEO、详情原图和 RFQ 流程；H2013120101 另按 REQ-PRODUCT-056 启用优化，其他新增低分页按 REQ-PRODUCT-057 启用；全部页面样式按 REQ-SHELL-029 内联。共享图库切换 source 时同步响应式候选与 sizes，修复原先调用不存在的 `HTMLImageElement.load()` 的错误。
- 验收条件：移动初始画廊请求不再下载五张完整原图，首图无重复下载；五个缩略图和视频入口均可切换，返回首图正常；不主动下载视频；375/390/768/1024/1440px 无横向溢出，quote/sample RFQ 正常；另一产品画廊切换回归通过；构建、产品与 SEO 校验通过。
- 影响模块：`product-catalog`、`site-shell`
- 代码路径：`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`、`scripts/inline-home-styles.mjs`
- 测试路径：`npm run build`、`git diff --check`；浏览器同条件慢网模拟与图库/RFQ 交互检查。
- 最后变更编号：CHG-20261023-004-ice-silk-mobile-loading
- 待确认事项：尚未部署，本机慢网结果不能替代线上目标地区实测。

### REQ-PRODUCT-056：H2013120101 详情页移动端加载速度
- 状态：active
- 当前规则：`/products/rainbow-iridescent-laser-foil-nylon-spandex-fabric/` 复用 REQ-PRODUCT-055 的画廊优化流程，五张 800px 源图生成 480/720/800px、质量 76 的响应式 WebP 和 160px、质量 70 的缩略图。首图使用与实际画廊一致的响应式预加载；生产构建内联该页 CSS。保持产品文案、规格、图片顺序、详情图片、SEO 和询盘流程不变，不新增视频。H2013120107 已有优化保留，其他新增低分页按 REQ-PRODUCT-057 启用；全部页面样式按 REQ-SHELL-029 内联。
- 验收条件：首次加载不下载五张完整画廊原图，首图无重复请求；五张图片可切换并返回首图，无脚本错误；375/390/768/1024/1440px 无横向溢出，quote/sample 弹窗正常；图片候选宽度不超过原图且与实际输出匹配；原有优化及其他产品图库回归通过；构建及产品/SEO 校验通过。
- 影响模块：`product-catalog`、`site-shell`
- 代码路径：`src/pages/products/[slug].astro`、`scripts/inline-home-styles.mjs`；复用 `src/components/ProductDetail.astro`。
- 测试路径：`npm run build`、`git diff --check`；同条件浏览器慢网对比、响应式图库和询盘交互检查。
- 最后变更编号：CHG-20261023-005-rainbow-nylon-mobile-loading
- 待确认事项：尚未部署，本机模拟结果不能替代线上目标地区手机实测。

### REQ-PRODUCT-057：低分产品详情页画廊优化
- 状态：active
- 当前规则：对桌面逐页基线低于 93 的 H2013120105、H2013090101、H2013120106、H2013090102、H2013090104、H2013060102、H2015030103 复用 REQ-PRODUCT-055 的响应式画廊/160px 缩略图流程，候选宽度不超过源图；首图预加载与候选一致。此前两个产品优化保留，其他产品画廊保持原图。全部详情页本地 CSS 按 REQ-SHELL-029 内联。
- 验收条件：九个启用优化的图库在手机和桌面均可切换并返回首图；首图无重复下载，不主动下载视频，无横向溢出，RFQ 正常；逐页实测记录与本地/线上环境明确区分。
- 代码路径：src/pages/products/[slug].astro；复用 src/components/ProductDetail.astro
- 测试路径：npm run build；官方 Lighthouse desktop 逐页复测；390/1350px 图库与 RFQ 检查
- 最后变更编号：CHG-20261023-009-site-performance-audit
- 待确认事项：发布后补做 Google PageSpeed 线上验收。


### REQ-PRODUCT-058：啦啦队应用页提供可核验的四款采购对比
- 状态：active
- 当前规则：仅 `cheerleading-performance-costume-fabric` 在 Hero 后展示四款采购对比、现有主图/细节图、按款 sample/quote 入口及采购确认边界，替代该页原通用 shortlist 与重复产品网格。规格动态引用现有产品数据，显示款号、成分或底材、克重、幅宽、弹力与 MOQ；未确认的成分比例明确说明待确认。现有图片不得表述为拉伸测试、逆面或真实啦啦队成衣实拍。保留标题、H1、canonical 和其他应用页。
- 验收条件：四款产品均有有效详情链接和图片；询盘入口保留产品名，预填应用/款号/交期/邮编提示并展开现有可选信息，不覆盖买家已编辑草稿；样品费用与运输政策引用现有产品事实，不承诺未确认的性能、库存或美国交期。
- 影响模块：product-catalog、inquiry-forms
- 代码路径：`src/components/CheerleadingBuyerGuide.astro`、`src/pages/applications/[slug].astro`
- 测试路径：`npm run build`；生成 HTML 检查；桌面与移动预览；RFQ 上下文检查（不发送真实表单）
- 最后变更编号：CHG-20261024-005-cheerleading-buyer-evidence
- 待确认事项：额外拉伸/逆面/啦啦队服装应用实拍与实测数据尚未提供；上线后观察自然搜索及真实询盘。


### REQ-PRODUCT-059：全息应用页区分视觉效果与底布规格
- 状态：active
- 当前规则：仅全息应用页在 Hero 后以四款现有产品展示光面、渐变、蛇纹和鳞片效果；自然使用 holographic clothing material，不新建近似页面，保留 title/H1/canonical。照片、款号和实际规格同源，每卡分列视觉效果与底布成分、弹力、克重、幅宽和 MOQ，替代原通用 shortlist。保留其他产品入口及样品检查。
- 验收条件：蛇纹明确为 Slight stretch；不把 holographic、milk-silk 或 ice-silk 当成成分/性能等级；未知成分比例说明待确认。现有静态照片不能声称同一样品受控角度或拉伸对比，提示按款申请相同色号的角度/拉伸视频与实物样品；不编造视频及测试结论。四款均有详情与按款样品 RFQ，图片响应式且移动端不溢出。
- 影响模块：product-catalog
- 代码路径：`src/components/HolographicBuyerGuide.astro`、`src/pages/applications/[slug].astro`
- 测试路径：npm run build；桌面与移动预览、按款 RFQ 检查（不提交）
- 最后变更编号：CHG-20261025-001-holographic-effect-comparison
- 待确认事项：同色同样角度变化及拉伸实拍视频尚未提供。
# REQ-PRODUCT-060 Stage costume sourcing

- 当前规则：舞台服饰应用页说明金属感、烫金及幻彩面料的选材用途，提供舞蹈和全息应用内链，并提示买家按款号确认样品、MOQ 和交期。
- 验收条件：页面保留产品对比及询盘入口，展示用途说明、相关应用链接和采购信息；不虚构产品规格或采购条件。

