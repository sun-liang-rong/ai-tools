'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

interface SearchFormProps {
  initialQuery: string
}

export default function SearchForm({ initialQuery }: SearchFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  useEffect(() => {
    const query = searchParams.get('q') || ''
    setSearchQuery(query)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-12">
      <form onSubmit={handleSearch} className="relative group">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 pl-6 pr-16 text-lg bg-white border-none rounded-lg shadow-sm focus:ring-2 focus:ring-primary-500 transition-all"
          placeholder="搜索 AI 工具..."
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-6 bg-[#333] text-white rounded-md hover:bg-black transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
