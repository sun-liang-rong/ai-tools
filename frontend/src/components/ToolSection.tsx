'use client'
import { ReactNode, useEffect, useState } from 'react'
import ToolCard from './ToolCard'
import type { Tool, Category } from '@/types/tool'
import { getHomeCategories } from '@/services/api'

interface ToolSectionProps {
  title?: string
  tools?: Category[]
  badgeClassName?: string
}

export default function ToolSection({
  title,
  tools,
  badgeClassName = 'bg-blue-600 shadow-blue-200' 
}: ToolSectionProps) {
  const [categories, setCategories] = useState<Category[]>(tools || [])
  const [loading, setLoading] = useState(!tools)

  async function getData() {
    if (tools && tools.length > 0) return
    
    try {
      const response = await getHomeCategories()
      const categoriesData = response.data?.data || response.data || []
      setCategories(categoriesData)
    } catch (error) {
      console.error('Failed to fetch home categories:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [tools])
    
  if (loading) return <div className="py-10 text-center text-gray-500">加载中...</div>
  if (!categories || categories.length === 0) return null

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section key={category.id} className="space-y-6">
          <div className="flex items-center">
            <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 ${badgeClassName}`}>
              <span className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-full">
                <span className="text-xs">🔥</span>
              </span>
              {category.name}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.tools && category.tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
