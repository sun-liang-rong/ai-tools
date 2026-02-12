import { categoryApi, toolApi } from '@/services/api'
import ToolCard from '@/components/ToolCard'
import { Sparkles, ArrowRight, LayoutGrid, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Category, Tool } from '@/types/tool'
interface CategoryWithTools extends Category {
  tools: Tool[]
}
export default async function CategoriesPage() {
  // 1. 获取所有分类及其工具（使用优化后的单一接口）
  const { data: categoriesWithTools } = await categoryApi.getCategoriesAndTools()

  // 过滤掉没有工具的分类
  const displayCategories = categoriesWithTools.filter((c: CategoryWithTools) => c.tools && c.tools.length > 0)

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <LayoutGrid className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">全部工具分类</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
            探索我们为您精选的所有 AI 工具分类，从对话、绘画到编程和写作，助您找到最适合的生产力工具。
          </p>
        </div>

        {/* Categories Navigation (Quick Links) */}
        <div className="flex flex-wrap gap-2 mb-16">
          {displayCategories.map((category: CategoryWithTools) => (
            <Link
              key={category.id}
              href={`#category-${category.slug}`}
              className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              {category.name}
              <span className="ml-1.5 text-xs text-gray-400">({category.tools.length})</span>
            </Link>
          ))}
        </div>

        {/* Categories Sections */}
        <div className="space-y-20">
          {displayCategories.map((category: CategoryWithTools) => (
            <section 
              key={category.id} 
              id={`category-${category.slug}`}
              className="scroll-mt-24"
            >
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {category.name}
                  </h2>
                  <span className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-full">
                    {category.tools.length}+ 工具
                  </span>
                </div>
                <Link
                  href={`/categories/${category.slug}`}
                  className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-600 transition-colors"
                >
                  查看更多
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.slice(0, 8).map((tool: Tool, index: number) => (
                  <div
                    key={tool.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>

              {category.tools.length >= 8 && (
                <div className="mt-8 text-center">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    探索更多 {category.name} 工具
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Empty State */}
        {displayCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">暂无分类数据</h3>
            <p className="text-gray-500 dark:text-gray-400">
              我们正在努力收录更多优质工具，请稍后再试。
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
            >
              返回首页
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
