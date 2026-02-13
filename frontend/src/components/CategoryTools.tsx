'use client'

import { useState } from 'react'
import { Grid3X3, List } from 'lucide-react'
import Image from 'next/image'
import ToolCard from './ToolCard'
import type { Tool } from '@/types/tool'
import Link from 'next/link'

interface CategoryToolsProps {
  tools: Tool[]
}

type ViewMode = 'grid' | 'list'

export default function CategoryTools({ tools }: CategoryToolsProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-500">
          共 {tools.length} 个工具
        </div>
        
        <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-slate-100 text-slate-700'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title="网格视图"
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-slate-100 text-slate-700'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title="列表视图"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {tools.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="animate-fade-in bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4 hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={tool.logo || '/logo.png'}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
                      {tool.short_desc}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {tool.is_free ? (
                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
                          免费
                        </span>
                      ) : null}
                      {tool.is_zh ? (
                        <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full">
                          中文
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <Link
                    href={ `/tools/${tool.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2 bg-primary hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    访问
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-gray-700">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <List className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            暂无工具
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            该分类下暂时没有收录任何工具
          </p>
        </div>
      )}
    </>
  )
}
