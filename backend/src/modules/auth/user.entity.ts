import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  /** ID */
  id: number;

  @Column({ length: 100, unique: true })
  /** 用户名 */
  username: string;

  @Column({ length: 255 })
  /** 密码（加密后） */
  password: string;

  @Column({ length: 255, unique: true })
  /** 电子邮箱 */
  email: string;

  @Column({ length: 100, nullable: true })
  /** 显示名称 */
  display_name: string;

  @Column({ length: 255, nullable: true })
  /** 头像URL */
  avatar_url: string;

  @Column({ length: 20, nullable: true })
  /** 手机号码 */
  phone: string;

  @Column({ type: 'text', nullable: true })
  /** 个人简介 */
  bio: string;

  @Column({ length: 100, nullable: true })
  /** 公司名称 */
  company: string;

  @Column({ length: 100, nullable: true })
  /** 职位 */
  job_title: string;

  @Column({ length: 100, nullable: true })
  /** 个人网站 */
  website: string;

  @Column({ length: 50, nullable: true })
  /** 国家 */
  country: string;

  @Column({ length: 50, nullable: true })
  /** 城市 */
  city: string;

  @Column({ type: 'date', nullable: true })
  /** 生日 */
  birthday: Date;

  @Column({ length: 10, nullable: true })
  /** 性别 (male, female, other) */
  gender: string;

  @Column({ default: 'user' })
  /** 用户角色 (admin, editor, user, guest) */
  role: string;

  @Column({ default: true })
  /** 是否激活 */
  is_active: boolean;

  @Column({ default: false })
  /** 是否邮箱验证 */
  email_verified: boolean;

  @Column({ default: false })
  /** 是否手机验证 */
  phone_verified: boolean;

  @Column({ type: 'timestamp', nullable: true })
  /** 最后登录时间 */
  last_login_at: Date;

  @Column({ length: 100, nullable: true })
  /** 最后登录IP */
  last_login_ip: string;

  @Column({ type: 'timestamp', nullable: true })
  /** 禁用时间 */
  banned_at: Date;

  @Column({ length: 500, nullable: true })
  /** 禁用原因 */
  ban_reason: string;

  @CreateDateColumn({ name: 'created_at' })
  /** 创建时间 */
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  /** 更新时间 */
  updated_at: Date;
}
