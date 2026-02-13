import axios from 'axios'
import type { Tool, ToolListParams } from '@/types/tool'
const isServer = typeof window === 'undefined';

const api = axios.create({
  baseURL: isServer ? process.env.API_BASE_URL : process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
})


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
        data: [], 
        total: 0,
      }
    }
  },
  getBySlug: async (slug: string, includeCategory?: boolean) => {
    try {
      const { data } = await api.get(`/tools/slug/${slug}`, {params: {includeCategory}})
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
