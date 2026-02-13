import Link from 'next/link'
import { Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Tool } from '@/types/tool'
import Image from 'next/image'
import CopyToClipboard from '@/components/client/clipboard'
interface ToolCardProps {
  tool: Tool
  featured?: boolean
}

export default function ToolCard({ tool, featured = false }: ToolCardProps) {
  // 如果是特色推荐卡片（横向布局）
  if (featured) {
    return (
      <div
        className="tool-card group relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-white/10 md:col-span-2 overflow-hidden flex flex-col sm:flex-row gap-6 h-full"
      >
        {/* 背景光晕 */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* 推荐标签 */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold shadow-lg shadow-primary/20 z-10">
          推荐
        </div>

        {/* Logo 区域 */}
        <div className="w-full sm:w-1/3 flex-shrink-0 relative z-10">
          <div className="w-full aspect-square sm:aspect-auto sm:h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center overflow-hidden border border-white/20 dark:border-white/5 shadow-inner">
            <Image
              unoptimized
              src={tool.logo || '/logo.png'}
              alt={tool.name}
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* 内容区域 */}
        <div className="flex-1 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              {tool.is_free ? (
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium">
                  免费
                </span>
              ) : null}
            </div>
            <p className="text-base text-gray-600 dark:text-gray-300 line-clamp-3 mb-6 leading-relaxed">
              {tool.short_desc}
            </p>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <Link 
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium py-2.5 rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group/btn"
            >
              访问官网 
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
            <div className="pl-3.5 pr-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center px-1">
                <CopyToClipboard website={tool.website} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  // 普通卡片（纵向布局）
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="tool-card group relative bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-white/40 dark:border-white/5 shadow-sm hover:shadow-xl block h-full overflow-hidden"
    >
      {/* 内部光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 p-0.5 shadow-sm border border-white/20 dark:border-white/5 flex-shrink-0">
          <div className="w-full h-full rounded-[10px] overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
            <Image
              unoptimized
              src={tool.logo || '/logo.png'}
              alt={tool.name}
              width={56}
              height={56}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title and Tags */}
        <div className="flex-1 min-w-0 py-0.5">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors truncate">
            {tool.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {tool.is_free ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium uppercase tracking-wide">
                免费
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4 min-h-[2.5rem]">
          {tool.short_desc}
        </p>
        
        <div className="flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          查看详情 <ArrowUpRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </Link>
  )
}
