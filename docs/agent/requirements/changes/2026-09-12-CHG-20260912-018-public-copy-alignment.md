change_id: CHG-20260912-018-public-copy-alignment
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-006
  - REQ-DATA-003
  - REQ-PRODUCT-001
  - REQ-COMPANY-007
modules:
  - site-shell
  - content-data
  - product-catalog
  - company-pages

# 对齐公开页面定位文案

## 变更原因
前一轮已将公开产品和应用入口收窄为表演服装市场，但部分产品镜像数据、样品页、工厂页、质量页和共享联系入口仍保留退出行业或泛行业表述，可能继续分散客户认知。

## 变更前
公开相关文案仍出现泳装、泛时装、背景装饰、合成革泛品类以及旧产品组件分支等表述。

## 变更后
4 个公开产品的数据说明、标签和典型应用统一为舞台服装、舞蹈服、表演服及 Cosplay/Carnival Costume；首页、样品页、工厂页、认证页、404、浮动联系入口和共享结构化数据统一使用 performance fabric 定位。历史产品数据和素材仍保留用于兼容参考，但不进入公开产品链。

## 验收条件
- 公开产品页面不再引导泳装、泛时装或装饰类用途。
- 公司、样品、认证、首页、404 和联系入口不推广退出行业。
- 组件公开分支只保留当前 4 个产品。
- 构建仍生成 4 个产品详情页和 2 个表演服装应用页。

## 实现位置
`src/data/products.json`、`src/components/ProductDetail.astro`、`src/components/HeroCarousel.astro`、`src/components/FloatingContact.astro`、`src/layouts/Layout.astro`、`src/pages/index.astro`、`src/pages/about.astro`、`src/pages/factory.astro`、`src/pages/certifications.astro`、`src/pages/sample-policy.astro`、`src/pages/404.astro`

## 验证结果
已执行 `npm run build`，构建和 `npm run validate:products` 通过；最终构建需再次确认公开生成页面文本和路由数量。

## 来源
用户要求删除其他行业，避免网站定位混乱。
