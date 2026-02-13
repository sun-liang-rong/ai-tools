'use client'

import { useState, useEffect } from 'react'
import { searchApi } from '@/services/api'
import ToolCard from '@/components/ToolCard'
import Pagination from '@/components/Pagination'
import { Search } from 'lucide-react'
import { Tool } from '@/types/tool'

const TABS = [
  { id: 'all', name: '全部' },
  { id: 'website', name: '网站' },
  { id: 'software', name: '软件' },
  { id: 'article', name: '文章' },
]

interface ResultsContainerProps {
  initialQuery: string
  initialTab: string
}

export default function ResultsContainer({ initialQuery, initialTab }: ResultsContainerProps) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [results, setResults] = useState<Tool[]>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const pageSize = 12

  const fetchResults = async (q: string, page: number = 1, tab: string = activeTab) => {
    if (!q) return
    setLoading(true)
    try {
      const { data, total } = await searchApi.search({ q, page, pageSize, tab })
      setResults(data || [])
      setTotal(total || 0)
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialQuery) {
      setCurrentPage(1)
      fetchResults(initialQuery, 1, activeTab)
    }
  }, [initialQuery, activeTab])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    fetchResults(initialQuery, page, activeTab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                : 'bg-gray-200/50 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.name}
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-indigo-600" />
            )}
          </button>
        ))}
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 text-gray-500 mb-6">
          <Search className="w-4 h-4" />
          <span>&quot;{initialQuery}&quot; 的搜索结果</span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          {TABS.find(t => t.id === activeTab)?.name}
        </h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-24 bg-white rounded-xl" />
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400">未找到相关结果</p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        total={total}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  )
}
