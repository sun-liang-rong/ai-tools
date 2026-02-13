import { getHomeCategories, homeApi } from '@/services/api'
import ToolCard from '@/components/ToolCard'
import HomeSearch from '@/components/HomeSearch'
import { Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
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
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/20 via-purple-500/10 to-transparent rounded-[100%] blur-[100px] opacity-50 dark:opacity-30 mix-blend-normal animate-pulse-slow" />
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-40 dark:opacity-20 mix-blend-screen" />
          <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-40 dark:opacity-20 mix-blend-screen" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 dark:opacity-10" />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 px-4 py-1.5 rounded-full shadow-sm mb-6 hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300 tracking-wide uppercase">
              已收录 {totalTools || 0}+ AI 工具
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white">
            <span className="block md:inline mb-2 md:mb-0">发现最佳</span>
            <span className="hidden md:inline mx-3 text-gray-300 dark:text-gray-600 font-light">|</span>
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20 dark:opacity-40"></span>
              <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">AI 工具导航</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            精心筛选的人工智能工具集合，助你提升工作效率，激发创意灵感
          </p>

          {/* Search */}
          <div className="max-w-3xl mx-auto mb-10 relative z-20">
            <HomeSearch />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-20">
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
