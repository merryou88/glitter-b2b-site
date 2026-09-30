---
change_id: CHG-20260930-008
date: 2026-09-30
status: implemented
requirements:
  - REQ-SHELL-003
modules:
  - site-shell
---

# Footer Facebook 链接替换为公共主页 ID 地址

## 变更原因
当前 Facebook 公共主页已经存在，但品牌用户名链接尚未稳定。用户提供并确认了可打开的 Facebook 分享链接，该链接解析到当前公共主页 `Nixia Textiles | Guangzhou`，后续主页名称会改为 Nixia Fabric。

## 变更前
Footer Facebook 图标指向占位式地址 `https://facebook.com/nixiafabric`。

## 变更后
Footer Facebook 图标指向当前可访问的公共主页 ID 链接：

`https://www.facebook.com/people/Nixia-Textiles/61591112512342/`

后续如 Facebook 页面名称和用户名改为 Nixia Fabric，可再替换为正式用户名链接。

## 验收条件
- Footer Facebook 图标链接使用公共主页 ID 地址。
- Footer 不再使用未确认可用的 `facebook.com/nixiafabric` 占位地址。
- Footer 其他导航、联系入口和社媒入口不受影响。

## 影响范围
影响全站公共 Footer 的 Facebook 外链；不影响站内路由、表单、Header、FloatingContact 或产品内容。

## 兼容性
外链目标从占位用户名切换为可访问页面 ID，不改变页面结构或站内行为。

## 实现位置
- `src/components/Footer.astro`
- `docs/agent/requirements/current/site-shell.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `npm run build`：通过，并连带通过 `npm run validate:products`。
- 构建产物 `dist` 中已出现 `https://www.facebook.com/people/Nixia-Textiles/61591112512342/`。
- 构建产物 `dist` 中不再出现 `https://facebook.com/nixiafabric`。

## 来源
用户于 2026-09-30 提供 Facebook 公共主页分享链接，并要求先用页面 ID 链接替换网站 Footer 中的 Facebook 入口。
