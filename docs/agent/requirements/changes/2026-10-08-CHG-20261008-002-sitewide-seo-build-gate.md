---
change_id: CHG-20261008-002-sitewide-seo-build-gate
date: 2026-10-08
status: implemented
requirements:
  - REQ-SHELL-013
modules:
  - site-shell
  - product-catalog
  - blog-knowledge
---

# 全站 SEO 构建门禁

## 变更原因
原有构建流程只执行产品数据校验，title 长度等全站 SEO 问题依赖临时扫描，新增页面可能在最终 Layout 处理后产生超长标题、canonical 错误、站内断链或 sitemap 与 robots 冲突。

## 变更内容
- 新增 `scripts/validate-seo.mjs`，扫描最终生成 HTML 与 sitemap。
- 校验 title、description、重复元数据、canonical、H1、站内页面链接、sitemap 索引状态和图片 alt。
- 将 `npm run validate:seo` 接入 `npm run build`，校验失败时构建失败。
- 对 noindex 页面与媒体下载链接做明确区分，避免错误要求进入 sitemap 或误报为页面断链。

## 验收结果
- `npm run validate:seo` 通过：57 个 HTML 页面、54 个 sitemap URL 和全部站内页面链接通过校验。
- `npm run build` 必须依次通过 Astro、18 个公开产品校验和全站 SEO 校验。

## 实现位置
- `scripts/validate-seo.mjs`
- `package.json`
