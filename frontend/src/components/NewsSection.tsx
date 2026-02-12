'use client'

import { useState } from 'react'
import { Newspaper, Calendar, TrendingUp, Clock, ArrowRight, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  tag: string
  source: string
  url?: string
  isHot?: boolean
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI 发布 GPT-5 预览版，推理能力大幅提升',
    summary: '新版本在数学推理、代码生成和多语言理解方面取得显著进展，支持更长的上下文窗口。',
    date: '2024-01-15',
    tag: '新发布',
    source: 'OpenAI 官方',
    isHot: true,
  },
  {
    id: '2',
    title: 'Claude 3.5 模型正式发布，超越 GPT-4',
    summary: 'Anthropic 发布 Claude 3.5，在多项基准测试中表现出色，支持更安全的 AI 对话体验。',
    date: '2024-01-14',
    tag: '更新',
    source: 'Anthropic',
    isHot: true,
  },
  {
    id: '3',
    title: 'Google Gemini Ultra 正式开放商用定价',
    summary: '谷歌宣布 Gemini Ultra 模型正式面向企业用户开放，提供灵活的订阅方案和 API 访问。',
    date: '2024-01-13',
    tag: '新闻',
    source: 'Google Cloud',
  },
  {
    id: '4',
    title: 'GitHub Copilot X 支持更多编程语言',
    summary: '微软宣布 GitHub Copilot X 新增对 Rust、Go、Kotlin 等语言的支持，提升开发效率。',
    date: '2024-01-12',
    tag: '工具',
    source: 'GitHub',
  },
  {
    id: '5',
    title: 'Midjourney v7 内测版发布，图像质量再升级',
    summary: 'Midjourney 推出 v7 版本内测，新增更多风格选项和精细控制功能，生成的图像质量显著提升。',
    date: '2024-01-11',
    tag: '预览',
    source: 'Midjourney',
  },
  {
    id: '6',
    title: 'Stable Diffusion 3 开源，推动 AI 绘画民主化',
    summary: 'Stability AI 发布 Stable Diffusion 3，性能大幅提升的同时保持开源，推动 AI 绘画技术普及。',
    date: '2024-01-10',
    tag: '开源',
    source: 'Stability AI',
  },
  {
    id: '7',
    title: 'Meta 发布 Llama 3 模型，参数规模达 400B',
    summary: 'Facebook 母公司 Meta 发布 Llama 3 大语言模型，在多项任务上达到业界领先水平。',
    date: '2024-01-09',
    tag: '模型',
    source: 'Meta AI',
  },
  {
    id: '8',
    title: 'Runway Gen-2 视频生成能力升级',
    summary: 'AI 视频生成平台 Runway 发布 Gen-2 更新，支持更长的视频生成和更高的分辨率。',
    date: '2024-01-08',
    tag: '工具',
    source: 'Runway',
  },
]

const tabs = [
  { id: 'all', label: '全部', icon: Newspaper },
  { id: 'hot', label: '热门', icon: TrendingUp },
  { id: 'latest', label: '最新', icon: Clock },
]

export default function NewsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredNews = activeTab === 'hot' 
    ? mockNews.filter((n) => n.isHot)
    : activeTab === 'latest'
    ? mockNews.slice(0, 5)
    : mockNews

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      '新发布': 'bg-purple-50 text-purple-600 border-purple-200',
      '更新': 'bg-blue-50 text-blue-600 border-blue-200',
      '新闻': 'bg-orange-50 text-orange-600 border-orange-200',
      '工具': 'bg-green-50 text-green-600 border-green-200',
      '预览': 'bg-pink-50 text-pink-600 border-pink-200',
      '开源': 'bg-cyan-50 text-cyan-600 border-cyan-200',
      '模型': 'bg-indigo-50 text-indigo-600 border-indigo-200',
    }
    return colors[tag] || 'bg-gray-50 text-gray-600 border-gray-200'
  }

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-primary-600" />
          <h2 className="text-lg font-bold text-gray-900">每日AI快讯</h2>
        </div>
        <Link href="/news" className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700">
          全部快讯 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="space-y-4">
        {filteredNews.map((news) => (
          <article
            key={news.id}
            className="group p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  {news.isHot && (
                    <span className="flex items-center gap-1 text-xs text-red-500 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      热门
                    </span>
                  )}
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded-full border ${getTagColor(news.tag)}`}>
                    {news.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{news.summary}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-gray-400">来源：{news.source}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => toggleBookmark(news.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    bookmarkedIds.has(news.id)
                      ? 'bg-yellow-50 text-yellow-600'
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedIds.has(news.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link
          href="/news"
          className="flex items-center justify-center gap-2 w-full py-3 text-sm text-primary-600 hover:text-primary-700 font-medium bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
        >
          查看更多 AI 快讯 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}