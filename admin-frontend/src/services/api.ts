import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error)
    const message = error.response?.data?.message || error.message || '请求失败'
    message.error(message)
    return Promise.reject(error)
  }
)

export interface Tool {
  id: number
  name: string
  slug: string
  logo?: string
  website: string
  short_desc: string
  content: string
  category_id: number
  category?: Category
  tags?: Tag[]
  is_home: number
  is_free: number
  is_chinese: number
  is_open_source: number
  has_api: number
  is_recommend: number
  status: number
  views: number
  clicks: number
  sort: number
  seo_title?: string
  seo_description?: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  icon?: string
  parent_id?: number | null
  parent?: Category
  children?: Category[]
  sort: number
  is_show: number
  is_home: number
  tool_count: number
  created_at: string
  updated_at: string
}

export interface Tag {
  id: number
  name: string
  slug: string
}

export interface Submission {
  id: number
  tool_name: string
  website_url: string
  short_description: string
  description?: string
  tags?: string[]
  submitter_name?: string
  submitter_email?: string
  status: string
  remarks?: string
  created_at: string
  updated_at: string
}

export interface Ad {
  id: number
  title: string
  image_url: string
  link_url: string
  description?: string
  sort_order: number
  views: number
  clicks: number
  is_active: boolean
  position: string
  start_date?: string
  end_date?: string
  created_at: string
  updated_at: string
}

export interface User {
  id: number
  username: string
  email: string
  display_name?: string
  role: string
  is_active: boolean
  last_login_at?: string
  created_at: string
}

export interface LoginResponse {
  access_token: string
  user: {
    id: number
    username: string
    email: string
    display_name?: string
    role: string
  }
}

export const authApi = {
  register: (data: { username: string; password: string; email: string; display_name?: string }) => api.post<LoginResponse>('/auth/register', data),
  login: (data: { username: string; password: string }) => api.post<LoginResponse>('/auth/login', data),
  getProfile: () => api.get<User>('/auth/profile'),
}

export const toolApi = {
  getList: (params?: any) => api.get<{ data: Tool[]; total: number }>('/tools', { params }),
  getById: (id: number, params?: any) => api.get<Tool>(`/tools/${id}`, { params }),
  getBySlug: (slug: string, params?: any) => api.get<Tool>(`/tools/slug/${slug}`, { params }),
  create: (data: Partial<Tool>) => api.post<Tool>('/tools', data),
  update: (id: number, data: Partial<Tool>) => api.put<Tool>(`/tools/${id}`, data),
  delete: (id: number) => api.delete(`/tools/${id}`),
  incrementViews: (id: number) => api.post(`/tools/${id}/views`),
  incrementClicks: (id: number) => api.post(`/tools/${id}/clicks`),
  search: (keyword: string, page?: number, pageSize?: number, category_id?: number) => 
    api.get<{ data: Tool[]; total: number }>('/tools/search', { params: { keyword, page, pageSize, category_id } }),
}
interface CategoryListResponse {
  data: Category[]
  total: number
}
export const categoryApi = {
  getList: (params?: any) => api.get<CategoryListResponse>('/categories', { params }),
  getById: (id: number, params?: any) => api.get<Category>(`/categories/${id}`, { params }),
  getBySlug: (slug: string) => api.get<Category>(`/categories/slug/${slug}`),
  getTree: () => api.get<Category[]>('/categories/tree'),
  create: (data: Partial<Category>) => api.post<Category>('/categories', data),
  update: (id: number, data: Partial<Category>) => api.put<Category>(`/categories/${id}`, data),
  delete: (id: number) => api.delete(`/categories/${id}`),
}

export const submissionApi = {
  getList: (params?: any) => api.get<{ data: Submission[]; total: number }>('/submissions', { params }),
  getById: (id: number) => api.get<Submission>(`/submissions/${id}`),
  create: (data: Partial<Submission>) => api.post<Submission>('/submissions', data),
  update: (id: number, data: Partial<Submission>) => api.put<Submission>(`/submissions/${id}`, data),
  delete: (id: number) => api.delete(`/submissions/${id}`),
  approve: (id: number, remarks?: string) => api.put(`/submissions/${id}`, { status: 'approved', remarks }),
  reject: (id: number, remarks?: string) => api.put(`/submissions/${id}`, { status: 'rejected', remarks }),
}

export const adApi = {
  getList: (params?: any) => api.get<{ data: Ad[]; total: number }>('/ads', { params }),
  getActive: (params?: any) => api.get<Ad[]>('/ads/active', { params }),
  getById: (id: number) => api.get<Ad>(`/ads/${id}`),
  create: (data: Partial<Ad>) => api.post<Ad>('/ads', data),
  update: (id: number, data: Partial<Ad>) => api.put<Ad>(`/ads/${id}`, data),
  delete: (id: number) => api.delete(`/ads/${id}`),
  incrementViews: (id: number) => api.post(`/ads/${id}/views`),
  incrementClicks: (id: number) => api.post(`/ads/${id}/clicks`),
}

export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    return api.post<{ url: string; filename: string; originalName: string; size: number; mimetype: string }>('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}

export default api
