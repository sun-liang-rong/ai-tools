import { IsString, IsOptional, IsNumber, Length, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 100)
  slug: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  icon?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;

  @IsNumber()
  @IsOptional()
  parent_id?: number | null;

  @IsNumber()
  @IsOptional()
  sort?: number;

  @IsNumber()
  @IsOptional()
  is_show?: number;

  @IsNumber()
  @IsOptional()
  is_home?: number;

  @IsNumber()
  @IsOptional()
  tool_count?: number;
}

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  @Length(1, 50)
  name?: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  slug?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  icon?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;

  @IsNumber()
  @IsOptional()
  parent_id?: number | null;

  @IsNumber()
  @IsOptional()
  sort?: number;

  @IsNumber()
  @IsOptional()
  is_show?: number;

  @IsNumber()
  @IsOptional()
  is_home?: number;

  @IsNumber()
  @IsOptional()
  tool_count?: number;
}

export class QueryCategoryDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  pageSize?: number;

  @IsOptional()
  parent_id?: number;

  @IsOptional()
  is_show?: number;

  @IsOptional()
  is_home?: number;

  @IsOptional()
  keyword?: string;

  @IsOptional()
  includeChildren?: boolean;
}
