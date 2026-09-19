---
change_id: CHG-20260919-001
status: implemented
date: 2026-09-19
requirements:
  - REQ-COMPANY-008
  - REQ-COMPANY-010
  - REQ-DATA-006
modules:
  - company-pages
  - content-data
---

# Factory 品牌化实拍视频

## 变更前
- Factory 页面只说明买家可以申请工厂视频，没有直接展示已经提供的实拍素材。
- 原始视频画面方向不适合网页直接播放，也没有 Nixia Fabric 品牌标识。

## 变更后
- 保留原始实拍画面和原声，校正画面方向并置于标准 16:9 品牌画布中。
- 成片加入 Nixia Fabric 片头、`nixiafabric.com`、固定低干扰水印和品牌片尾。
- Factory 页面直接嵌入品牌化 MP4，同时保留联系入口用于安排项目相关的视频验厂。
- 播放器使用 poster、`preload="metadata"`、`playsinline` 和固定宽高比，不自动播放。
- 未品牌化源视频移出 `public/` 并归档到 `products-data/original-videos/`，避免随站点公开部署。

## 验收条件
- `/factory/` 可正常引用并播放品牌化视频。
- 成片为 H.264 High / AAC LC MP4，分辨率 1280×720，画面方向正确。
- 片头、主画面水印和片尾均可见，且水印不遮挡主要生产画面。
- 移动端播放器保持 16:9，不因媒体加载产生明显布局位移。
- Factory 页面仍不出现 glitter、chunky 或 sparkle 专属内容。

## 影响与实现位置
- `src/pages/factory.astro`
- `public/images/factory/nixia-factory-branded.mp4`
- `public/images/factory/nixia-factory-poster.jpg`
- `products-data/original-videos/images/factory/factory.mp4`
- `docs/agent/modules/company-pages.md`
- `docs/agent/modules/content-data.md`
- `docs/agent/requirements/current/company-pages.md`
- `docs/agent/requirements/current/content-data.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `npm run build` 通过，构建 38 个静态页面，产品数据校验通过。
- 生成 HTML 已确认引用品牌版 MP4 和 poster，播放器包含 `controls`、`playsinline`、`preload="metadata"`，且不包含 `autoplay`。
- 成片已确认为 H.264 High / AAC LC、1280×720、30 fps、58.82 秒，并完成片头、主画面水印和片尾抽帧检查。
- `git diff --check` 通过；Factory 页面源码和构建 HTML 未出现 `glitter`、`chunky` 或 `sparkle`。
