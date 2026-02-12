import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tool } from '../tool/tool.entity';

/**
 * 分类实体类
 * 支持多级分类结构，用于组织和管理AI工具
 */
@Entity('categories')
export class Category {
  /** 分类主键ID - 自动生成 */
  @PrimaryGeneratedColumn()
  id: number;

  /** 分类名称 - 最大长度50字符 */
  @Column({ length: 50 })
  name: string;

  /** 分类唯一标识符 - 用于URL路由，最大长度100字符 */
  @Column({ length: 100, unique: true })
  slug: string;

  /** 分类描述 - 最大长度255字符 */
  @Column({ length: 255, nullable: true })
  description: string;

  /** 分类图标URL - 最大长度255字符 */
  @Column({ length: 255, nullable: true })
  icon: string;

  /** 父分类ID - 支持多级分类，顶级分类为null */
  @Column({ name: 'parent_id', nullable: true, default: null })
  parent_id: number | null;

  /** 排序权重 - 数值越大越靠前，默认0 */
  @Column({ default: 0 })
  sort: number;

  /** 是否显示 - 1:显示 0:隐藏，默认1 */
  @Column({ name: 'is_show', type: 'tinyint', default: 1 })
  is_show: number;

  /** 是否首页展示 - 1:展示 0:不展示，默认0 */
  @Column({ name: 'is_home', type: 'tinyint', default: 0 })
  is_home: number;

  /** 工具数量统计 - 该分类下的工具总数，默认0 */
  @Column({ name: 'tool_count', default: 0 })
  tool_count: number;

  /** 创建时间 - 自动记录 */
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  /** 更新时间 - 自动更新 */
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  /** 该分类下的工具列表 - 一对多关联 */
  @OneToMany(() => Tool, (tool) => tool.category)
  tools: Tool[];

  /** 父分类对象 - 多对一关联 */
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'parent_id' })
  parent: Category;

  /** 子分类列表 - 一对多关联 */
  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];
}
