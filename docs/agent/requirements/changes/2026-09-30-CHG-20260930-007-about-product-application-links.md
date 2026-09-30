---
change_id: CHG-20260930-007-about-product-application-links
date: 2026-09-30
status: implemented
requirements:
  - REQ-COMPANY-012
modules:
  - company-pages
  - product-catalog
---

# About Page Product And Application Links

## 变更原因
Search Console 显示新增曝光主要进入 About 和 Blog 页面。About 页面需要从公司介绍页进一步承担产品与应用页分流作用，把有限曝光导向产品目录、定制开发和应用场景页面。

## 变更前
- About 首屏主要入口为联系页和工厂页。
- Our Focus 区域展示能力项，但不是可点击入口。
- 底部 CTA 偏向泛公司合作，没有明显引导到产品目录和应用页。

## 变更后
- About 首屏增加 `View Foil Fabrics`、`Custom Development` 和询盘入口。
- 首屏描述明确包含 foil、holographic、iridescent stretch fabrics 以及 stage costumes、dancewear、performance wear。
- Our Focus 区域的能力项改为内链，分别指向 stage costume foil fabric、custom foil fabric development、dancewear fabric supplier 和产品目录。
- 底部 CTA 改为引导用户比较产品、浏览应用或提交定制报价。

## 验收条件
- `/about/` 生成页面包含 `/products/`。
- `/about/` 生成页面包含 `/applications/custom-foil-fabric-development/`。
- `/about/` 生成页面包含 `/applications/foil-fabric-for-stage-costumes/`。
- `/about/` 生成页面包含 `/applications/dancewear-fabric-supplier/`。
- 构建成功。

## 影响范围
仅调整 About 页面文案、CTA 和静态内链。产品页、应用页、询盘表单和旧 404 策略不变。

## 兼容性
保留 `/about/` 路由和现有页面结构。新增链接均指向当前已生成的公开页面。

## 实现位置
- 更新：`src/pages/about.astro`
- 更新：`docs/agent/requirements/current/company-pages.md`
- 更新：`docs/agent/requirements/INDEX.md`

## 验证结果
- 通过：`npm run build`，46 个页面完成构建。
- 通过：构建内置 `npm run validate:products`，15 个 public products 校验通过。
- 通过：`dist/about/index.html` 包含 `/products/`。
- 通过：`dist/about/index.html` 包含 `/applications/custom-foil-fabric-development/`。
- 通过：`dist/about/index.html` 包含 `/applications/foil-fabric-for-stage-costumes/`。
- 通过：`dist/about/index.html` 包含 `/applications/dancewear-fabric-supplier/`。
- 通过：`git diff --check` 无空白格式问题。

## 来源
- 用户要求根据分析优化 About 页面，使其更好承接当前 Search Console 中 About 页曝光。
