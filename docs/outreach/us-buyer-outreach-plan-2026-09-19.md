# Nixia Fabric 美国买家主动开发计划

- 执行周期：2026-09-19 至 2026-10-19
- 当前状态：仅建立执行计划和追踪框架；不发送邮件、不联系外部公司
- 目标市场：美国舞台服、舞蹈服、演出服、泳装、服装开发工作室、面料经销商
- 目标结果：为现有 8 个真实产品带来目标访问、有效回复、样品请求、报价请求和合格询盘

## 0. 用户已确认执行方式

- 优先行业：第一阶段先从舞蹈服、舞台服、演出服、cheer / dance team performance wear 开始。
- Week 1 名单规模：建立 20-30 家目标公司候选名单。
- 联系渠道：组合方式，包括公司公开邮箱、官网表单、LinkedIn 人工确认岗位；不抓取无关个人信息。
- 发信身份：已确认使用个人 Gmail。只采用低频、逐封、人工发送；不群发、不使用自动化群发工具、不伪造企业邮箱发件人身份。邮件签名明确写 `Nixia Fabric`、官网和真实回复邮箱；接收转发型企业邮箱仅作为收信/转发备份。
- 执行门槛：先做 5 家小样本人工审核，用户确认目标客户和开发方式后，再进入每周 20-30 家节奏。

## 1. 理想客户画像

优先客户应满足至少 3 个条件：

| ICP | 公司类型 | 采购岗位 | 高匹配信号 | 典型需求 |
|---|---|---|---|---|
| A | 舞台服、舞蹈服、啦啦队服、体操服制造商 | Sourcing Manager、Fabric Buyer、Product Developer、Costume Production Manager | 网站展示定制服装、团队订单、演出服、foil/holographic/sparkle/stretch 类材料 | 快速找样、稳定弹力、舞台灯光效果、批量交期 |
| B | Performance wear、festival wear、cosplay、Halloween costume 品牌或工作室 | Founder、Designer、Production Manager、Development Coordinator | 小批量系列开发、季节性上新、需要视觉效果强的面料 | 样品确认、颜色/图案定制、MOQ 可控 |
| C | 泳装、舞蹈紧身衣、bodysuit 开发商 | Fabric Buyer、Technical Designer、Product Developer | 产品含 swimwear、bodysuit、4-way stretch、foil/metallic 表面 | 弹力、回弹、缝制测试、样衣阶段找料 |
| D | 美国面料批发商、经销商、舞台服材料供应商 | Owner、Buyer、Category Manager、Merchandising Manager | 已销售 spandex、dancewear fabric、holographic fabric、costume fabric | 现货色卡、补充 SKU、可转售样册 |
| E | 服装开发工作室、样衣室、采购代理 | Studio Director、Material Sourcing、Production Coordinator | 服务独立品牌、演出项目、服装开发项目 | 快速推荐材料、样品包、报价信息完整 |

不优先开发：纯零售消费者、手工 DIY 小店、鞋包配件为主且无服装/舞台应用、无公司身份的个人邮箱、明显不采购面料的演出服务公司。

## 2. 目标公司筛选条件

每周筛选约 20-30 家高匹配公司，宁可少而准，不做低质量批量发送。

| 维度 | 合格条件 | 排除条件 |
|---|---|---|
| 地区 | 美国公司、美国采购办公室、服务美国品牌的开发工作室 | 地区不明且无法确认业务市场 |
| 应用 | 舞台服、dancewear、cheerleading、performance wear、swimwear、festival/cosplay/Halloween costume、面料批发 | 鞋材、手袋、工艺玩具、家居装饰为主 |
| 产品信号 | 出现 foil、holographic、metallic、iridescent、spandex、stretch、costume fabric、sparkle props/backdrops 等词 | 只销售成衣零售且无开发/批量采购迹象 |
| 公司规模 | 有 B2B 采购或产品开发可能；小团队可接受但要有清晰产品线 | 纯个人账号、无官网、无业务说明 |
| 联系方式 | 公司公开的通用邮箱、采购/客服邮箱、官网联系表单；LinkedIn 仅用于确认岗位，不抓取无关个人信息 | 私人邮箱、个人电话、无关个人社媒信息 |

