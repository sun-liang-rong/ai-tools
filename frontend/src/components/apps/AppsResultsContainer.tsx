'use client'

import { useState, useEffect } from 'react'
import { toolApi } from '@/services/api'
import ToolCard from '@/components/ToolCard'
import Pagination from '@/components/Pagination'
import { Tool } from '@/types/tool'
import type { ToolListParams } from '@/types/tool'

interface AppsResultsContainerProps {
  initialPage: number
  initialParams: ToolListParams
}

export default function AppsResultsContainer({ initialPage, initialParams }: AppsResultsContainerProps) {
  const [results, setResults] = useState<Tool[]>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState<ToolListParams>(initialParams)
  const pageSize = 12

  const fetchResults = async (page: number, currentParams: ToolListParams) => {
    setLoading(true)
    try {
      const { data, total } = await toolApi.getList({
        ...currentParams,
        page,
        pageSize,
      })
      setResults(data || [])
      setTotal(total || 0)
    } catch (error) {
      console.error('Fetch apps failed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchResults(currentPage, params)
  }, [currentPage, params])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
            <div key={i} className="h-40 bg-white rounded-xl" />
          ))}
        </div>
      ) : results.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            total={total}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400">暂无应用数据</p>
        </div>
      )}
    </>
  )
}
