# CHG-20261011-032：全站成分比例去掉斜杠分隔

## 状态
- active

## 背景
用户要求将 `95% polyester / 5% spandex` 这类成分描述统一改为 `95% polyester 5% spandex`，减少视觉噪音并保持全站材质写法一致。

## 变更前
- 产品页、首页卡片和博客正文中部分成分比例使用斜杠分隔，例如 `95% Polyester / 5% Spandex`、`98% polyester / 2% spandex`、`80% nylon / 20% spandex`。

## 变更后
- 全站公开页面内容中的成分比例统一去掉斜杠，例如 `95% Polyester 5% Spandex`。
- 只调整成分文本格式，不改变产品实际成分、产品 URL、MOQ、交期、样品政策或页面结构。
- 历史变更记录中的旧引用保留为历史记录。

## 验收条件
- `src` 中不再出现带斜杠的百分比成分写法。
- 产品数据、首页卡片描述和博客正文使用无斜杠成分格式。
- 构建与产品、SEO 校验通过。

## 影响范围
- `src/data/allProducts.js`
- `src/pages/index.astro`
- `src/data/blogArticles.js`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/requirements/current/site-shell.md`

## 验证
- 已运行：`npm run build`，通过；该命令包含 `validate:products` 和 `validate:seo`
- 已检查：`src`、`dist/products`、`dist/blog` 和首页生成文件中不再出现带斜杠的百分比成分写法
