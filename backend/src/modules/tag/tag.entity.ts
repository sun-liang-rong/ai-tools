import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Tool } from '../tool/tool.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  /** ID */
  id: number;

  @Column({ length: 100, unique: true })
  /** 标签名称 */
  name: string;

  @Column({ length: 100, unique: true })
  /** 标签别名（用于URL） */
  slug: string;

  @Column({ length: 500, nullable: true })
  /** 标签图标 */
  icon: string;

  @Column({ type: 'text', nullable: true })
  /** 标签描述 */
  description: string;

  @Column({ length: 50, default: 'tool' })
  /** 标签类型 (tool, article, tutorial, news) */
  tag_type: string;

  @Column({ length: 200, nullable: true })
  /** SEO 标题 */
  seo_title: string;

  @Column({ length: 500, nullable: true })
  /** SEO 描述 */
  seo_description: string;

  @Column({ length: 500, nullable: true })
  /** SEO 关键词 */
  seo_keywords: string;

  @Column({ default: 0 })
  /** 使用次数 */
  usage_count: number;

  @Column({ default: 0 })
  /** 排序顺序 */
  sort_order: number;

  @Column({ default: true })
  /** 是否激活 */
  is_active: boolean;

  @Column({ default: false })
  /** 是否推荐 */
  recommended: boolean;

  @CreateDateColumn({ name: 'created_at' })
  /** 创建时间 */
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  /** 更新时间 */
  updated_at: Date;

  @ManyToMany(() => Tool, tool => tool.tags)
  /** 关联的工具 */
  tools: Tool[];
}