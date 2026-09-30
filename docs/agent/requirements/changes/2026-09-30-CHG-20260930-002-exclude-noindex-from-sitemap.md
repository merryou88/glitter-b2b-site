---
change_id: CHG-20260930-002-exclude-noindex-from-sitemap
date: 2026-09-30
status: implemented
requirements:
  - REQ-SHELL-002
modules:
  - site-shell
---

# 排除 noindex 页面出现在 Sitemap

## 变更原因
本地构建输出包含 45 个 HTML 文件，但其中包含 404、Thank You 和 Privacy 等不应进入搜索索引的页面。原 sitemap 只排除了 Thank You，导致带有 `noindex` 的 Privacy 页面仍出现在 sitemap 中，造成 sitemap 与页面索引信号不一致。

## 变更前
- `thank-you` 已设置 `noindex` 且不进入 sitemap。
- `privacy` 已设置 `noindex`，但仍进入 sitemap。
- `404` 不应作为正常内容页进入 sitemap。

## 变更后
- Astro sitemap 过滤 `thank-you`、`privacy` 和 404 路径。
- sitemap 只保留可作为搜索入口的公开内容页。
- 保持页面本身的 `noindex` 设置不变。

## 验收条件
- 构建后的 sitemap 不包含 `/thank-you/`、`/privacy/` 或 `/404/`。
- 公开首页、产品、应用、博客、公司和政策入口仍正常生成。
- `npm run build` 与 `npm run validate:products` 通过。

## 实现位置
- `astro.config.mjs`
- `docs/agent/requirements/current/site-shell.md`

## 验证结果
- 待执行：`npm run build`。
- 待检查：sitemap URL 数量与 noindex 页面排除结果。
