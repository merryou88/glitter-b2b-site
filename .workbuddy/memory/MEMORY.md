# Nixia Fabric 项目长期记忆

## 项目概要
- Astro 静态站点，面向 B 端海外客户（nixiafabric.com）
- 产品：亮片面料（Chunky Glitter Synthetic Leather）+ 烫金面料（Foil-Printed Synthetic Leather）
- 构建命令 `npm run build`，开发 `npm run dev`（localhost:4321，trailingSlash: 'always'）

## 术语规范（全站强制执行）
- 标准工艺名（对外展示）：Chunky Glitter Synthetic Leather / Foil-Printed Synthetic Leather / Composite Fabric
- 内部数据值（不改）：category="Hot-Stamping Foil Finish"、craft="Hot-Stamping Foil"、craftOptions 数组保留原值
- 主标题/横幅/导航/SEO meta 禁止出现 "Hot-Stamping Foil"（该词指代烫金耗材膜，非成品面料）
- 产品详情正文可使用 sparkle/sparkly 做修饰，不用于主标题
- 按钮文案：Request Free Sample / Get Custom Quote / Discover Fabrics（禁止 Swatch）
- 正文仅 Sample Policy 页和产品详情页可使用 swatch（区分小块色卡和大货样）
- 合规：SGS Certified, REACH Compliant
- 能力：Factory Direct Supply / Custom Color Matching / Custom Backing Options
- 禁用词：bronzing, bronze, "PU Fabric"（作主标题）, view more, click here, cloth, garment, furniture, decorative fabric（可见文本中）

## 业务叙事基准（全站统一，2026-08-09 确立）
- 工厂注册时间：since 2013，禁止虚构更早从业时间
- 企业身份：自有格利特/热烫金PU面料工厂 + 与其他资质合格面料工厂稳定合作
- 目标客户：全球鞋、手袋、配饰制造商（footwear, handbag and accessory manufacturers worldwide）
- 主营产品限定：glitter synthetic leather、foil-printed PU materials
- 价值主张：可靠可定制合成面料，支持样品申请/定制颜色底材/SGS+REACH报告
- 全站不展示价格；CTA 优先级：Request Free Sample > Get Custom Quote
- 博客公司背景描述统一使用指定段落，禁止出现其他版本

## 技术架构要点
- `src/data/products.ts` 是唯一数据源，含 craft / backingCategory / endUse 三维分类
- `[slug].astro` 双路由：产品详情 + end-use 场景列表（getStaticPaths 条件渲染）
- 产品列表页双筛选：Filter by End-Use + Filter by Craft（底材筛选已移除，下沉至详情页）
- 筛选器 URL 参数通过 JS 动态注入 noindex meta
- JSON-LD 结构化数据覆盖 Organization / WebSite / BreadcrumbList / Product / FAQPage / CollectionPage / ItemList / Blog / AboutPage / ContactPage
- 全站 20 页：首页/产品列表/7产品详情/4场景列表/工厂/关于/博客/Sample Policy/Certifications/Contact/Thank-You
- CTA 路由规范：Request Free Sample → /sample-policy；Get Custom Quotation → /contact
- 全站按钮统一金色（btn--primary/dark/secondary/outline 均为金色系）
- 悬浮联系按钮（FloatingContact）例外：WhatsApp 绿 #25D366 / WeChat 绿 #07C160，不使用金色
- 博客标签限定：Glitter-Leather / Hot-Stamping-Foil / Material-Guide / Compliance

## 联系表单架构
- 已废弃 mailto 方案，改用 Cloudflare Pages Functions（`functions/api/contact.js`）
- 表单字段：Name / Company / Email / Subject / Message（均 required）
- 反机器人：Cloudflare Turnstile（前端 widget + 后端 siteverify）
- 邮件投递：Resend API（环境变量 RESEND_API_KEY），发至业务邮箱 info@nixiafabric.com
- 提交成功 → 跳转 /thank-you；失败 → 页内红色错误横幅
- 需配置 4 个环境变量：TURNSTILE_SECRET_KEY / RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL
- Turnstile sitekey 需替换为真实值（当前 contact.astro 中为占位值）
- 本地 dev 提交表单会报错（/api/contact 返回 404），部署到 Cloudflare Pages 后才完整可用

## 页面架构（对标 solamni.com 三层浅目录）
- 点击深度 ≤3，所有页面从首页可达
- 独立页面：Sample Policy (/sample-policy) / Certifications (/certifications) / Contact (/contact)
- 图片规范：文件名全小写下划线分隔，1:1 正方形，禁止嵌入文字/logo/水印
- 顶栏（深蓝横幅）：左标语 "Glitter & Foil-Printed Synthetic Leather Manufacturer" + 右联系入口（WhatsApp > Phone > Email > Facebook > LinkedIn）；产地信息仅在页脚小字 "Manufacturer from China"
- 联系方式占位值待替换：WhatsApp/Phone `+8613800000000`、Email `info@nixiafabric.com`、Facebook/LinkedIn 基于 nixiafabric

## 用户偏好
- 不使用 AI 生成图片，优先用户自带图片（AI 图仅作临时占位，预留真实图片接入位置）
- 对标欧洲纺织行业标准（hoepke.de）
- 首页叙事对标 ecowoodplate.com
- 全站优化对标 solamni.com
