import Link from 'next/link'
import { Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Tool } from '@/types/tool'
import Image from 'next/image'

interface ToolCardProps {
  tool: Tool
  featured?: boolean
}

export default function ToolCard({ tool, featured = false }: ToolCardProps) {
  // 如果是特色推荐卡片（横向布局）
  if (featured) {
    return (
      <Link
        href={`/tools/${tool.slug}`}
        className="tool-card group relative bg-card-light dark:bg-card-dark rounded-xl p-5 border-2 border-primary/20 dark:border-primary/40 shadow-glow md:col-span-2 overflow-hidden flex flex-col sm:flex-row gap-6 h-full"
      >
        {/* 推荐标签 */}
        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl-lg font-bold">
          推荐
        </div>

        {/* Logo 区域 */}
        <div className="w-full sm:w-1/3 flex-shrink-0">
          <div className="w-full aspect-square sm:aspect-auto sm:h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              unoptimized
              src={tool.logo || '/placeholder-logo.png'}
              alt={tool.name}
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 内容区域 */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              {tool.is_free && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium">
                  免费
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
              {tool.short_desc}
            </p>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button className="flex-1 bg-primary hover:bg-primary-600 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
              访问官网 <ExternalLink className="w-3 h-3" />
            </button>
            <button className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
              <span className="text-sm">分享</span>
            </button>
          </div>
        </div>
      </Link>
    )
  }

  // 普通卡片（纵向布局）
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="tool-card group bg-card-light dark:bg-card-dark rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm block h-full"
    >
      <div className="flex items-start gap-4 mb-3">
        {/* Logo */}
        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Image
            unoptimized
            src={tool.logo || '/placeholder-logo.png'}
            alt={tool.name}
            width={48}
            height={48}
            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Title and Tags */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            {tool.is_free ? (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium">
                免费
              </span>
            ) : null}
            {tool.is_zh ? (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                中文
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 h-10">
        {tool.short_desc}
      </p>
    </Link>
  )
}
