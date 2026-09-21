---
module: site-shell
status: current
---

### REQ-SHELL-001：全站壳统一挂载
- 状态：active
- 当前规则：所有页面都通过 `src/layouts/Layout.astro` 包装，并统一注入 `Header`、`Footer`、`RFQQuoteModal`、`FloatingContact` 和全局样式。
- 验收条件：任意页面都能看到同一套站点壳与导航行为。
- 影响模块：`site-shell`、`product-catalog`、`blog-knowledge`、`company-pages`
- 代码路径：`src/layouts/Layout.astro`、`src/components/Header.astro`、`src/components/Footer.astro`
- 测试路径：`npm run build`，再手动打开首页和几类子页
- 最后变更编号：待确认
- 待确认事项：无

### REQ-SHELL-002：站点级 SEO 规则
- 状态：active
- 当前规则：`Layout` 负责 canonical、robots、Open Graph、Twitter Card、Organization/WebSite JSON-LD，以及首页 hero 预加载。Open Graph 图片类型需要按实际图片扩展名输出 PNG、WebP 或 JPEG MIME。
- 验收条件：页面源代码能看到完整 head 信息，产品 PNG 主图的 `og:image:type` 输出为 `image/png`，且 `thank-you` 不进入 sitemap。
- 影响模块：`site-shell`
- 代码路径：`src/layouts/Layout.astro`、`astro.config.mjs`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260915-001-h2013060105-shiny-foil-product
- 待确认事项：无

### REQ-SHELL-003：导航与浮窗一致
- 状态：active
- 当前规则：桌面和移动导航链接必须一致；浮动联系入口保留 WhatsApp / WeChat 两条主要通道。
- 验收条件：桌面、移动和浮窗的可点击入口都能到达当前真实页面。
- 影响模块：`site-shell`
- 代码路径：`src/components/Header.astro`、`src/components/FloatingContact.astro`、`src/components/Footer.astro`
- 测试路径：手动检查首页、联系页、产品页
- 最后变更编号：待确认
- 待确认事项：无

### REQ-SHELL-004：首页首屏与推荐内容按当前市场重点展示
- 状态：active
- 当前规则：首页轮播移除第 3 张 slide；Popular Products 移除 Coarse Glitter PU Hot Stamping Fabric、Non-Woven Glitter Fabric 和 Sparkle Glitter Surface Solid Leather Fabric，并加入 Full-Print Hot-Stamping Spandex Milk-Silk Fabric；首页 Applications 区块整体移除。
- 验收条件：首页不再显示上述轮播、产品卡片和 Applications 区块，同时显示 Full-Print Hot-Stamping Spandex Milk-Silk Fabric 卡片，且链接和主图正常。
- 影响模块：`site-shell`
- 代码路径：`src/components/HeroCarousel.astro`、`src/pages/index.astro`
- 测试路径：`npm run build`，手动检查首页
- 最后变更编号：CHG-20260912-021-home-popular-full-print
- 待确认事项：无

### REQ-SHELL-011：首页与应用页 SEO 内链覆盖
- 状态：active
- 当前规则：首页热门产品区覆盖当前公开产品集合，并提供应用指南入口；应用索引页回链产品目录与博客知识中心。
- 验收条件：首页包含当前公开产品详情页入口和 `/applications/` 入口；`/applications/` 包含 `/products/` 与 `/blog/` 内链。
- 影响模块：`site-shell`、`product-catalog`、`blog-knowledge`
- 代码路径：`src/pages/index.astro`、`src/pages/applications/index.astro`
- 测试路径：`npm run build`，检查生成 HTML 内链
- 最后变更编号：CHG-20260916-002-seo-page-optimization
- 待确认事项：无

### REQ-SHELL-012：美国自然搜索聚焦当前 performance fabric 方向
- 状态：active
- 当前规则：公开 SEO 标题、描述、H1 和核心内链需要优先承接当前美国采购方向：`foil fabric supplier`、`holographic fabric wholesale`、`iridescent spandex fabric`、`dancewear fabric supplier` 和 `performance costume fabric`。`/products/` 作为当前产品总入口，必须强调 foil、holographic、iridescent、dancewear、performance costumes、samples、MOQ 和 custom support；`/applications/` 作为应用入口，必须强调 performance costume 与 dancewear fabric 应用。历史 glitter/leather 查询只做观察，不作为当前主推 SEO 方向。
- 验收条件：`/products/`、`/applications/` 和重点应用页的 title、description、H1 与内部链接聚焦当前采购词；首页和公开入口不重新主推 glitter/leather。
- 影响模块：`site-shell`、`product-catalog`
- 代码路径：`src/pages/products.astro`、`src/pages/applications/index.astro`、`src/pages/applications/[slug].astro`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260920-001-us-search-baseline-seo-focus
- 待确认事项：上线后需在 Google Search Console 观察美国查询、页面展示和“已发现 - 尚未编入索引”变化。

