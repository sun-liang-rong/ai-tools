import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn()
  /** ID */
  id: number;

  @Column({ length: 200 })
  /** 工具名称 */
  tool_name: string;

  @Column({ length: 200 })
  /** 工具别名 */
  tool_slug: string;

  @Column({ length: 500 })
  /** 工具网站URL */
  website_url: string;

  @Column({ length: 500, nullable: true })
  /** 工具Logo URL */
  logo_url: string;

  @Column({ length: 255 })
  /** 简短描述 */
  short_description: string;

  @Column({ type: 'text', nullable: true })
  /** 详细描述 */
  description: string;

  @Column({ type: 'json', nullable: true })
  /** 功能特性列表 */
  features: string[];

  @Column({ type: 'json', nullable: true })
  /** 使用场景列表 */
  use_cases: string[];

  @Column({ type: 'json', nullable: true })
  /** 支持平台列表 */
  platforms: string[];

  @Column({ length: 50, default: 'ai_tool' })
  /** 工具类型 */
  tool_type: string;

  @Column({ length: 50, default: 'free' })
  /** 价格模式 */
  price_type: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  /** 价格 */
  price: number;

  @Column({ length: 255, nullable: true })
  /** 价格详细说明 */
  price_description: string;

  @Column({ default: false })
  /** 是否支持中文 */
  is_zh: boolean;

  @Column({ name: 'category_id', nullable: true })
  /** 建议分类ID */
  category_id: number;

  @Column({ name: 'user_id', nullable: true })
  /** 提交用户ID */
  user_id: number;

  @Column({ length: 255, nullable: true })
  /** 提交人姓名 */
  submitter_name: string;

  @Column({ length: 255, nullable: true })
  /** 提交人邮箱 */
  submitter_email: string;

  @Column({ length: 20, nullable: true })
  /** 提交人手机 */
  submitter_phone: string;

  @Column({ default: 'pending' })
  /** 审核状态 (pending, approved, rejected, published) */
  status: string;

  @Column({ type: 'text', nullable: true })
  /** 审核备注 */
  remarks: string;

  @Column({ name: 'reviewer_id', nullable: true })
  /** 审核人ID */
  reviewer_id: number;

  @Column({ type: 'timestamp', nullable: true })
  /** 审核时间 */
  reviewed_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  /** 发布时间 */
  published_at: Date;

  @CreateDateColumn({ name: 'created_at' })
  /** 创建时间 */
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  /** 更新时间 */
  updated_at: Date;
}
