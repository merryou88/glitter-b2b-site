# 页面渲染流程

## 触发入口
浏览器请求 `src/pages/**` 下的路由，例如 `/`、`/products/`、`/blog/`、`/about/`。

## 调用顺序
1. Astro 解析页面 frontmatter。
2. 页面准备数据、schema、canonical 和预加载资源。
3. `Layout.astro` 包住页面内容。
4. `Header`、`Footer`、`RFQQuoteModal`、`FloatingContact` 一起挂载。
5. Astro 输出静态 HTML。

## 涉及模块
- `site-shell`
- `product-catalog`
- `blog-knowledge`
- `company-pages`

## 输入和输出
- 输入：页面 props、路由参数、静态数据、`Astro.url`
- 输出：带 meta、JSON-LD、图片预加载和全站壳的 HTML

## 失败处理
- 缺少数据字段通常在构建期暴露
- 路由找不到时落到 `src/pages/404.astro`

## 验证方法
- `npm run build`
- 手动查看页面源代码里的 title、canonical、JSON-LD、header/footer
