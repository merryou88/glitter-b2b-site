---
module: product-catalog
status: current
---

### REQ-PRODUCT-001：产品列表页仅展示表演服装相关产品
- 状态：active
- 当前规则：`/products/` 只展示 `performanceProducts` 中适用于舞台服装、舞蹈服、表演服和 Cosplay/Carnival Costume 的产品；其他历史产品不得出现在产品卡片、推荐排序、产品总数、场景入口、筛选结果或询盘选择中。产品列表页不再展示应用场景入口，场景导航由独立应用页面承担。
- 验收条件：当前目录页展示 4 个表演服装相关产品；筛选、排序和总数均基于这 4 个产品；页面无鞋材、手袋、泳装、装饰、工艺或玩具产品入口。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products.astro`
- 测试路径：`npm run build`，手动检查 `/products/`
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：无

### REQ-PRODUCT-002：每个公开产品生成独立静态详情页
- 状态：active
- 当前规则：`/products/[slug]` 通过 `getStaticPaths()` 为 `performanceProducts` 中每个公开产品生成静态页，并渲染产品 schema、FAQ schema 和面包屑 schema。
- 验收条件：每个公开产品 slug 都能打开对应详情页；退出行业产品不生成新页面并通过 `_redirects` 迁移；元数据与产品事实一致。
- 影响模块：`product-catalog`
- 代码路径：`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`
- 测试路径：`npm run build`
- 最后变更编号：待确认
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
