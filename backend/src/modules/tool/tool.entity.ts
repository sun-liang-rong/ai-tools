import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../category/category.entity';

/**
 * AI工具实体类
 * 存储所有AI工具的基本信息、功能特性、SEO配置和统计信息
 */
@Entity('tools')
export class Tool {
  /** 工具主键ID - 自动生成 */
  @PrimaryGeneratedColumn()
  id: number;

  /** 工具名称 - 最大长度100字符 */
  @Column({ length: 100 })
  name: string;

  /** 工具唯一标识符 - 用于URL路由，最大长度120字符 */
  @Column({ length: 120, unique: true })
  slug: string;

  /** 工具Logo图标URL - 最大长度255字符 */
  @Column({ length: 255, nullable: true })
  logo: string;

  /** 工具官方网站URL - 最大长度255字符 */
  @Column({ length: 255 })
  website: string;

  /** 工具简短描述 - 用于列表展示，最大长度255字符 */
  @Column({ name: 'short_desc', length: 255 })
  short_desc: string;

  /** 工具详细描述 - 长文本格式，支持HTML */
  @Column({ type: 'longtext' })
  content: string;

  /** 所属分类ID - 关联category表 */
  @Column({ name: 'category_id' })
  category_id: number;

  /** 所属分类对象 - 多对一关联 */
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({name: 'is_home', type: 'tinyint', default: 0 })
  /** 是否首页展示 - 1:展示 0:不展示，默认0 */
  is_home: number;

  /** 是否免费 - 1:免费 0:付费，默认1 */
  @Column({ name: 'is_free', type: 'tinyint', default: 1 })
  is_free: number;

  /** 是否支持中文 - 1:支持 0:不支持，默认0 */
  @Column({ name: 'is_chinese', type: 'tinyint', default: 0 })
  is_chinese: number;

  /** 是否开源 - 1:开源 0:不开源，默认0 */
  @Column({ name: 'is_open_source', type: 'tinyint', default: 0 })
  is_open_source: number;

  /** 是否提供API - 1:提供 0:不提供，默认0 */
  @Column({ name: 'has_api', type: 'tinyint', default: 0 })
  has_api: number;

  /** 是否推荐 - 1:推荐 0:不推荐，默认0 */
  @Column({ name: 'is_recommend', type: 'tinyint', default: 0 })
  is_recommend: number;

  /** 状态 - 1:启用 0:禁用，默认1 */
  @Column({ type: 'tinyint', default: 1 })
  status: number;

  /** 浏览次数 - 默认0 */
  @Column({ default: 0 })
  views: number;

  /** 点击次数 - 默认0 */
  @Column({ default: 0 })
  clicks: number;

  /** 排序权重 - 数值越大越靠前，默认0 */
  @Column({ default: 0 })
  sort: number;

  /** SEO标题 - 用于搜索引擎优化，最大长度150字符 */
  @Column({ name: 'seo_title', length: 150, nullable: true })
  seo_title: string;

  /** SEO描述 - 用于搜索引擎优化，最大长度255字符 */
  @Column({ name: 'seo_description', length: 255, nullable: true })
  seo_description: string;

  /** 创建时间 - 自动记录 */
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  /** 更新时间 - 自动更新 */
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  /** 标签信息 - 预留字段，用于存储工具标签 */
  tags: any;
}
