import { MetadataRoute } from 'next'
import { categoryApi, toolApi } from '@/services/api'
import { Category, Tool } from '@/types/tool'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3333/api'

  try {
    const [categories, toolsResponse] = await Promise.all([
      categoryApi.getAll(),
      toolApi.getList({}),
    ])

    const staticUrls: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]

    const categoryUrls: MetadataRoute.Sitemap = categories.map((category: Category) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(category.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    const toolUrls: MetadataRoute.Sitemap = toolsResponse.data
      .filter((tool: Tool) => tool.status === 'published')
      .map((tool: Tool) => ({
        url: `${baseUrl}/tool/${tool.slug}`,
        lastModified: new Date(tool.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))

    return [...staticUrls, ...categoryUrls, ...toolUrls]
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }
}
