# Nixia Fabric 30 天自然社媒内容分发计划

- 任务：未来 30 天获客计划，任务 4
- 执行周期：2026-09-19 至 2026-10-19
- 当前状态：仅建立执行计划；不登录、不发布、不创建社媒账号
- 主要渠道：LinkedIn
- 建议辅助渠道：Pinterest，等待用户确认
- 核心目标：把目标采购商引导至最相关的单个产品页，并在 GA4 中区分渠道、内容和后续 CTA 行为

## 1. 渠道选择

### LinkedIn：主要 B2B 渠道

LinkedIn 用于发布采购决策型内容，不追求泛流量。每条内容围绕一个具体采购问题展开，例如表面效果、弹力、规格、MOQ、样品确认或应用选择，并只链接一个产品页。

建议内容形式：

- 3-5 张产品图轮播：适合规格拆解、应用选择和 MOQ FAQ
- 10-25 秒短视频：适合光线变化、表面反射和工厂流程
- 单图加短文：适合明确回答一个采购问题

### Pinterest：建议辅助渠道

Pinterest 比 Instagram 和 YouTube 更适合当前素材与本次目标：

- 现有产品近景、细节图、应用图数量充足，可裁切为竖版 Pin
- 每条 Pin 可指向对应产品页，便于执行“一条内容、一个落地页”
- 可用 outbound clicks 与 GA4 UTM 验证是否产生目标访问
- 同一主题可从 LinkedIn 轮播中复用 1-2 张核心图，降低持续制作成本

暂不优先：

- Instagram：适合视觉展示，但普通内容的具体产品页导流路径较弱，需要额外维护主页链接或 Story 链接
- YouTube：仓库内当前公开产品视频只有 2 条，难以支撑 4 周稳定视频节奏；Shorts 描述和评论中的普通外部 URL 也不适合作为本次产品页导流主路径

平台确认前，不创建 Pinterest Board，不调整 LinkedIn 页面，也不上传任何素材。

## 2. 已确认素材盘点

当前公开产品以 `src/data/allProducts.js` 中的 8 个 `performanceProducts` 为准。

| SKU | 产品 slug | 主图 | 细节图 | 应用图 | 视频 | 当前适合内容 |
|---|---|---:|---:|---:|---:|---|
| P0001 | `plain-iridescent-laser-spandex-4-way-stretch` | 4 | 4 | 2 | 0 | 表面近景、4-way stretch 规格、舞台与舞蹈服应用 |
| P0002 | `full-print-hot-stamping-spandex-milk-silk` | 7 | 6 | 3 | 0 | 全印花效果、图案选择、22 个现货颜色、每款图案 MOQ |
| H2013060105 | `shiny-foil-4-way-stretch-knit-fabric` | 5 | 14 | 1 | 0 | 亮面 foil、145 cm / 57 in、4-way stretch、performance/party wear |
| H2013060106 | `dense-dot-foil-suede-look-fabric` | 5 | 12 | 1 | 0 | suede-look 近景、轻微弹力、舞台道具与背景布选择 |
| P0003 | `iridescent-laser-hot-stamping-stretch-ice-silk` | 5 | 6 | 1 | 1 | 光线变化视频、iridescent 效果、样品确认 |
| P0005 | `iridescent-gradient-laser-ice-silk` | 5 | 2 | 2 | 1 | 渐变方向、光线变化视频、舞蹈服与 costume 应用 |
| H2013090104 | `rainbow-dot-laser-foil-knit-fabric` | 5 | 23 | 0 | 0 | 圆点 foil 近景、90 GSM、28 色、200 m / 219 yd MOQ |
| H2013120102 | `blue-purple-gradient-laser-foil-spandex-fabric` | 5 | 9 | 1 | 0 | 蓝紫渐变、4-way stretch、单一标准色、应用选择 |

补充公共素材：

| 素材 | 路径 | 用途 |
|---|---|---|
| 品牌化工厂视频 | `public/images/factory/nixia-factory-branded.mp4` | 样品与工厂流程内容的辅助画面 |
| 原料准备 | `public/images/process/raw_material_preparation.webp` | 工厂流程轮播 |
| 烫金转印 | `public/images/process/hot_stamping_foil_transfer.webp` | 工艺解释 |
| 在线目检 | `public/images/process/on_line_visual_inspection.webp` | 质量控制说明 |
| 样品确认 | `public/images/process/sample_confirmation.webp` | 样品流程说明 |
| 成品包装 | `public/images/process/final_packing.webp` | 批量采购流程说明 |

