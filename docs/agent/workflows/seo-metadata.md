# SEO 元数据流程

## 触发入口
任何使用 `Layout.astro` 的页面。

## 调用顺序
1. 页面先准备 `title`、`description`、`canonical`、`image`、`robots` 和 `structuredData`。
2. `Layout` 补齐 Organization / WebSite JSON-LD。
3. 页面级 JSON-LD 再追加到 `<head>`。
4. 首页额外预加载 hero 图片。
5. `astro.config.mjs` 生成站点级 sitemap。

## 涉及模块
- `site-shell`
- `product-catalog`
- `blog-knowledge`
- `company-pages`

## 输入和输出
- 输入：页面 frontmatter 与 `Astro.url`
- 输出：canonical、OG/Twitter tags、JSON-LD、sitemap

## 环境变量
- 无运行时环境变量

## 失败处理
- title/canonical/slug 不一致会直接影响分享和索引结果
- `thank-you` 被 sitemap 过滤

## 验证方法
- `npm run build`
- 查看页面源代码和 `/sitemap-index.xml`
