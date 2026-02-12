import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from './tool.entity';
import { CreateToolDto, UpdateToolDto, QueryToolDto } from './tool.dto';

@Injectable()
export class ToolService {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
  ) {}

  async findAll(query: QueryToolDto): Promise<{ data: Tool[]; total: number }> {
    const {
      page = 1,
      pageSize = 10,
      keyword,
      category_id,
      is_free,
      is_chinese,
      is_open_source,
      has_api,
      is_recommend,
      status,
      includeCategory,
    } = query;

    const queryBuilder = this.toolRepository.createQueryBuilder('tool');

    if (includeCategory) {
      queryBuilder.leftJoinAndSelect('tool.category', 'category');
    }

    if (keyword) {
      queryBuilder.andWhere(
        '(tool.name LIKE :keyword OR tool.short_desc LIKE :keyword OR tool.content LIKE :keyword)',
        { keyword: `%${keyword}%` },
      );
    }

    if (category_id) {
      queryBuilder.andWhere('tool.category_id = :category_id', { category_id });
    }

    if (is_free !== undefined) {
      queryBuilder.andWhere('tool.is_free = :is_free', { is_free });
    }

    if (is_chinese !== undefined) {
      queryBuilder.andWhere('tool.is_chinese = :is_chinese', { is_chinese });
    }

    if (is_open_source !== undefined) {
      queryBuilder.andWhere('tool.is_open_source = :is_open_source', {
        is_open_source,
      });
    }

    if (has_api !== undefined) {
      queryBuilder.andWhere('tool.has_api = :has_api', { has_api });
    }

    if (is_recommend !== undefined) {
      queryBuilder.andWhere('tool.is_recommend = :is_recommend', {
        is_recommend,
      });
    }

    if (status !== undefined) {
      queryBuilder.andWhere('tool.status = :status', { status });
    }

    queryBuilder.orderBy('tool.sort', 'ASC').addOrderBy('tool.id', 'DESC');

    const [data, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number, includeCategory = false): Promise<Tool> {
    const relations: any[] = [];
    if (includeCategory) {
      relations.push('category');
    }

    const tool = await this.toolRepository.findOne({
      where: { id },
      relations,
    });
    if (!tool) {
      throw new NotFoundException(`工具 ID ${id} 不存在`);
    }
    return tool;
  }

  async findBySlug(slug: string, includeCategory = false): Promise<Tool> {
    const relations: any[] = [];
    if (includeCategory) {
      relations.push('category');
    }

    const tool = await this.toolRepository.findOne({
      where: { slug: slug },
      relations,
    });
    console.log(tool, 'tool');
    if (!tool) {
      throw new NotFoundException(`工具别名 ${slug} 不存在`);
    }
    return tool;
  }

  async create(createToolDto: CreateToolDto): Promise<Tool> {
    const { slug } = createToolDto;

    const existingSlug = await this.toolRepository.findOne({ where: { slug } });
    if (existingSlug) {
      throw new NotFoundException(`工具别名 ${slug} 已存在`);
    }

    const tool = this.toolRepository.create(createToolDto);
    return this.toolRepository.save(tool);
  }

  async update(id: number, updateToolDto: UpdateToolDto): Promise<Tool> {
    const tool = await this.findOne(id);

    if (updateToolDto.slug && updateToolDto.slug !== tool.slug) {
      const existingSlug = await this.toolRepository.findOne({
        where: { slug: updateToolDto.slug },
      });
      if (existingSlug) {
        throw new NotFoundException(`工具别名 ${updateToolDto.slug} 已存在`);
      }
    }

    Object.assign(tool, updateToolDto);
    return this.toolRepository.save(tool);
  }

  async remove(id: number): Promise<void> {
    const tool = await this.findOne(id);
    await this.toolRepository.remove(tool);
  }

  async incrementViews(id: number): Promise<void> {
    await this.toolRepository.increment({ id }, 'views', 1);
  }

  async incrementClicks(id: number): Promise<void> {
    await this.toolRepository.increment({ id }, 'clicks', 1);
  }

  async search(
    keyword: string,
    page: number = 1,
    pageSize: number = 12,
    category_id?: number,
  ): Promise<{ data: Tool[]; total: number }> {
    if (!keyword || keyword.trim() === '') {
      return { data: [], total: 0 };
    }

    const queryBuilder = this.toolRepository
      .createQueryBuilder('tool')
      .leftJoinAndSelect('tool.category', 'category')
      .where(
        '(tool.name LIKE :keyword OR tool.short_desc LIKE :keyword OR tool.content LIKE :keyword)',
        { keyword: `%${keyword}%` },
      )
      .andWhere('tool.status = :status', { status: 1 });

    if (category_id) {
      queryBuilder.andWhere('tool.category_id = :category_id', { category_id });
    }

    const [tools, total] = await queryBuilder
      .orderBy('tool.is_recommend', 'DESC')
      .addOrderBy('tool.sort', 'ASC')
      .addOrderBy('tool.views', 'DESC')
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return { data: tools, total };
  }
  async findHomeTools(): Promise<Tool[]> {
    return this.toolRepository.find({
      where: { is_home: 1 },
      order: { sort: 'ASC', id: 'DESC' },
    });
  }
  async getToolsCount(): Promise<number> {
    return this.toolRepository.count({
      where: { status: 1 },
    });
  }
}
