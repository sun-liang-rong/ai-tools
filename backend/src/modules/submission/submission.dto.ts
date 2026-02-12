import { IsString, IsOptional, IsEmail, IsArray, IsUrl, Length, IsIn } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  @Length(1, 200)
  tool_name: string;

  @IsUrl()
  website_url: string;

  @IsString()
  @Length(1, 255)
  short_description: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  @Length(0, 255)
  submitter_name?: string;

  @IsEmail()
  @IsOptional()
  submitter_email?: string;
}

export class UpdateSubmissionDto {
  @IsString()
  @IsIn(['pending', 'approved', 'rejected'])
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  remarks?: string;
}
