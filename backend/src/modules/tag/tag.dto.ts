export class CreateTagDto {
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  tag_type?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  sort_order?: number;
}

export class UpdateTagDto {
  name?: string;
  slug?: string;
  icon?: string;
  description?: string;
  tag_type?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  sort_order?: number;
  is_active?: boolean;
  recommended?: boolean;
}