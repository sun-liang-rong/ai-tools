import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.find({
      where: { is_active: true },
      order: { sort_order: 'ASC', name: 'ASC' },
    });
  }

  async findBySlug(slug: string): Promise<Tag | null> {
    return this.tagRepository.findOne({
      where: { slug, is_active: true },
    });
  }

  async create(tagData: Partial<Tag>): Promise<Tag> {
    const tag = this.tagRepository.create(tagData);
    return this.tagRepository.save(tag);
  }

  async update(id: number, tagData: Partial<Tag>): Promise<Tag | null> {
    await this.tagRepository.update(id, tagData);
    return this.tagRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tagRepository.update(id, { is_active: false });
  }
}