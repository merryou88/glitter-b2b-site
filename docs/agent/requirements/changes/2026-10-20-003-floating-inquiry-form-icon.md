---
change_id: CHG-20261020-003-floating-inquiry-form-icon
date: 2026-10-20
status: implemented
requirements:
  - REQ-FORM-006
modules:
  - inquiry-forms
---

# 浮动询盘入口改为表单填写图标

## 变更原因
用户指出 Q 无法清晰表达询盘表单入口。
## 变更前
移动端浮动按钮显示字母 Q。
## 变更后
共享浮动按钮显示纸张加笔的内联 SVG，辅助标签和悬停提示为 Open inquiry form。
## 验收条件
首页与产品列表等共享页面不再显示 Q 字母，显示相同表单图标；原有弹窗打开关闭、位置、颜色、50px 触控区域和移动端断点保留。
## 影响范围与兼容性
仅替换图标与辅助文案，保留原统计事件 floating_q_click，避免中断既有统计。
## 实现位置
`src/components/RFQQuoteModal.astro`
## 验证结果
npm run build 通过（18 个产品、59 个页面及内链校验）；产物检查确认首页与产品页按钮包含 SVG、Open inquiry form 辅助标签和原弹窗绑定，且不再包含 Q 字母。
## 来源
用户当前明确要求。
