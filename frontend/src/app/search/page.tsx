import { Metadata } from 'next'
import SearchForm from '@/components/search/SearchForm'
import ResultsContainer from '@/components/search/ResultsContainer'
import { Suspense } from 'react'

interface SearchPageProps {
  searchParams: {
    q?: string
    tab?: string
  }
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q || ''

  if (query) {
    return {
      title: `"${query}" 的搜索结果 - AI工具库`,
      description: `搜索"${query}"相关的AI工具、软件和文章。发现最新的人工智能工具，提升工作效率。`,
      openGraph: {
        title: `"${query}" 的搜索结果 - AI工具库`,
        description: `搜索"${query}"相关的AI工具、软件和文章`,
        type: 'website',
      },
    }
  }

  return {
    title: '搜索 AI 工具 - AI工具库',
    description: '搜索AI工具、软件和文章，发现最新的人工智能工具，提升工作效率。',
    openGraph: {
      title: '搜索 AI 工具 - AI工具库',
      description: '搜索AI工具、软件和文章',
      type: 'website',
    },
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ''
  const tab = searchParams.tab || 'all'

  return (
    <div className="min-h-screen bg-[#f3f4f6]/30 py-12">
      <div className="container-custom max-w-7xl">
        <Suspense fallback={<div>加载中...</div>}>
          <SearchForm initialQuery={query} />
        </Suspense>
        {query && <ResultsContainer initialQuery={query} initialTab={tab} />}
      </div>
    </div>
  )
}
