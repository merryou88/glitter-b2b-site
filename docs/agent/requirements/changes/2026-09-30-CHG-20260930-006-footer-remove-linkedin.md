---
change_id: CHG-20260930-006
date: 2026-09-30
status: implemented
requirements:
  - REQ-SHELL-003
modules:
  - site-shell
---

# Footer 移除 LinkedIn 图标入口

## 变更原因
当前没有可访问的 Nixia Fabric LinkedIn 企业主页，Footer 中的 LinkedIn 图标链接会指向失效公司页，影响公开站点入口可信度。

## 变更前
Footer 品牌栏展示 Facebook 与 LinkedIn 两个社媒图标，其中 LinkedIn 指向 `https://linkedin.com/company/nixiafabric`。

## 变更后
Footer 暂时只保留当前已有的 Facebook 图标入口，不展示 LinkedIn 图标入口。后续如创建并确认真实可访问的 LinkedIn 企业页，可再恢复该入口并更新链接。

## 验收条件
- Footer 不再渲染 LinkedIn 图标入口。
- 源码中不再出现失效的 `linkedin.com/company/nixiafabric` 链接。
- 其他 Footer 导航和联系入口不受影响。

## 影响范围
影响全站公共 Footer 的可见社媒入口；不影响 Header、FloatingContact、RFQ 表单或产品页内容。

## 兼容性
移除失效外链，不改变站内路由、SEO canonical、结构化数据或表单行为。

## 实现位置
- `src/components/Footer.astro`
- `docs/agent/requirements/current/site-shell.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `npm run build`：通过，并连带通过 `npm run validate:products`。
- `rg -n "linkedin.com/company/nixiafabric|aria-label=\"LinkedIn\"|LinkedIn" src public dist`：无输出，公开源码和构建产物中无 LinkedIn 入口残留。

## 来源
用户于 2026-09-30 明确要求：目前没有 LinkedIn 企业页面，先去掉 Footer 中的 LinkedIn 图标入口。
