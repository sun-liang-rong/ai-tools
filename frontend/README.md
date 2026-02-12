# AI Tools Frontend

AI 工具导航站前台项目 - 基于 Next.js 14 (App Router) + TailwindCSS 构建

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Axios

## 项目结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局
│   ├── page.tsx                # 首页
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx        # 分类页
│   ├── tool/
│   │   └── [slug]/
│   │       └── page.tsx        # 工具详情页
│   ├── search/
│   │   └── page.tsx            # 搜索页
│   ├── sitemap.ts              # 站点地图生成
│   └── robots.ts               # 爬虫规则
├── components/
│   ├── Header.tsx              # 顶部导航
│   ├── Footer.tsx              # 底部
│   ├── ToolCard.tsx            # 工具卡片
│   ├── CategoryCard.tsx        # 分类卡片
│   └── FilterBar.tsx           # 筛选栏
├── services/
│   └── api.ts                  # API 服务层
└── types/
    └── tool.ts                 # TypeScript 类型定义
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env.example` 为 `.env.local` 并配置 API 地址：

```bash
cp .env.example .env.local
```

`.env.local` 内容：

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm start
```

## 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | / | 推荐工具、最新收录 |
| 分类页 | /category/:slug | 分类工具列表，支持筛选 |
| 详情页 | /tool/:slug | 工具详情、同类推荐 |
| 搜索页 | /search?q=keyword | 搜索结果 |

## SEO 优化

- 自动生成 Sitemap
- Robots.txt 配置
- 动态 Meta Tags
- Canonical URL
- Open Graph 标签

## API 接口

项目需要后端 API 支持，接口规范参考需求文档：

- GET /api/categories - 获取分类列表
- GET /api/tools - 获取工具列表
- GET /api/tools/:slug - 获取工具详情
- GET /api/search - 搜索工具

## 性能优化

- SSR + 静态生成
- 图片懒加载
- 组件按需加载
- 优化 TailwindCSS 样式
