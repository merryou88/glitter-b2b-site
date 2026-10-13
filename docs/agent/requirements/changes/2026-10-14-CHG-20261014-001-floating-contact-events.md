# CHG-20261014-001：增加浮动 Q 和 WhatsApp 点击事件

- 状态：active
- 关联需求：REQ-SHELL-028

## 变更内容

- 移动端左下角 Q 按钮点击发送 `floating_q_click`。
- 右下角 WhatsApp 浮动图标点击发送 `floating_whatsapp_click`。
- 联系弹窗内 WhatsApp 链接点击发送 `whatsapp_click`。
- 事件统一使用现有 `window.__nixiaTrack`，附带 `interaction_location` 参数。

## 验收与影响

原有 RFQ 弹窗、WhatsApp 外链和 GA4 延迟加载逻辑保持不变。使用 `?ga_debug=1` 后可通过 GA4 DebugView 检查事件；如需计入 Google Ads 转化，需要在 GA4/Google Ads 后台另行标记和导入。

## 验证结果

- `npm run build`：通过（含产品数据和 SEO 校验）
- `git diff --check`：通过