名单字段只收集完成 B2B 联系所需信息：

| 字段 | 说明 |
|---|---|
| Week | 第几周 |
| Company | 公司名称 |
| Website | 官网 |
| State / Region | 美国州或区域，无法确认则填 `To be confirmed` |
| Segment | 舞蹈服 / 舞台服 / 泳装 / 工作室 / 面料经销商等 |
| Product Signals | 公开页面看到的产品或关键词 |
| Buyer Role Target | 目标岗位，不写无关个人信息 |
| Public Contact Channel | 公司公开邮箱或联系表单 |
| Match Reason | 为什么适合 Nixia |
| Priority | A / B / C |
| Recommended Nixia Product | 最相关产品 slug |
| UTM Content | 产品或场景内容标记 |
| Status | Not contacted / Draft ready / Sent / Replied / Sample requested / Quote requested / Qualified inquiry / Not fit |
| Notes | 只记录业务相关事实 |

## 3. 产品匹配规则

统一链接格式：

```text
https://nixiafabric.com/products/{slug}/?utm_source=outbound_email&utm_medium=email&utm_campaign=us_buyer_outreach&utm_content={content}
```

8 个产品对应的推荐场景：

| SKU | 产品页 | 优先匹配行业 | utm_content |
|---|---|---|---|
| P0001 | `/products/plain-iridescent-laser-spandex-4-way-stretch/` | dancewear、stage costume、performance wear、festival costumes | `plain_iridescent_stretch_stage_dance` |
| P0002 | `/products/full-print-hot-stamping-spandex-milk-silk/` | dancewear、stage costume、custom print performance outfits | `full_print_foil_spandex` |
| H2013060105 | `/products/shiny-foil-4-way-stretch-knit-fabric/` | performance wear、party wear、festival costumes、dancewear | `shiny_foil_4way_knit` |
| H2013060106 | `/products/non-shedding-glitter-suede-look-laser-foil-fabric/` | stage props、photo backdrops、event decoration、costume accents | `dense_dot_foil_suede_stage_props` |
| P0003 | `/products/iridescent-laser-hot-stamping-stretch-ice-silk/` | dancewear、performance outfits、stage costume | `iridescent_stretch_ice_silk` |
| P0005 | `/products/iridescent-gradient-laser-ice-silk/` | dancewear、costumes、cosplay、gradient visual concepts | `iridescent_gradient_ice_silk` |
| H2013090104 | `/products/rainbow-dot-laser-foil-knit-fabric/` | stage costumes、cheerleading/team performance、costume makers | `rainbow_dot_laser_knit` |
| H2013120102 | `/products/blue-purple-gradient-laser-foil-spandex-fabric/` | swimwear、Halloween costumes、dancewear、4-way stretch stagewear | `blue_purple_gradient_spandex` |

执行前数据核对：`src/data/allProducts.js` 当前有 8 个产品；`src/data/products.json` 摘要当前只有 7 条，缺少 `H2013090104`，后续做自动化表格时需以 `allProducts.js` 为准。

## 4. 每周执行节奏

| 周期 | 日期 | 主要动作 | 产出 |
|---|---|---|---|
| Week 1 | 2026-09-19 至 2026-09-25 | 确认 ICP、名单字段、产品匹配、邮件模板；试筛 20-30 家但不发送 | 用户确认后的目标名单 v1 |
| Week 2 | 2026-09-26 至 2026-10-02 | 对确认名单写个性化首封邮件；按产品分组；记录 UTM | 可发送草稿和追踪表 |
| Week 3 | 2026-10-03 至 2026-10-09 | 根据用户确认执行第一轮小批量；只跟进打开/点击/高匹配未回复对象 | 回复、点击、样品/报价请求记录 |
| Week 4 | 2026-10-10 至 2026-10-16 | 第二轮筛选和低质量停止规则；比较行业、岗位、文案和产品匹配 | 复盘结论和下一周优化 |
| Buffer | 2026-10-17 至 2026-10-19 | 汇总 30 天结果，判断是否扩展行业或产品 | 最终复盘表 |

