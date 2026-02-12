import { IsString, IsOptional, IsNumber, IsUrl, Length, MaxLength } from 'class-validator';

export class CreateToolDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(1, 120)
  slug: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  logo?: string;

  @IsUrl()
  website: string;

  @IsString()
  @Length(1, 255)
  short_desc: string;

  @IsString()
  content: string;

  @IsNumber()
  category_id: number;
  @IsNumber()
  @IsOptional()
  is_home?: number;
  @IsNumber()
  @IsOptional()
  is_free?: number;

  @IsNumber()
  @IsOptional()
  is_chinese?: number;

  @IsNumber()
  @IsOptional()
  is_open_source?: number;

  @IsNumber()
  @IsOptional()
  has_api?: number;

  @IsNumber()
  @IsOptional()
  is_recommend?: number;

  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNumber()
  @IsOptional()
  views?: number;

  @IsNumber()
  @IsOptional()
  clicks?: number;

  @IsNumber()
  @IsOptional()
  sort?: number;

  @IsString()
  @IsOptional()
  @MaxLength(150)
  seo_title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  seo_description?: string;
}

export class UpdateToolDto {
  @IsString()
  @IsOptional()
  @Length(1, 100)
  name?: string;

  @IsString()
  @IsOptional()
  @Length(1, 120)
  slug?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  logo?: string;

  @IsUrl()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  @Length(1, 255)
  short_desc?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  category_id?: number;
  @IsNumber()
  @IsOptional()
  is_home?: number;

  @IsNumber()
  @IsOptional()
  is_free?: number;

  @IsNumber()
  @IsOptional()
  is_chinese?: number;

  @IsNumber()
  @IsOptional()
  is_open_source?: number;

  @IsNumber()
  @IsOptional()
  has_api?: number;

  @IsNumber()
  @IsOptional()
  is_recommend?: number;

  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNumber()
  @IsOptional()
  views?: number;

  @IsNumber()
  @IsOptional()
  clicks?: number;

  @IsNumber()
  @IsOptional()
  sort?: number;

  @IsString()
  @IsOptional()
  @MaxLength(150)
  seo_title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  seo_description?: string;
}

export class QueryToolDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  pageSize?: number;

  @IsOptional()
  keyword?: string;

  @IsOptional()
  category_id?: number;

  @IsOptional()
  is_free?: number;

  @IsOptional()
  is_chinese?: number;

  @IsOptional()
  is_open_source?: number;

  @IsOptional()
  has_api?: number;

  @IsOptional()
  is_recommend?: number;

  @IsOptional()
  status?: number;

  @IsOptional()
  includeCategory?: boolean;
}
