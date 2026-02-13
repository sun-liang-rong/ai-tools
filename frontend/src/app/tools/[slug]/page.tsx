import { toolApi } from "@/services/api";
import ToolCard from "@/components/ToolCard";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ThumbsUp,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Tag,
  Globe,
  ArrowUpRight,
  Heart,
  Share2,
} from "lucide-react";
import { Tool } from "@/types/tool";
import Image from "next/image";

interface ToolPageProps {
  params: { slug: string };
}

async function getToolData(slug: string) {
  try {
    const { data: tool } = (await toolApi.getBySlug(slug, true)) as { data: Tool };
    const relatedTools = tool.category_id
      ? await toolApi.getRelated(tool.category_id, tool.id)
      : [];
    return { tool, relatedTools };
  } catch (error) {
    console.error("Failed to fetch tool data:", error);
    return { tool: null, relatedTools: [] };
  }
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { tool } = await getToolData(params.slug);

  if (!tool) {
    return {
      title: "工具不存在 - AI 导航",
    };
  }
  const cleanDescription = tool.content
    .replace(/<[^>]*>/g, "")
    .replace(/\n/g, " ")
    .slice(0, 150);

  return {
    title: `${tool.name}介绍 - ${tool.seo_description} | AI 导航`,
    description: cleanDescription + "...",
    alternates: {
      canonical: `/tool/${params.slug}`,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { tool, relatedTools } = await getToolData(params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-mesh mt-12">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-4 h-4" />
            {tool.category && (
              <>
                <Link
                  href={`/categories/${tool.category.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {tool.category.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-slate-900 font-medium">{tool.name}</span>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Preview */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                {/* Browser Mockup */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="px-3 py-1 bg-white rounded-md text-xs text-slate-400 text-center border border-slate-200">
                        {tool.website || "example.com"}
                      </div>
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="relative aspect-[4/3] bg-slate-50 p-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm overflow-hidden">
                      <Image
                        src={tool.logo || "/logo.png"}
                        alt={tool.name}
                        width={400}
                        height={300}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  {tool.is_free ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-full border border-green-100">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      免费
                    </span>
                  ) : null}
                  {tool.is_zh ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100">
                      <Globe className="w-3.5 h-3.5" />
                      中文支持
                    </span>
                  ) : null}
                  {tool.category && (
                    <Link
                      href={`/categories/${tool.category.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {tool.category.name}
                    </Link>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                    {tool.name}
                  </h1>
                  <p className="text-lg text-slate-500 mt-3 leading-relaxed">
                    {tool.short_desc}
                  </p>
                </div>

                {/* Tags List */}
                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-slate-400" />
                    {tool.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-primary text-base px-8 py-4"
                  >
                    <ExternalLink className="w-5 h-5" />
                    访问官网
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button className="btn-secondary px-6 py-4">
                    <Share2 className="w-5 h-5" />
                    分享
                  </button>

                  <button className="btn-secondary px-6 py-4">
                    <ShieldCheck className="w-5 h-5" />
                    安全检测
                  </button>
                </div>

                {/* Description */}
                {tool.content && (
                  <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      工具介绍
                    </h2>
                    <div
                      className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                      dangerouslySetInnerHTML={{ __html: tool.content }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {/* 暂时未实现 */}
      {/* {relatedTools && relatedTools.length > 0 && (
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">相关推荐</h2>
              <Link
                href={`/categories/${tool.category?.slug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                查看更多
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.slice(0, 4).map((relatedTool: Tool) => (
                <ToolCard key={relatedTool.id} tool={relatedTool} />
              ))}
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
}
