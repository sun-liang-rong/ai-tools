import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { categoryApi } from '@/services/api'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI 导航 - 优质 AI 工具导航站',
  description: '收录最新 AI 工具，提供 AI 软件下载、使用指南与评测。包含免费、中文、开源等精选资源。',
  keywords: 'AI工具, AI导航, 人工智能, ChatGPT, AI写作, AI绘画',
  openGraph: {
    title: 'AI 导航 - 优质 AI 工具导航站',
    description: '收录最新 AI 工具，提供 AI 软件下载、使用指南与评测。',
    type: 'website',
  },
}

async function getCategories() {
  try {
    const data = await categoryApi.getAll()
    return data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
