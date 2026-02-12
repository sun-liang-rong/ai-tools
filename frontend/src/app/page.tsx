import { getHomeCategories, homeApi } from '@/services/api'
import ToolCard from '@/components/ToolCard'
import HomeSearch from '@/components/HomeSearch'
import { Sparkles, TrendingUp, ArrowRight, Bot, Wand2, Cpu, Edit3, Zap, Clock } from 'lucide-react'
import Link from 'next/link'
import { Tool } from '@/types/tool'

export default async function HomePage() {
  // const { data: homeCategories } = await getHomeCategories()
  
  // // 提取所有首页分类下的工具并打平
  // const allTools = homeCategories?.reduce((acc: any[], category: any) => {
  //   if (category.tools) {
  //     return [...acc, ...category.tools]
  //   }
  //   return acc
  // }, []) || []
  const {data: homeTools} = await homeApi.getHomeTools()
  console.log(homeTools, 'homeTools')
  // 统计工具总数
  const {data: totalTools} = await homeApi.getToolsCount()
  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              已收录 {totalTools || 0}+ AI 工具
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            发现最佳 <br />
            <span className="text-gradient">AI 工具导航</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            精心筛选的人工智能工具集合，助你提升工作效率，激发创意灵感
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <HomeSearch />
          </div>

          {/* Hot Search Tags */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-gray-400 dark:text-gray-500 py-1">热门搜索:</span>
            {['ChatGPT', 'Midjourney', 'Claude', 'Stable Diffusion', 'Copilot'].map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-full text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 transition-all shadow-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Category Buttons */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap max-w-5xl mx-auto px-4">
          {[
            { icon: Bot, label: 'AI 对话', color: 'text-blue-500', slug: 'ai-dialog' },
            { icon: Wand2, label: 'AI 绘画', color: 'text-purple-500', slug: 'ai-drawing' },
            { icon: Cpu, label: 'AI 编程', color: 'text-indigo-500', slug: 'ai-coding' },
            { icon: Edit3, label: 'AI 写作', color: 'text-pink-500', slug: 'ai-writing' },
          ].map((item) => (
            <Link
              key={item.label}
              href={`/categories/${item.slug}`}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-soft hover:shadow-lg transition-all text-gray-700 dark:text-gray-200"
            >
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20 relative z-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/25">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">热门工具</h2>
          </div>
          <Link
            href="/categories"
            className="group flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            查看全部
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tools Grid */}
        {homeTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeTools.map((tool: Tool, index: number) => {
              console.log(tool, 'tool')
              // 模拟设计稿中的布局：第5个工具（索引4）作为特色展示，跨2列
              const isFeatured = Boolean(tool.is_recommend);
              return (
                <div
                  key={tool.id}
                  className={`animate-fade-in ${isFeatured ? 'md:col-span-2' : ''}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ToolCard tool={tool} featured={isFeatured} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">暂无工具数据</p>
          </div>
        )}

        {/* View All Button */}
        {homeTools.length > 10 && (
          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-lg transition-all"
            >
              探索更多工具
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
