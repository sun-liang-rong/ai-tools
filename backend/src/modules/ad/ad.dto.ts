import { IsString, IsOptional, IsBoolean, IsNumber, IsUrl, Length, IsDateString } from 'class-validator';

export class CreateAdDto {
  @IsString()
  @Length(1, 200)
  title: string;

  @IsUrl()
  image_url: string;

  @IsUrl()
  link_url: string;

  @IsString()
  @IsOptional()
  @Length(0, 255)
  description?: string;
  
  @IsNumber()
  @IsOptional()
  sort_order?: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsString()
  @IsOptional()
  position?: string;

  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  end_date?: string;
}

export class UpdateAdDto {
  @IsString()
  @IsOptional()
  @Length(1, 200)
  title?: string;

  @IsUrl()
  @IsOptional()
  image_url?: string;

  @IsUrl()
  @IsOptional()
  link_url?: string;

  @IsString()
  @IsOptional()
  @Length(0, 255)
  description?: string;

  @IsNumber()
  @IsOptional()
  sort_order?: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsString()
  @IsOptional()
  position?: string;

  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  end_date?: string;
}