### 发布前人工素材确认

文件名和产品数据可以确认近景、细节、应用、产品视频和工厂素材，但不能可靠确认每张图是否明确展示以下动作。用户需要在发布前勾选：

- [ ] 哪些图片或视频清楚展示实际拉伸动作
- [ ] 哪些图片清楚展示面料背面
- [ ] 哪些视频包含不同光线或观看角度变化
- [ ] 哪些应用图已获得对外社媒使用许可
- [ ] 是否允许从现有视频截取 10-25 秒片段
- [ ] 是否允许对图片做 4:5、2:3 竖版裁切，但不改变产品颜色和表面效果

## 3. 四周内容日历

固定节奏：每周一、周四各发布 1 个核心主题。LinkedIn 为主帖；Pinterest 在同日或次日复用同一主题的 1-2 张竖版图。每条内容只链接表格中的单个产品页。

| ID | 日期 | 产品 | 主题与采购问题 | LinkedIn 形式 | Pinterest 形式 | 核心事实 | CTA |
|---|---|---|---|---|---|---|---|
| `w1_p1_effect` | 2026-09-21 | P0001 | Iridescent 表面在采购时除了“亮”还要看什么？ | 4 图轮播：整体、近景、纹理、应用 | 2:3 近景 Pin | 4-way stretch；150 cm / 59 in；180 GSM；MOQ 100 m / 109 yd | View product specifications |
| `w1_p2_specs` | 2026-09-24 | P0002 | Full-print foil 的 MOQ 为什么按 design 计算？ | 规格拆解轮播 | 图案近景 Pin | 4-way stretch；160 g/m²；22 stock colors；MOQ 100 m / 109 yd per design | Check pattern and MOQ details |
| `w2_p3_sample` | 2026-09-28 | P0003 | 光线变化明显的面料，为什么批量前要看实物样？ | 10-25 秒产品视频，可加样品确认静帧 | 视频封面或近景 Pin | 150 cm / 59 in；160 g/m²；1 standard color；MOQ 100 m / 109 yd per color | Review the fabric and sample option |
| `w2_p4_application` | 2026-10-01 | H2013060105 | Performance wear 选 foil knit 时，弹力和克重如何一起看？ | 4 图轮播：表面、拉伸待确认、规格、应用 | 应用或表面 Pin | 4-way stretch；145 cm / 57 in；150 GSM；30 colors；MOQ 100 m / 109 yd | View performance-wear specifications |
| `w3_p5_gradient` | 2026-10-05 | P0005 | Gradient foil 应先确认颜色，还是渐变方向？ | 产品视频加 3 点检查清单 | 渐变主图 Pin | 150 cm / 59 in；160 g/m²；19 colors；MOQ 100 m / 109 yd per colorway | Compare gradient fabric details |
| `w3_p6_use_case` | 2026-10-08 | H2013060106 | Slight stretch 面料何时更适合 props/backdrops，而非贴身服装？ | 应用选择轮播 | suede-look 纹理 Pin | Slight stretch；150 cm / 59 in；130 GSM；16 colors；MOQ 100 m / 109 yd | See stage-prop and backdrop material |
| `w4_p7_moq` | 2026-10-12 | H2013090104 | 询价前先确认：这款 rainbow dot knit 的 MOQ 是多少？ | FAQ 单图或 3 图轮播 | 圆点 foil 近景 Pin | Slight stretch；90 GSM；28 colors；MOQ 200 m / 219 yd | Check MOQ and color options |
| `w4_p8_selection` | 2026-10-15 | H2013120102 | 蓝紫渐变 4-way stretch 更适合哪些 performance 应用？ | 应用选择轮播 | 蓝紫渐变 Pin | 4-way stretch；150 cm / 59 in；180 GSM；1 standard color；availability to be confirmed | Review the product before sampling |

### 2026-10-16 至 2026-10-19：月末复盘

