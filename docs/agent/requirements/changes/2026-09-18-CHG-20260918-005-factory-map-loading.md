# CHG-20260918-005：Factory 地图加载稳定性优化

- 状态：active
- 影响需求：`REQ-COMPANY-009`
- 变更日期：2026-09-18

## Before

- 页面通过请求 Google Maps 静态资源判断 Google 是否可访问。
- 页面加载后立即开始 6 秒倒计时，即使懒加载 iframe 尚未进入视口也可能被判定为失败。
- 探测失败或超时后，页面会隐藏 iframe 并切换为大面积备用地址卡。

## After

- 删除静态资源探测、固定超时和自动隐藏 iframe 的脚本。
- Google Maps iframe 保留浏览器原生 `loading="lazy"`。
- 为 iframe 增加描述工厂位置的 `title`。
- 地图下方始终展示工厂地址和 `Open Google Maps` 外部链接。
- 移动端将地址和外链纵向排列，避免内容挤压。

## Acceptance Criteria

- 地图不会因为用户未在 6 秒内滚动到页面底部而被误判失败。
- 生成页面不包含 `maps.gstatic.com` 探测请求、6 秒超时或地图隐藏状态。
- 工厂地址和 Google Maps 外链始终可见。
- 页面构建通过。

## Impact

- 仅影响 `/factory/` 的地图加载和备用入口展示。
- 不改变工厂地址、联系信息或其他页面。

## Implementation

- `src/pages/factory.astro`
- `docs/agent/requirements/current/company-pages.md`
- `docs/agent/requirements/INDEX.md`

## Verification

- 已通过：`npm run build`
- 已通过：产品数据校验，8 个公开产品通过
- 已通过：源码和生成页面不存在旧地图静态资源探测、地图专属超时或自动隐藏状态
- 已通过：生成页面包含懒加载 iframe、可访问名称、常驻工厂地址和 Google Maps 外链
