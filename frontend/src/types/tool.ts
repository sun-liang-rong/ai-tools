export interface Category {
  id: number
  name: string
  slug: string
  sort_order: number
  created_at: string,
  tools?: Tool[]
}

export interface Tag {
  id: number
  name: string
}

export interface Tool {
  id: number
  category_id: number
  name: string
  slug: string
  logo: string
  short_desc: string
  seo_description: string
  content: string
  description: string
  website: string
  is_home: boolean // 是否首页展示
  is_free: boolean
  is_zh: boolean
  status: 'published' | 'draft' | 'offline'
  is_recommend: boolean // 是否推荐
  created_at: string
  screenshot_url?: string
  likes?: number
  comments_count?: number
  category?: Category
  tags?: Tag[]
}

export interface ToolListParams {
  is_recommend?: boolean
  is_open_source?: boolean
  category?: number
  category_id?: number
  limit?: number
  page?: number
  pageSize?: number
  is_free?: boolean | number
  is_chinese?: boolean | number
  free?: boolean
  zh?: boolean
  sort?: string
  keyword?: string
}

export interface ToolListResponse {
  data: Tool[]
  pagination: {
    page: number
    total: number
    per_page: number
  }
}

export interface SearchParams {
  q: string
}
