---
module: blog-knowledge
paths:
  - src/pages/blog/index.astro
  - src/pages/blog/[slug].astro
  - src/data/blogArticles.js
  - src/data/allProducts.js
triggers:
  - blog
  - article
  - guide
  - material guide
  - compliance
  - sourcing guide
depends_on:
  - site-shell
  - content-data
  - inquiry-forms
requirement_docs:
  - requirements/current/blog.md
---

# blog-knowledge

## 职责
买家知识中心。负责文章列表、文章详情、分类筛选、关联产品和文章级 SEO 信息。

## 不负责的范围
不负责 CMS、评论、搜索服务或动态内容同步。

## 代码入口
- `src/pages/blog/index.astro`
- `src/pages/blog/[slug].astro`
- `src/data/blogArticles.js`
- `src/data/allProducts.js`

## 关键调用关系
- 列表页用 `blogCategories` 渲染筛选按钮
- 详情页用 `getStaticPaths()` 按文章 slug 生成静态页
- 详情页把 `focusProducts` 映射到产品数据，生成推荐产品卡

## 数据与状态
- 当前公开文章数：3
- 当前公开分类数：4
- `buyerSummary` 只有部分文章有
- `sectionNav` 由文章 headings 派生，不是手写目录

## 外部依赖
- `Intl.DateTimeFormat`
- `CTAButton`
- `allProducts` 作为推荐产品映射表

## 修改约束
- 改标题/slug/分类时同步检查列表页和详情页
- `focusProducts` 必须指向真实产品 slug
- 文章结构改动要注意 section 锚点生成规则

## 验证方式
- `npm run build`
- 手动打开 `/blog/` 和一篇 `/blog/{slug}/`

## 常见问题
- 分类按钮值和文章分类不一致
- 推荐产品 slug 失效
- 标题层级变化导致目录锚点坏掉
