'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export default function FilterBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const currentFree = searchParams.get('free')
  const currentZh = searchParams.get('zh')
  const currentSort = searchParams.get('sort') || ''

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">价格:</span>
          <button
            onClick={() => updateFilter('free', '')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              !currentFree ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部
          </button>
          <button
            onClick={() => updateFilter('free', '1')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentFree === '1' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            免费
          </button>
          <button
            onClick={() => updateFilter('free', '0')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentFree === '0' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            付费
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">语言:</span>
          <button
            onClick={() => updateFilter('zh', '')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              !currentZh ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部
          </button>
          <button
            onClick={() => updateFilter('zh', '1')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentZh === '1' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            中文
          </button>
          <button
            onClick={() => updateFilter('zh', '0')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentZh === '0' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            英文
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">排序:</span>
          <button
            onClick={() => updateFilter('sort', '')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              !currentSort ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            默认
          </button>
          <button
            onClick={() => updateFilter('sort', 'new')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentSort === 'new' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            最新
          </button>
        </div>
      </div>
    </div>
  )
}
