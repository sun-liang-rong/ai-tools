import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  QueryCategoryDto,
} from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(
    query: QueryCategoryDto,
  ): Promise<{ data: Category[]; total: number }> {
    const {
      page,
      pageSize,
      parent_id,
      is_show,
      is_home,
      keyword,
      includeChildren,
    } = query;

    const queryBuilder = this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.parent', 'parent')
      .leftJoinAndSelect('category.children', 'children');

    if (parent_id !== undefined) {
      queryBuilder.andWhere('category.parent_id = :parent_id', { parent_id });
    }

    if (is_show !== undefined) {
      queryBuilder.andWhere('category.is_show = :is_show', { is_show });
    }

    if (is_home !== undefined) {
      queryBuilder.andWhere('category.is_home = :is_home', { is_home });
    }

    if (keyword) {
      queryBuilder.andWhere(
        '(category.name LIKE :keyword OR category.slug LIKE :keyword OR category.description LIKE :keyword)',
        { keyword: `%${keyword}%` },
      );
    }

    queryBuilder
      .orderBy('category.sort', 'ASC')
      .addOrderBy('category.id', 'ASC');

    if (page && pageSize) {
      queryBuilder.skip((page - 1) * pageSize).take(pageSize);
    }

    const [data, total] = await queryBuilder.getManyAndCount();

    if (includeChildren) {
      for (const category of data) {
        category.children = await this.getChildren(category.id);
      }
    }

    return { data, total };
  }

  async findTree(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      where: { is_show: 1 },
      order: { sort: 'ASC', id: 'ASC' },
      relations: ['parent', 'children'],
    });
    return this.buildTree(categories);
  }

  async findOne(id: number, includeChildren = false): Promise<Category> {
    const relations: any[] = ['parent'];
    if (includeChildren) {
      relations.push('children');
    }

    const category = await this.categoryRepository.findOne({
      where: { id },
      relations,
    });

    if (!category) {
      throw new NotFoundException(`分类 ID ${id} 不存在`);
    }

    if (includeChildren) {
      category.children = await this.getChildren(id);
    }

    return category;
  }

  async findBySlug(slug: string): Promise<Category> {
    const category = await this.categoryRepository
      .createQueryBuilder('category')
      // 当前分类的工具（可选）
      .leftJoinAndSelect('category.tools', 'tools')

      // 子分类
      .leftJoinAndSelect('category.children', 'children')

      // 子分类的工具
      .leftJoinAndSelect('children.tools', 'childrenTools')

      .where('category.slug = :slug', { slug: slug })
      .getOne();
    console.log(category, 'category');
    if (!category) {
      throw new NotFoundException(`分类别名 ${slug} 不存在`);
    }

    return category;
  }

  async findHomeCategories(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      where: { is_home: 1, is_show: 1, parent_id: undefined },
      relations: ['tools'],
    });
    return categories;
  }

  async findCategoriesAndTools(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      where: { is_show: 1, parent_id: undefined },
      relations: ['children', 'tools'],
    });
    return categories;
  }

  async findNavCategories(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      where: { is_show: 1, parent_id: undefined },
      order: { sort: 'ASC', id: 'ASC' },
      relations: ['children'],
    });

    for (const category of categories) {
      category.children = category.children
        .filter((child) => child.is_show === 1)
        .sort((a, b) => a.sort - b.sort);
    }

    return categories;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { slug } = createCategoryDto;

    const existingSlug = await this.categoryRepository.findOne({
      where: { slug },
    });
    if (existingSlug) {
      throw new BadRequestException(`分类别名 ${slug} 已存在`);
    }

    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.findOne(id);

    if (updateCategoryDto.slug && updateCategoryDto.slug !== category.slug) {
      const existingSlug = await this.categoryRepository.findOne({
        where: { slug: updateCategoryDto.slug },
      });
      if (existingSlug) {
        throw new BadRequestException(
          `分类别名 ${updateCategoryDto.slug} 已存在`,
        );
      }
    }

    if (
      updateCategoryDto.parent_id !== undefined &&
      updateCategoryDto.parent_id !== category.parent_id
    ) {
      if (updateCategoryDto.parent_id === id) {
        throw new BadRequestException('不能将分类设置为自己的父分类');
      }

      const hasChildren = await this.hasChildren(id);
      if (hasChildren) {
        throw new BadRequestException('该分类下有子分类，无法移动');
      }
    }

    Object.assign(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);

    const hasChildren = await this.hasChildren(id);
    if (hasChildren) {
      throw new BadRequestException('该分类下有子分类，无法删除');
    }

    await this.categoryRepository.remove(category);
  }

  async getChildren(parentId: number): Promise<Category[]> {
    return this.categoryRepository.find({
      where: { parent_id: parentId, is_show: 1 },
      order: { sort: 'ASC', id: 'ASC' },
      relations: ['children'],
    });
  }

  async hasChildren(parentId: number): Promise<boolean> {
    const count = await this.categoryRepository.count({
      where: { parent_id: parentId },
    });
    return count > 0;
  }

  private buildTree(
    categories: Category[],
    parentId: number | null = null,
  ): Category[] {
    return categories
      .filter((category) => category.parent_id === parentId)
      .map((category) => ({
        ...category,
        children: this.buildTree(categories, category.id),
      }));
  }
}