## 5. 邮件模板

模板必须短、具体、公司相关。每封首邮只推荐 1 个主产品，最多附 1 个备选产品。不夸大认证、库存或价格，不使用误导性标题。

### 首封邮件

Subject options:

- Fabric option for {company application}
- Foil stretch fabric for {dancewear / costumes / swimwear}
- Sample idea for your {product line}

Body:

```text
Hi {first name or team},

I saw that {Company} works on {specific product/application from public website}. Nixia Fabric supplies foil, holographic and iridescent stretch fabrics for stage costumes, dancewear, performance wear and related development projects.

The most relevant option may be this one:
{Product name}
{UTM product link}

It could fit {reason: stretch / stage-light effect / gradient color / swimwear-ready 4-way stretch / props-backdrop surface}. Samples are available for checking color, stretch, surface effect and sewing behavior before bulk order.

Would it be useful if I sent a short sample/quotation note for this material?

Best,
Nixia Fabric
```

### 跟进 1

发送时机：首封后 4-6 个工作日，且公司仍为高匹配。

```text
Hi {first name or team},

Just following up in case this fabric direction is relevant for an upcoming {costume / dancewear / swimwear / performance} project.

If {Product name} is not the right match, I can also suggest a different foil or iridescent stretch fabric based on the garment type, stretch requirement and target color effect.

Would a sample comparison be helpful?
```

### 跟进 2

发送时机：跟进 1 后 7-10 个工作日，仅用于 A 级公司；之后停止。

```text
Hi {first name or team},

I will close the loop for now. If you source foil, holographic or iridescent stretch fabric later, this page may be useful as a reference:
{UTM product link}

For a quick recommendation, the only details we need are application, target color/effect, estimated quantity and timeline.

Best,
Nixia Fabric
```

## 6. 合规与质量规则

- 不购买、抓取或扩散无关个人信息；优先使用公司公开联系方式。
- 不记录家庭地址、私人电话、个人社媒隐私、无关个人经历等信息。
- 对没有明确采购匹配的公司不发送。
- 每家公司最多 1 封首邮 + 1-2 次跟进；无回复后停止。
- 邮件内容必须说明具体匹配理由，不使用大批量泛化文案。
- 个人 Gmail 阶段先发送 5 家小样本，观察退信、回复和对方是否愿意继续沟通；确认流程稳定后再逐步扩展到每周 20-30 家候选公司。
- 如果对方要求停止联系，状态标记为 `Do not contact`，不再跟进。
- 不以发送数量作为成功指标；以有效回复、样品请求、报价请求和合格询盘为核心指标。

## 7. 每周追踪表

| Week | Company | Segment | Priority | Product | UTM Content | Sent | Replied | Clicked | Sample Request | Quote Request | Qualified Inquiry | Result Notes | Stop Reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| W1 | Example Company | Dancewear | A | `plain-iridescent-laser-spandex-4-way-stretch` | `plain_iridescent_stretch_stage_dance` | No | No | No | No | No | No | Plan only | Waiting user confirmation |

周复盘字段：

| Week | Best Segment | Best Role | Best Product | Best Subject | Weak Match Pattern | Stop / Continue Decision | Next Adjustment |
|---|---|---|---|---|---|---|---|
| W1 | 待确认 | 待确认 | 待确认 | 待确认 | 待确认 | 只准备，不发送 | 等用户确认目标客户和开发方式 |

## 8. 用户确认后才能执行的事项

执行前需要用户确认：

1. 是否优先从舞蹈服/舞台服开始，还是先开发泳装、工作室或面料经销商。
2. 是否允许建立第一周 20-30 家目标公司名单。
3. 使用哪种联系渠道：公司公开邮箱、官网表单、LinkedIn 人工确认，或组合方式。
4. 是否把小样本文案逐家公司写成可审核草稿。