- 汇总 8 个主题在两个渠道的展示、点击和站内行为
- 保留能带来目标产品访问、CTA 点击或询盘的主题
- 一个内容形式至少执行 2 次后再判断；如果持续有展示但 0 outbound click 且 GA4 无对应产品访问，则停止或重做该形式
- 不根据点赞数量单独决定保留
- 不扩大到新的社媒平台，除非现有两个渠道已经形成可重复的制作和追踪流程

## 4. 文案结构

### LinkedIn 主帖

每条控制为一个采购问题和一个产品链接：

```text
Hook：采购商会遇到的具体问题，不使用泛泛的“新品展示”。

Buyer context：说明这个问题会影响哪类应用或采购判断。

Confirmed facts：
- 2-4 个产品页已确认规格
- MOQ、颜色或样品信息只使用当前产品页内容
- 未确认的库存、交期、测试或定制范围明确写 to be confirmed / discuss by project

Decision tip：建议采购商通过样品确认颜色、弹力、手感、表面效果或缝制表现。

CTA：一个动作，例如 View specifications 或 Review sample options。

Link：只放该产品的 UTM 链接。
```

建议正文长度为 80-150 个英文单词。首行直接写采购问题；不使用未经证实的 `best quality`、`guaranteed`、`certified`、`ready to ship` 或具体交期。

### 专业采购口吻

内容应像面料采购、产品开发或供应商团队在分享实际判断，不写成通用营销模板：

- 从应用、规格或验样中的真实问题切入，不使用夸张式悬念
- 说明某项参数为什么会影响选料，而不只是罗列卖点
- 使用 `For this application, we would check...`、`Before confirming bulk...` 等行业工作语言
- 对照片无法证明的手感、回弹、色差、缝制和耐用表现，明确建议通过实物样确认
- 少用 `amazing`、`stunning`、`perfect`、`game-changing` 等形容词
- 不使用连续反问、整齐的三段式口号、过量 emoji 或泛泛的结尾总结
- 每条只保留一个自然 CTA，例如查看规格或申请样品

第一条 LinkedIn 内容建议稿：

```text
For iridescent stage and dancewear fabrics, surface shine is only the first check.

The base construction matters just as much. A fabric may look similar in a photo but behave differently once it is cut, stretched and sewn into a fitted garment.

For this style, the confirmed specifications are:

• 4-way stretch
• 150 cm / 59 in width
• 180 GSM
• MOQ: 100 m / 109 yd

Before confirming bulk production, we would recommend checking a physical sample under the lighting used for the final costume. Stretch recovery, color shift and sewing performance should also be reviewed with the buyer's own process.

Product details:
[UTM link]
```

### Pinterest Pin

```text
Title：产品效果或采购问题，40-80 characters
Description：1 个应用场景 + 2-3 个已确认规格 + 1 个样品建议
Destination：对应产品页 UTM 链接
Image text：最多 1 个主题句 + 2 个规格，不把整段文案压在图片上
```

### 可复用 CTA

- View product specifications
- Check MOQ and color options
- Review the sample option
- Compare the surface and stretch details
- See the most relevant fabric for this application

## 5. 链接与 UTM 规则

统一规则：

```text
https://nixiafabric.com/products/{slug}/
?utm_source={linkedin|pinterest}
&utm_medium=organic_social
&utm_campaign=organic_social_20260919_20261019
&utm_content={content_id}
```

参数约束：

- `utm_source`：只使用 `linkedin` 或 `pinterest`
- `utm_medium`：统一使用 `organic_social`，不得混用 `social`、`organic`、`post`
- `utm_campaign`：本周期固定为 `organic_social_20260919_20261019`
- `utm_content`：使用内容日历中的唯一 ID；LinkedIn 与 Pinterest 保持同一 ID，由 source 区分渠道
- 全部使用小写 ASCII 和下划线，不使用空格、中文或发布日期之外的临时命名
- 不使用短链，避免采购商看不到目标域名
- 一条内容只有一个站内链接；评论中不追加第二个产品链接

产品落地页映射：

| Content ID | 唯一落地页 |
|---|---|
| `w1_p1_effect` | `/products/plain-iridescent-laser-spandex-4-way-stretch/` |
| `w1_p2_specs` | `/products/full-print-hot-stamping-spandex-milk-silk/` |
| `w2_p3_sample` | `/products/iridescent-laser-hot-stamping-stretch-ice-silk/` |
| `w2_p4_application` | `/products/shiny-foil-4-way-stretch-knit-fabric/` |
| `w3_p5_gradient` | `/products/iridescent-gradient-laser-ice-silk/` |
| `w3_p6_use_case` | `/products/dense-dot-foil-suede-look-fabric/` |
| `w4_p7_moq` | `/products/rainbow-dot-laser-foil-knit-fabric/` |
| `w4_p8_selection` | `/products/blue-purple-gradient-laser-foil-spandex-fabric/` |

