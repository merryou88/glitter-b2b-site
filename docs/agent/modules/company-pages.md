---
module: company-pages
paths:
  - src/pages/about.astro
  - src/pages/factory.astro
  - src/pages/certifications.astro
  - src/pages/sample-policy.astro
  - src/pages/privacy.astro
  - src/pages/thank-you.astro
  - src/pages/404.astro
triggers:
  - about
  - factory
  - certifications
  - sample policy
  - privacy
  - thank you
  - 404
depends_on:
  - site-shell
  - inquiry-forms
  - content-data
requirement_docs:
  - requirements/current/company-pages.md
---

# company-pages

## 职责
公司介绍、工厂、认证、样品政策、隐私、感谢页和 404 页等静态页面。

## 不负责的范围
不负责目录数据、Worker 代码或 Resend 旧端点。

## 代码入口
- `src/pages/about.astro`
- `src/pages/factory.astro`
- `src/pages/certifications.astro`
- `src/pages/sample-policy.astro`
- `src/pages/privacy.astro`
- `src/pages/thank-you.astro`
- `src/pages/404.astro`

## 关键调用关系
- 所有页面都通过 `Layout` 包装
- 多数页面共用 `CTAButton`
- `thank-you` 是前端表单成功后的落地页

## 数据与状态
- `privacy.astro` 有固定的 `lastUpdated = "August 2026"`
- `thank-you.astro` 使用 `robots="noindex, follow"`
- `404.astro` 使用 `robots="noindex"`

## 外部依赖
- 仅依赖现有静态页面和局部组件

## 修改约束
- 不要在这些页面里硬塞与当前事实无关的证书、政策或统计数值
- 隐私页和认证页改动要先核对是否有对应代码事实

## 验证方式
- `npm run build`
- 手动打开对应路由检查 canonical、noindex 和文案

## 常见问题
- 联系方式与表单流程不同步
- 404/thank-you 忘了保留 noindex
- 隐私文案写进了代码里但没有同步来源
