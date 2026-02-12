import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('ads')
export class Ad {
  @PrimaryGeneratedColumn()
  /** ID */
  id: number;

  @Column({ length: 200 })
  /** 广告标题 */
  title: string;

  @Column({ length: 500 })
  /** 广告图片URL */
  image_url: string;

  @Column({ length: 500 })
  /** 广告跳转链接 */
  link_url: string;

  @Column({ type: 'text', nullable: true })
  /** 广告内容 */
  content: string;

  @Column({ length: 255, nullable: true })
  /** 广告描述 */
  description: string;

  @Column({ length: 50, default: 'banner' })
  /** 广告位置 (banner, sidebar, popup, inline, text) */
  position: string;

  @Column({ length: 50, default: 'image' })
  /** 广告类型 (image, text, video, html) */
  ad_type: string;

  @Column({ type: 'json', nullable: true })
  /** 广告配置 */
  config: object;

  @Column({ default: 0 })
  /** 排序顺序 */
  sort_order: number;

  @Column({ default: 0 })
  /** 浏览次数 */
  views: number;

  @Column({ default: 0 })
  /** 点击次数 */
  clicks: number;

  @Column({ default: 0.00 })
  /** 点击率 */
  ctr: number;

  @Column({ default: true })
  /** 是否激活 */
  is_active: boolean;

  @Column({ default: false })
  /** 是否新窗口打开 */
  open_in_new_window: boolean;

  @Column({ type: 'date', nullable: true })
  /** 开始日期 */
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  /** 结束日期 */
  end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  /** 上线时间 */
  published_at: Date;

  @Column({ name: 'user_id', nullable: true })
  /** 创建用户ID */
  user_id: number;

  @Column({ length: 50, nullable: true })
  /** 目标用户类型 (all, guest, user, vip) */
  target_audience: string;

  @Column({ type: 'json', nullable: true })
  /** 显示页面 */
  show_pages: string[];

  @CreateDateColumn({ name: 'created_at' })
  /** 创建时间 */
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  /** 更新时间 */
  updated_at: Date;
}
