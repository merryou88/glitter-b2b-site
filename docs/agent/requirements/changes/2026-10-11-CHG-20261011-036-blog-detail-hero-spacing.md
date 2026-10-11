---
change_id: CHG-20261011-036-blog-detail-hero-spacing
status: active
---

# 收紧 Blog 详情页 Hero 上下间距

## 变更前

Blog 详情页 Hero 桌面端使用较大的 `space-4xl` 上下间距，移动端使用 `space-3xl`，占用较多首屏空间。

## 变更后

桌面端改为 `space-2xl`，移动端改为 `space-xl`，让文章正文更早进入首屏；标题、摘要、标签、署名和图片内容保持不变。

## 验收标准

- 桌面端和移动端 Hero 上下留白均明显收紧。
- Hero 内容完整显示且不发生遮挡。
- Blog 列表页和其他页面不受影响。

## 影响与实现

- 影响模块：`blog-knowledge`
- 实现位置：`src/pages/blog/[slug].astro`

## 验证结果

待运行 `npm run build`，并手动检查桌面端和移动端 Blog 详情页。
