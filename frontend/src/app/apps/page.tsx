import { Metadata } from 'next'
import { toolApi, homeApi } from '@/services/api'
import AppsResultsContainer from '@/components/apps/AppsResultsContainer'
import { Smartphone, AppWindow, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'AI应用集 - 发现优质AI工具应用',
    description: '探索精选的AI应用集合，涵盖对话、绘画、编程、写作等多个领域，助您发现最佳的人工智能工具应用。',
    openGraph: {
      title: 'AI应用集 - 发现优质AI工具应用',
      description: '探索精选的AI应用集合，涵盖对话、绘画、编程、写作等多个领域',
      type: 'website',
    },
  }
}

export default async function AppsPage() {
  const { data: totalTools } = await homeApi.getToolsCount()

  return (
    <div className="min-h-screen bg-[#f3f4f6]/30 py-12 mt-6">
      <div className="container-custom max-w-7xl">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                已收录 {totalTools || 0}+ AI 工具
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-gradient">AI应用集</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              探索精选的AI应用集合，涵盖对话、绘画、编程、写作等多个领域，助您发现最佳的人工智能工具应用
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Smartphone, label: 'AI 对话', color: 'from-blue-500 to-cyan-500', slug: 'ai-chat' },
            { icon: AppWindow, label: 'AI 图片', color: 'from-purple-500 to-pink-500', slug: 'ai-image' },
            { icon: TrendingUp, label: 'AI 编程', color: 'from-indigo-500 to-blue-500', slug: 'ai-coding' },
            { icon: Zap, label: 'AI 写作', color: 'from-orange-500 to-red-500', slug: 'ai-writing' },
          ].map((item) => (
            <Link
              key={item.label}
              href={`/categories/${item.slug}`}
              className="group flex flex-col items-center gap-3 p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            全部应用
          </h2>
          <AppsResultsContainer initialPage={1} initialParams={{}} />
        </div>
      </div>
    </div>
  )
}
