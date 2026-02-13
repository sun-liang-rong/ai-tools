import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, Github, Twitter, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'AI工具集', href: '/categories' },
    { name: 'AI应用集', href: '/apps' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@ai-bot.cn' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.02] rounded-full" />
      </div>

      {/* 顶部渐变线 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 主要内容区 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* 品牌区域 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AI导航"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">AI导航</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-sm">
              发现并探索最前沿的 AI 工具。我们精心筛选、深度评测，
              助你找到最适合的人工智能解决方案。
            </p>

            {/* 社交链接 */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* 链接区域 */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
              快速链接
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 订阅区域 */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
              订阅更新
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              获取最新 AI 工具动态，每周精选推荐。
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-purple-500/20"
              >
                订阅
              </button>
            </form>
          </div>
        </div>

        {/* 底部分隔线和版权 */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} AI导航. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                使用条款
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                关于我们
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
    </footer>
  )
}
