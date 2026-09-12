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
- 当前规则：`Layout` 负责 canonical、robots、Open Graph、Twitter Card、Organization/WebSite JSON-LD，以及首页 hero 预加载。
- 验收条件：页面源代码能看到完整 head 信息，且 `thank-you` 不进入 sitemap。
- 影响模块：`site-shell`
- 代码路径：`src/layouts/Layout.astro`、`astro.config.mjs`
- 测试路径：`npm run build`
- 最后变更编号：待确认
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
- 当前规则：首页轮播移除第 3 张 slide；Popular Products 移除 Coarse Glitter PU Hot Stamping Fabric、Non-Woven Glitter Fabric 和 Sparkle Glitter Surface Solid Leather Fabric；首页 Applications 区块整体移除。
- 验收条件：首页不再显示上述轮播、产品卡片和 Applications 区块，剩余内容正常布局与跳转。
- 影响模块：`site-shell`
- 代码路径：`src/components/HeroCarousel.astro`、`src/pages/index.astro`
- 测试路径：`npm run build`，手动检查首页
- 最后变更编号：CHG-20260912-019-home-remove-applications
- 待确认事项：无

### REQ-SHELL-005：首页不展示 Glitter 相关内容
- 状态：active
- 当前规则：首页及其共享站点壳文案、SEO 元数据、替代文本、能力卡片与采购流程文案不使用 `glitter` 或 `sparkle` 表述；首页应用素材引用使用中性文件名。
- 验收条件：首页源码与生成页面的可见内容不再出现 `glitter` 或 `sparkle` 相关表述，剩余 foil、iridescent 与 holographic 内容正常展示。
- 影响模块：`site-shell`
- 代码路径：`src/components/HeroCarousel.astro`、`src/pages/index.astro`、`public/shots/application-costume-foil.jpg`
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
- 代码路径：`src/components/HeroCarousel.astro`、`public/images/home/slide2_v2.png`、`public/images/home/slide2_v2.webp`、`public/images/home/slide2_v2-mobile.webp`
- 测试路径：`npm run build`，检查生成首页中的 `slide2` 素材引用
- 最后变更编号：CHG-20260912-020-home-slide2-v2-image
- 待确认事项：无

### REQ-SHELL-008：全站统一加载 Google Analytics
- 状态：active
- 当前规则：所有通过 `src/layouts/Layout.astro` 渲染的页面，在 `<head>` 开标签后统一加载一个 Google tag，Measurement ID 为 `G-VDYGZBSQ62`；不得在单独页面重复添加同一 Google tag。
- 验收条件：每个公开页面源码包含一次 `googletagmanager.com/gtag/js?id=G-VDYGZBSQ62` 和一次 `gtag('config', 'G-VDYGZBSQ62')` 配置；页面之间不重复注入。
- 影响模块：`site-shell`
- 代码路径：`src/layouts/Layout.astro`
- 测试路径：`npm run build`，检查生成页面源码
- 最后变更编号：CHG-20260912-004-google-analytics-tag
- 待确认事项：无
