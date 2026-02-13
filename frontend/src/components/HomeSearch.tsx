'use client'

import { useState, useEffect } from 'react'
import { Search, Sparkles, Command, Bot, Wand2, Cpu, Edit3, Zap, Clock } from 'lucide-react'
import Link from 'next/link'

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
      <form onSubmit={handleSearch} className="relative group">
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500 ${isFocused ? 'opacity-60 blur-md' : ''}`}></div>
        
        <div 
          className={`
            relative flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-white/10
            transition-all duration-300 overflow-hidden
            ${isFocused ? 'shadow-2xl ring-1 ring-white/50' : 'hover:shadow-xl'}
          `}
        >
          {/* Search Icon */}
          <div className="absolute left-6 pointer-events-none">
            <Search className={`w-6 h-6 transition-colors ${isFocused ? 'text-primary' : 'text-slate-400'}`} />
          </div>

          {/* Input */}
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="搜索 AI 工具（例如：ChatGPT、Midjourney）..."
            className="
              w-full h-16 pl-16 pr-40
              bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400
              text-lg font-medium
              focus:outline-none
            "
          />

          {/* Engine Selector */}
          <div className="absolute right-3 flex items-center gap-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
            {SEARCH_ENGINES.map((engine) => (
              <button
                key={engine.id}
                type="button"
                onClick={() => setActiveEngine(engine.id)}
                className={`
                  px-3 py-1.5 text-xs font-semibold rounded-lg
                  transition-all duration-200
                  ${activeEngine === engine.id 
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }
                `}
              >
                {engine.name}
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* Quick Tags */}
      <div className="relative flex flex-wrap justify-center gap-4 mt-4">
        {/* Keyboard hint */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>按</span>
            <kbd className="flex items-center gap-0.5 px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-sans">
              <Command className="w-3 h-3" />
              <span>K</span>
            </kbd>
            <span>快速搜索</span>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
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
      {/* Quick Category Buttons */}
        <div className="mt-4 flex justify-center gap-4 flex-wrap max-w-5xl mx-auto px-4">
          {[
            { icon: Bot, label: 'AI 对话', color: 'text-blue-500', slug: 'ai-chat' },
            { icon: Wand2, label: 'AI 图片', color: 'text-purple-500', slug: 'ai-image' },
            { icon: Cpu, label: 'AI 编程', color: 'text-indigo-500', slug: 'ai-coding' },
            { icon: Edit3, label: 'AI 写作', color: 'text-pink-500', slug: 'ai-writing' },
          ].map((item) => (
            <Link
              key={item.label}
              href={`/categories/${item.slug}`}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-soft hover:shadow-lg transition-all text-gray-700 dark:text-gray-200"
            >
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
    </div>
  )
}
