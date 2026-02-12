import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(3, 50)
  username: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @Length(0, 100)
  display_name?: string;
}

export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  @Length(6, 50)
  password: string;
}