示例：

```text
https://nixiafabric.com/products/plain-iridescent-laser-spandex-4-way-stretch/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=organic_social_20260919_20261019&utm_content=w1_p1_effect
```

## 6. GA4 与周报口径

站点当前已保留首次访问的 `utm_source`、`utm_medium`、`utm_campaign`、`utm_content`，并将归因信息带入询盘表单。产品详情页当前已有以下 GA4 事件：

- `product_view`
- `product_cta_click`
- `rfq_open`
- `product_contact_click`
- `whatsapp_click`
- `rfq_form_start` / `contact_form_start`
- `generate_lead`

GA4 查看维度：

- Session source / medium
- Session campaign
- Session manual ad content
- Landing page + query string
- Event name
- Product path 或事件参数中的产品信息

每周记录：

| Week | Channel | Content ID | Product | Impressions | Platform clicks | GA4 product visits | `product_cta_click` | `rfq_open` | `generate_lead` | Notes |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---|
| W1 | LinkedIn | `w1_p1_effect` | P0001 | 0 | 0 | 0 | 0 | 0 | 0 | 待发布后记录 |

指标定义：

- 展示：平台原生 impressions
- 平台点击：LinkedIn 原生 `Clicks` 或 Pinterest `Outbound clicks`
- LinkedIn 的 `Clicks` 还可能包含对内容、公司名或 Logo 的点击，不能单独视为产品页访问；LinkedIn 导流以 GA4 对应 UTM 的产品访问为准
- Pinterest 的 `Outbound clicks` 表示引导至 Pinterest 站外目标的动作，但仍需与 GA4 产品访问交叉核对
- 产品访问：GA4 中对应 source、campaign、content 和产品路径的访问，优先以 `product_view` 核对
- CTA 点击：`product_cta_click`
- 询盘打开：`rfq_open`
- 询盘：`generate_lead`

每周复盘只回答 4 个问题：

1. 哪个采购问题带来了目标产品访问？
2. 哪种素材形式带来了 outbound click，而不只是展示？
3. 哪个产品页产生了 CTA 点击或询盘打开？
4. 下周保留、修改或停止什么？

## 7. 真实性与发布检查

每条发布前执行：

- [ ] 产品、SKU、宽度、克重、弹力、颜色和 MOQ 与当前产品页一致
- [ ] 认证只在当前产品页有明确依据时使用
- [ ] 不把 `testing can be arranged` 写成产品已经通过特定测试
- [ ] 不把 `availability to be confirmed` 写成现货
- [ ] 不写未经确认的批量交期
- [ ] 不虚构客户名称、客户案例、订单量、销售量或使用结果
- [ ] 图片没有改变真实颜色、纹理、光泽或产品结构
- [ ] 链接只指向当前内容对应的产品页
- [ ] UTM source、medium、campaign、content 已检查

## 8. 等待用户确认

开始制作首周内容前，需要用户在本任务中确认：

1. 辅助渠道是否采用 Pinterest。
2. 现有 8 个产品中，是否有本月不希望重点推广的产品。
3. 哪些图片或视频可明确用于拉伸、背面、光线变化和应用展示。
4. 是否允许竖版裁切、添加简短英文标题和规格文字。
5. 两条现有产品视频和品牌化工厂视频是否允许用于社媒剪辑。
6. 平台账号目前是否已有公司主页、Pinterest Business Account 和可查看数据的权限。

用户确认前，本计划不进入发布、排程或账号操作阶段。

## 9. 平台口径参考

- LinkedIn Page content analytics：`https://www.linkedin.com/help/linkedin/answer/a564051`
- Pinterest Analytics：`https://help.pinterest.com/en/business/article/pinterest-analytics`
- Pinterest Pin performance and linking guidance：`https://help.pinterest.com/en/business/article/pin-performance-and-distribution`
- YouTube external link behavior：`https://support.google.com/youtube/answer/13748639`
