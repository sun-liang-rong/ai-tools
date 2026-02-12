import axios from 'axios'
import type { Category, Tool, ToolListParams, ToolListResponse, SearchParams } from '@/types/tool'
import { mockCategories, mockTools, getMockToolBySlug, getMockToolsByCategory, searchMockTools } from '@/lib/mock-data'
import { getCppHeapStatistics } from 'node:v8'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api',
  timeout: 10000,
})

const USE_MOCK_DATA = false

export const categoryApi = {
  getAll: async () => {
    try {
      const { data } = await api.get('/categories')
      console.log(data, 'categories')
      return data.data
    } catch (error) {
      console.warn('API 请求失败，使用假数据:', error)
      return []
    }
  },
  getBySlug: async (slug: string) => {
    try {
      const { data } = await api.get(`/categories/slug/${slug}`)
      console.log(data.data, 'slug---')
      return {data: data.data}
    } catch (error) {
      console.warn('API 请求失败，获取分类失败:', error)
      return {data: {}}
    }
  },
  getCategoriesAndTools: async () => {
    try {
      const { data } = await api.get('/categories/categories-tools')
      return {data: data?.data || []}
    } catch (error) {
      console.warn('API 请求失败，使用假数据:1111', error)
      return {data: []}
    }
  }
}
// 获取首页分类及每个分类下的工具
export const getHomeCategories = async () => {
  try {
    const {data} = await api.get('/categories/home')
    console.log(data, 'categories-------')
    return {data: data?.data || []}
  } catch (error) {
    console.warn('API 请求失败，使用假数据:1111', error)
    return {data: []}
  }
}
export const homeApi = {
  getHomeTools: async () => {
    try {
      const {data} = await api.get('/tools/home')
      console.log(data, 'tools-------')
      return {data: data?.data || []}
    } catch (error) {
      console.warn('API 请求失败，使用假数据:1111', error)
      return {data: []}
    }
  },
  getToolsCount: async () => {
    try {
      const {data} = await api.get('/tools/count')
      console.log(data, 'tools count-------')
      return {data: data?.data || 0}
    } catch (error) {
      console.warn('API 请求失败，使用假数据:1111', error)
      return {data: 0}
    }
  }
}

export const toolApi = {
  getList: async (params: ToolListParams) => {
    if (USE_MOCK_DATA) {
      let tools = [...mockTools]
      
      if (params.category) {
        tools = tools.filter(t => t.category_id === params.category)
      }
      
      if (params.is_recommend) {
        tools = tools.filter(t => t.is_recommend)
      }
      
      if (params.free) {
        tools = tools.filter(t => t.is_free)
      }
      
      if (params.zh) {
        tools = tools.filter(t => t.is_zh)
      }
      
      if (params.sort === 'new') {
        tools.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      }
      
      if (params.limit) {
        tools = tools.slice(0, params.limit)
      }
      
      if (params.page && params.limit) {
        const start = (params.page - 1) * params.limit
        tools = tools.slice(start, start + params.limit)
      }
      
      return { 
        data: tools, 
        total: tools.length,
      }
    }
    try {
      const { data } = await api.get('/tools', { params })
      console.log(data, 'dat--------')
      return {
        data: data.data?.data || [],
        total: data.data?.total || 0,
      }
    } catch (error) {
      console.warn('API 请求失败，使用假数据:', error)
      return { 
        data: mockTools, 
        total: mockTools.length,
      }
    }
  },
  getBySlug: async (slug: string) => {
    try {
      const { data } = await api.get(`/tools/slug/${slug}`)
      return {data: data.data || {}}
    } catch (error) {
      console.warn('API 请求失败，使用假数据:', error)
      return {data: []}
    }
  },
  getRelated: async (categoryId: number, excludeId: number) => {
    try {
      const { data } = await api.get<Tool[]>('/tools', {
        params: { category: categoryId, limit: 6, exclude: excludeId }
      })
      return data
    } catch (error) {
      console.warn('API 请求失败，使用假数据:', error)
      return {data: []} 
    }
  },
}

export const searchApi = {
  search: async (params: { q: string; page?: number; pageSize?: number; tab?: string }) => {
    try {
      const { data } = await api.get('/tools/search', { 
        params: { 
          keyword: params.q,
          page: params.page,
          pageSize: params.pageSize,
          tab: params.tab
        } 
      })
      // 根据后端返回结构解构，假设后端返回 { data: [...], total: 100 }
      return {
        data: data.data.data || [],
        total: data.data.total || 0
      }
    } catch (error) {
      console.error('Search API error:', error)
      return { data: [], total: 0 }
    }
  },
}

export default api
