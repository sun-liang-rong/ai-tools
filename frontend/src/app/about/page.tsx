import { Metadata } from 'next'
import Image from 'next/image'
import { Target, Users, Zap, Mail, Github, Twitter, Heart } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '关于我们 - AI工具库',
    description: '了解AI工具库的使命和愿景，探索优质的人工智能工具，提升工作效率。',
    openGraph: {
      title: '关于我们 - AI工具库',
      description: '了解AI工具库的使命和愿景',
      type: 'website',
    },
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]/30 py-12 mt-6">
      <div className="container-custom max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-blue-500/20 mb-6 overflow-hidden">
              <Image
                src="/logo.png"
                alt="AI工具库"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              关于<span className="text-gradient">AI工具库</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              致力于发现和整理优质的人工智能工具，帮助用户提升工作效率，激发创意灵感
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">我们的使命</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              AI工具库是一个专注于人工智能工具的导航平台。我们深知在AI快速发展的时代，找到合适的工具并不容易。因此，我们致力于：
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">1</span>
                <span>精选全球优质AI工具，提供详细的功能介绍和使用指南</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">2</span>
                <span>按功能和用途分类整理，帮助用户快速找到所需工具</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center text-sm font-bold">3</span>
                <span>持续更新和维护，确保工具信息的准确性和时效性</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: '精准筛选',
                description: '严格筛选优质工具，确保推荐的都是经过验证的可靠选择',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Zap,
                title: '高效导航',
                description: '清晰的分类体系和搜索功能，让您快速找到理想工具',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Users,
                title: '用户至上',
                description: '以用户需求为中心，不断优化体验，提供更好的服务',
                color: 'from-orange-500 to-red-500',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-blue-800/30 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">联系我们</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:contact@aitools.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                发送邮件
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                GitHub
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
                Twitter
              </Link>
            </div>
          </div>

          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
              用 <Heart className="w-4 h-4 text-red-500 fill-current" /> 打造
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
