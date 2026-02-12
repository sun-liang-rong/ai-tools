import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ad } from './ad.entity';
import { CreateAdDto } from './ad.dto';
import { UpdateAdDto } from './ad.dto';

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(Ad)
    private readonly adRepository: Repository<Ad>,
  ) {}

  async findAll(page: number = 1, pageSize: number = 10, isActive?: boolean): Promise<{ data: Ad[]; total: number }> {
    const queryBuilder = this.adRepository.createQueryBuilder('ad');

    if (isActive !== undefined) {
      queryBuilder.andWhere('ad.is_active = :isActive', { isActive });
    }

    queryBuilder.orderBy('ad.sort_order', 'ASC').addOrderBy('ad.created_at', 'DESC');

    const [data, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return { data, total };
  }

  async findActive(position?: string): Promise<Ad[]> {
    const queryBuilder = this.adRepository.createQueryBuilder('ad').where('ad.is_active = :isActive', { isActive: true });

    const now = new Date();
    queryBuilder.andWhere(
      '(ad.start_date IS NULL OR ad.start_date <= :now) AND (ad.end_date IS NULL OR ad.end_date >= :now)',
      { now },
    );

    if (position) {
      queryBuilder.andWhere('ad.position = :position', { position });
    }

    return queryBuilder.orderBy('ad.sort_order', 'ASC').getMany();
  }

  async findOne(id: number): Promise<Ad> {
    const ad = await this.adRepository.findOne({ where: { id } });
    if (!ad) {
      throw new NotFoundException(`Ad with ID ${id} not found`);
    }
    return ad;
  }

  async create(createAdDto: CreateAdDto): Promise<Ad> {
    const ad = this.adRepository.create(createAdDto);
    return this.adRepository.save(ad);
  }

  async update(id: number, updateAdDto: UpdateAdDto): Promise<Ad> {
    const ad = await this.findOne(id);
    Object.assign(ad, updateAdDto);
    return this.adRepository.save(ad);
  }

  async remove(id: number): Promise<void> {
    const ad = await this.findOne(id);
    await this.adRepository.remove(ad);
  }

  async incrementViews(id: number): Promise<void> {
    await this.adRepository.increment({ id }, 'views', 1);
  }

  async incrementClicks(id: number): Promise<void> {
    await this.adRepository.increment({ id }, 'clicks', 1);
  }
}
