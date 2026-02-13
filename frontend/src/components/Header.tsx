'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Search, Menu, X, ChevronDown, Sparkles, Zap, Command, Sun, Moon } from 'lucide-react'
import { categoryApi } from '@/services/api'

interface Category {
  id: number
  name: string
  slug: string
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    fetchCategories()
    // Check if dark mode is enabled
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true)
    }
  }, [])

  const fetchCategories = async () => {
    try {
      const { data } = await categoryApi.getAll()
      if (data) {
        setCategories(data)
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300">
              <Image
                src="/logo.png"
                alt="AI导航"
                width={36}
                height={36}
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              AI导航
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* AI工具集下拉 */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2 group">
                AI工具集
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 text-gray-400 group-hover:text-primary ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden ring-1 ring-black/5">
                    <div className="p-6 grid grid-cols-3 gap-x-6 gap-y-4">
                      {categories.slice(0, 9).map((category) => (
                        <Link
                          key={category.id}
                          href={`/categories/${category.slug}`}
                          className="flex flex-col gap-1 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group"
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                              <Zap className="w-4 h-4 fill-current" />
                            </div>
                            <span className="font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                            探索优质的 {category.name} 工具
                          </p>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-yellow-500" />
                          已收录 {categories.length} 个分类
                        </span>
                      </div>
                      <Link 
                        href="/categories" 
                        className="text-xs font-bold text-primary hover:text-primary-600 flex items-center gap-1 group"
                        onClick={() => setIsCategoriesOpen(false)}
                      >
                        查看全部分类
                        <ChevronDown className="w-3 h-3 -rotate-90 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/apps"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              AI应用集
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
            >
              关于
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleDarkMode}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(e as any)}
                  placeholder="搜索 AI 工具..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                />
              </div>
            </div>

            <Link
              href="/categories"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Zap className="w-5 h-5" />
              <span className="font-medium">AI工具集</span>
            </Link>

            <Link
              href="/apps"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">AI应用集</span>
            </Link>

            <Link
              href="/projects"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Command className="w-5 h-5" />
              <span className="font-medium">最新项目</span>
            </Link>

            <Link
              href="/resources"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">教程资源</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">关于</span>
            </Link>

            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
              <Link
                href="/submit"
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="w-4 h-4" />
                提交工具
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
