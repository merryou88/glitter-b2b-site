---
change_id: CHG-20261020-001-thank-you-google-conversion
date: 2026-10-20
status: implemented
requirements:
  - REQ-COMPANY-015
  - REQ-SHELL-030
modules:
  - company-pages
  - site-shell
---

# 感谢页 Google 转化事件

## 变更原因
用户要求在表单提交后的感谢页 head 添加指定 Google 事件。
## 变更前
感谢页无指定事件；全站统计默认延迟加载。
## 变更后
感谢页 head 注册事件回调，立即加载共享统计，config 后发送指定事件。其他页面继续延迟加载。
## 验收条件
事件仅出现在感谢页 head；每次加载一次；config 在 event 前；opt-out 不发送；保留 noindex。
## 影响范围与兼容性
Layout 新增可选 head 插槽及立即加载属性。感谢页直接访问或刷新同样触发，不新增提交去重逻辑。
## 实现位置
`src/layouts/Layout.astro`、`src/pages/thank-you.astro`
## 验证结果
npm run build 通过（18 个产品、59 个 HTML 页面及内链校验通过）；产物脚本模拟验证 head 位置、单次事件、config 顺序、opt-out 和仅感谢页包含事件通过。不代表线上 Google Ads 已接收。
## 来源
用户提供的 Google tag 事件代码及添加位置要求。