### REQ-SHELL-005：首页不展示 Glitter 相关内容
- 状态：active
- 当前规则：首页及其共享站点壳文案、SEO 元数据、替代文本、能力卡片与采购流程文案不使用 `glitter` 或 `sparkle` 表述；首页应用素材引用使用中性文件名。
- 验收条件：首页源码与生成页面的可见内容不再出现 `glitter` 或 `sparkle` 相关表述，剩余 foil、iridescent 与 holographic 内容正常展示。
- 影响模块：`site-shell`
- 代码路径：`src/components/HeroCarousel.astro`、`src/pages/index.astro`、`public/shots/application-costume-foil.webp`
- 测试路径：`npm run build`，检查首页源码关键字
- 最后变更编号：CHG-20260912-015-home-remove-glitter-content
- 待确认事项：无

### REQ-SHELL-006：公开站点聚焦表演服装市场
- 状态：active
- 当前规则：公开页面、默认 SEO、Footer、首页轮播、应用页和联系入口统一聚焦舞台服装、舞蹈服、表演服、Cosplay 与 Carnival Costume；鞋材、手袋、泳装、泛时装、装饰、工艺和玩具不再作为公开行业定位。
- 验收条件：站内公开入口不再链接已退出行业；首页、公司页、工厂页、联系页和应用页的可见文案与 SEO 不推广退出行业。
- 影响模块：`site-shell`、`product-catalog`、`company-pages`、`blog-knowledge`
- 代码路径：`src/layouts/Layout.astro`、`src/components/HeroCarousel.astro`、`src/components/Footer.astro`、`src/pages/index.astro`、`src/pages/applications/**`
- 测试路径：`npm run build`；检查生成页面文本与内部链接
- 最后变更编号：CHG-20260912-018-public-copy-alignment
- 待确认事项：无

### REQ-SHELL-007：首页轮播素材与响应式变体同步
- 状态：active
- 当前规则：首页 `slide2` 使用最新上传的 `slide2_v2` 主图，并同步提供桌面与移动端 WebP 变体；轮播组件通过源文件路径自动解析对应 WebP。
- 验收条件：首页第二张轮播显示最新素材，桌面和移动端均能加载对应图片，其他轮播内容不受影响。
- 影响模块：`site-shell`
- 代码路径：`src/components/HeroCarousel.astro`、`public/images/home/slide2_v2.webp`、`public/images/home/slide2_v2-mobile.webp`
- 测试路径：`npm run build`，检查生成首页中的 `slide2` 素材引用
- 最后变更编号：CHG-20260912-020-home-slide2-v2-image
- 待确认事项：无

### REQ-SHELL-008：全站统一加载 Google Analytics
- 状态：active
- 当前规则：所有通过 `src/layouts/Layout.astro` 渲染的页面，在 `<head>` 开标签后统一配置 Google tag，Measurement ID 为 `G-VDYGZBSQ62`；不得在单独页面重复添加同一 Google tag。若访问者浏览器存在 `nixia_ga_optout=true` Cookie，则不请求 `googletagmanager.com`，也不发送 GA4 配置事件。
- 验收条件：每个公开页面源码包含一次 `googletagmanager.com/gtag/js?id=G-VDYGZBSQ62` 和一次 `gtag("config", "G-VDYGZBSQ62")` 配置；页面之间不重复注入；设置 `nixia_ga_optout=true` Cookie 后，页面运行时跳过 GA4 加载。
- 影响模块：`site-shell`
- 代码路径：`src/layouts/Layout.astro`
- 测试路径：`npm run build`，检查生成页面源码
- 最后变更编号：CHG-20260913-001-ga-cookie-optout
- 待确认事项：无

### REQ-SHELL-009：首页制造能力卡片铺满整行
- 状态：active
- 当前规则：首页 `In-House Production, Full Control` 区块的 4 个制造能力卡片在桌面端使用 4 列等宽布局，占满内容区域；平板和移动端继续按响应式断点排列。
- 验收条件：桌面端四张卡片均匀铺满整行，没有多余空列；平板和移动端布局正常。
- 影响模块：`site-shell`
- 代码路径：`src/pages/index.astro`
- 测试路径：`npm run build`，手动检查首页制造能力区块
- 最后变更编号：CHG-20260912-022-home-capability-cards-full-width
- 待确认事项：无

### REQ-SHELL-010：移动端优先加载与渲染
- 状态：active
- 当前规则：全站 Analytics 在页面完成加载后的浏览器空闲期加载；移动端关闭导航和首页轮播的高成本模糊/图片滤镜；首屏以下区块允许浏览器延迟渲染。
- 验收条件：移动端首屏不等待 Analytics；轮播、导航和页面滚动交互正常；桌面端既有视觉效果保留。
- 影响模块：`site-shell`
- 代码路径：`src/layouts/Layout.astro`、`src/components/Header.astro`、`src/components/HeroCarousel.astro`、`src/styles/global.css`
- 测试路径：`npm run build`，移动端手动检查首页首屏、导航、轮播和滚动
- 最后变更编号：CHG-20260915-003-mobile-performance
- 待确认事项：需用真实手机网络和 Lighthouse/Chrome DevTools 采集优化前后指标
