'use client'

import { useState, useEffect } from 'react'
import { Search, Sparkles, Command } from 'lucide-react'

const SEARCH_ENGINES = [
  { id: 'site', name: '站内', url: '/search?q=' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=' },
]

export default function HomeSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeEngine, setActiveEngine] = useState('site')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    const engine = SEARCH_ENGINES.find(e => e.id === activeEngine)
    if (engine) {
      if (engine.id === 'site') {
        window.location.href = `${engine.url}${encodeURIComponent(searchQuery)}`
      } else {
        window.open(`${engine.url}${encodeURIComponent(searchQuery)}`, '_blank')
      }
    }
  }

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        document.getElementById('search-input')?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div 
          className={`
            relative flex items-center bg-white rounded-2xl shadow-lg 
            transition-all duration-300 overflow-hidden
            ${isFocused ? 'shadow-xl ring-2 ring-blue-500/20' : 'hover:shadow-xl'}
          `}
        >
          {/* Search Icon */}
          <div className="absolute left-5 pointer-events-none">
            <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-blue-500' : 'text-slate-400'}`} />
          </div>

          {/* Input */}
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="搜索 AI 工具，例如：ChatGPT、Midjourney..."
            className="
              w-full h-14 pl-14 pr-36
              bg-transparent text-slate-900 placeholder:text-slate-400
              text-base
              focus:outline-none
            "
          />

          {/* Engine Selector */}
          <div className="absolute right-3 flex items-center gap-1">
            {SEARCH_ENGINES.map((engine) => (
              <button
                key={engine.id}
                type="button"
                onClick={() => setActiveEngine(engine.id)}
                className={`
                  px-3 py-1.5 text-xs font-medium rounded-lg
                  transition-all duration-200
                  ${activeEngine === engine.id 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  }
                `}
              >
                {engine.name}
              </button>
            ))}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>按</span>
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-sans">
              <Command className="w-3 h-3" />
              <span>K</span>
            </kbd>
            <span>快速搜索</span>
          </div>
        </div>
      </form>

      {/* Quick Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-12">
        {['ChatGPT', 'Midjourney', 'Claude', 'Stable Diffusion', 'Copilot'].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSearchQuery(tag)
              document.getElementById('search-input')?.focus()
            }}
            className="
              px-3 py-1.5 text-sm text-slate-600 
              bg-white/60 hover:bg-white 
              border border-slate-200 hover:border-blue-300
              rounded-full
              transition-all duration-200
            "
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
