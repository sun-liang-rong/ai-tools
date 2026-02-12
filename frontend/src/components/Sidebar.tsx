'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  PenTool, 
  Image as ImageIcon, 
  Video, 
  Briefcase, 
  Bot, 
  MessageSquare, 
  Code, 
  Palette, 
  Mic, 
  Search, 
  Layout, 
  BookOpen, 
  Database, 
  FileText, 
  Sparkles,
  ArrowRight
} from 'lucide-react'

interface Category {
  id: number
  name: string
  slug: string
  icon?: string
}

interface QuickNavProps {
  categories?: Category[]
}

const categoryIcons: Record<string, any> = {
  'AI写作工具': PenTool,
  'AI图像工具': ImageIcon,
  'AI视频工具': Video,
  'AI办公工具': Briefcase,
  'AI智能体': Bot,
  'AI聊天助手': MessageSquare,
  'AI编程工具': Code,
  'AI设计工具': Palette,
  'AI音频工具': Mic,
  'AI搜索引擎': Search,
  'AI开发平台': Layout,
  'AI学习网站': BookOpen,
  'AI训练模型': Database,
  'AI内容检测': FileText,
}

export default function Sidebar({ categories = [] }: QuickNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 bg-white border border-gray-200 rounded-r-lg shadow-lg p-3 hover:bg-gray-50 transition-colors hidden lg:flex flex-col items-center gap-2"
      >
        <Sparkles className="w-5 h-5 text-primary-600" />
        <span className="text-xs text-gray-600 writing-mode-vertical">快捷导航</span>
      </button>

      {isOpen && (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="bg-white border border-gray-200 rounded-r-xl shadow-2xl p-4 w-64 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">快捷导航</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1">
              {categories.map((category) => {
                const Icon = categoryIcons[category.name] || Sparkles
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    <span className="flex-1">{category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                )
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/categories"
                className="flex items-center justify-center gap-2 w-full py-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                查看所有分类
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden fixed bottom-20 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 text-white rounded-full p-3 shadow-lg hover:bg-primary-700 transition-colors"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-4">快捷导航</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category.name] || Sparkles
                return (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-6 h-6 text-primary-600" />
                    <span className="text-xs text-center text-gray-700">{category.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}