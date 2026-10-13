---
module: inquiry-forms
status: current
---

### REQ-FORM-001：联系表单字段与跳转保持固定
- 状态：active
- 当前规则：联系表单要求 `name`、`email`、`message` 必填，提交成功后跳转 `/thank-you/`。
- 验收条件：表单校验、错误提示和成功跳转都可用。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/ContactForm.astro`
- 测试路径：手动提交联系表单
- 最后变更编号：待确认
- 待确认事项：`WORKER_URL` 是当前前端请求目标

### REQ-FORM-002：RFQ 表单必须携带产品上下文
- 状态：active
- 当前规则：RFQ 表单要求 `fullName`、`email`、`message`，并附带产品名、SKU、重量、宽度、数量和 honeypot。
- 验收条件：从产品页或首页打开 RFQ 后，提交能把上下文送到 Worker。
- 影响模块：`inquiry-forms`、`product-catalog`
- 代码路径：`src/components/RfqQuoteForm.astro`、`src/components/RFQQuoteModal.astro`
- 测试路径：从产品页打开弹窗并提交
- 最后变更编号：待确认
- 待确认事项：无

### REQ-FORM-003：前端只负责转发，不直接发邮件
- 状态：active
- 当前规则：前端只把 JSON 发给 Cloudflare Worker，邮件发送不在浏览器内完成。
- 验收条件：前端代码里看不到直接邮件 API 调用。
- 影响模块：`inquiry-forms`、`cloudflare-worker`
- 代码路径：`src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`
- 测试路径：`npm run build`，再配合 Worker 联调
- 最后变更编号：待确认
- 待确认事项：无

### REQ-FORM-004：联系页不自动打开 RFQ 弹窗
- 状态：active
- 当前规则：访问 `/contact/` 时应直接显示页面内联系表单，不自动打开全站 RFQ 弹窗。
- 验收条件：从导航菜单或直接访问 `/contact/` 后，页面可见联系表单且无自动弹窗遮挡。
- 影响模块：`inquiry-forms`
- 代码路径：`src/pages/contact.astro`、`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run build`，手动访问 `/contact/`
- 最后变更编号：CHG-20260916-008-contact-page-no-rfq-autoopen
- 待确认事项：无

### REQ-FORM-005：RFQ 弹窗移动端关闭按钮可见可用
- 状态：active
- 当前规则：RFQ 弹窗在移动端显示高对比度、固定在视口右上方的关闭按钮，按钮保持至少 44px 触控区域，不受弹窗滚动内容遮挡。
- 验收条件：移动端打开 RFQ 弹窗后始终能看到并点击关闭按钮，点击后关闭弹窗并恢复页面滚动；桌面端关闭按钮保持原有表现。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run build`；手动在移动端打开、关闭 RFQ 弹窗
- 最后变更编号：CHG-20261011-020-mobile-rfq-close-button
- 待确认事项：无

### REQ-FORM-006：移动端左下方浮动询盘入口
- 状态：active
- 当前规则：挂载 RFQQuoteModal 的页面在视口宽度不超过 640px 时显示左下方固定大写 Q 询盘图标，背景复用 CTA 黄色变量，触控区域 50px，避让设备安全区。点击复用现有 RFQ 表单，默认 General fabric inquiry；保留已有 URL sku 上下文规则。弹窗打开时隐藏图标，关闭后恢复并返回触发按钮焦点。桌面端不显示；首页现有内联表单不受影响。
- 验收条件：移动端点击图标可打开、关闭现有表单；不遮挡右侧联系方式；桌面端无该入口。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run build`；本地移动端与桌面端浏览检查
- 最后变更编号：CHG-20261012-004-floating-rfq-q-icon
- 待确认事项：无

### REQ-FORM-007：RFQ 前四项展开，后续选填项折叠
- 状态：active
- 当前规则：姓名、公司、询盘类型、邮箱默认显示；从电话开始至附加留言默认折叠，通过居中的加号与选填说明展开，再次点击减号收起。提交按钮独立于折叠区域。折叠不禁用或清空输入，保留现有字段、验证和提交逻辑；桌面与移动端一致。
- 验收条件：默认仅前四项显示，后六项可展开收起；折叠后保留已填值，提交按钮始终不被折叠。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/RfqQuoteForm.astro`
- 测试路径：`npm run build`；本地折叠交互检查
- 最后变更编号：CHG-20261012-003-rfq-optional-fields-collapse
- 待确认事项：无

### REQ-FORM-008：移除 RFQ 左侧步骤标记
- 状态：active
- 当前规则：蓝色侧栏不显示数字 1 和 Contact Info 步骤标记；白色表单区域保留 Contact Info 表头。移动端移除步骤占位并将蓝色区上下内边距压缩至 1.25rem / 1rem。
- 验收条件：桌面和移动端均无左侧步骤标记，右侧表头保留；移动端蓝色内容区随内容收缩。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/RFQQuoteModal.astro`
- 测试路径：`npm run build`；弹窗布局检查
- 最后变更编号：CHG-20261012-005-rfq-sidebar-compact
- 待确认事项：无

### REQ-FORM-009：RFQ 弹窗使用当前站点 Logo
- 状态：active
- 当前规则：询盘弹窗左侧品牌区域使用站点当前 `/logo.png`，不再显示旧版 `NF` 文字标识；Logo 保持可见且按比例缩放，移动端尺寸统一为 52×52px，与首页 Header Logo 一致。
- 验收条件：RFQ 弹窗品牌区域显示与 Header/Footer 一致的 Nixia Fabric Logo；不再渲染 `NF` 旧标识；表单打开、关闭和布局不受影响。
- 影响模块：`inquiry-forms`、`site-shell`
- 代码路径：`src/components/RFQQuoteModal.astro`、`public/logo.png`
- 测试路径：`npm run build`；桌面和移动端打开 RFQ 弹窗检查 Logo。
- 最后变更编号：CHG-20261014-002-rfq-current-logo
- 待确认事项：无
