import HomeSearch from "@/components/HomeSearch";
import { Sparkles, FolderOpen, ChevronRight, Grid3X3, List } from "lucide-react";
import { categoryApi } from "@/services/api";
import ToolCard from "@/components/ToolCard";
import { Tool } from "@/types/tool";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const { data } = await categoryApi.getBySlug(slug);

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Header Section */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              首页
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/categories" className="hover:text-blue-600 transition-colors">
              分类
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{data?.name || '分类'}</span>
          </nav>

          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  {data?.name || '分类'}
                </h1>
                <p className="text-slate-500 mt-1">
                  共收录 {data?.tools?.length || 0} 个工具
                </p>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
              <button className="p-2 rounded-lg bg-slate-100 text-slate-700">
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-2xl">
            <HomeSearch />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {data?.tools && data.tools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.tools.map((tool: Tool, index: number) => (
                <div
                  key={tool.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                暂无工具
              </h3>
              <p className="text-slate-500">
                该分类下暂时没有收录任何工具
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
