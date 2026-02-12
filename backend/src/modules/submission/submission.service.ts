import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from './submission.entity';
import { CreateSubmissionDto } from './submission.dto';
import { UpdateSubmissionDto } from './submission.dto';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  async findAll(page: number = 1, pageSize: number = 10, status?: string): Promise<{ data: Submission[]; total: number }> {
    const queryBuilder = this.submissionRepository.createQueryBuilder('submission');

    if (status) {
      queryBuilder.andWhere('submission.status = :status', { status });
    }

    queryBuilder.orderBy('submission.created_at', 'DESC');

    const [data, total] = await queryBuilder
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return { data, total };
  }

  async findOne(id: number): Promise<Submission> {
    const submission = await this.submissionRepository.findOne({ where: { id } });
    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }
    return submission;
  }

  async create(createSubmissionDto: CreateSubmissionDto): Promise<Submission> {
    const submission = this.submissionRepository.create(createSubmissionDto);
    return this.submissionRepository.save(submission);
  }

  async update(id: number, updateSubmissionDto: UpdateSubmissionDto): Promise<Submission> {
    const submission = await this.findOne(id);
    Object.assign(submission, updateSubmissionDto);
    return this.submissionRepository.save(submission);
  }

  async remove(id: number): Promise<void> {
    const submission = await this.findOne(id);
    await this.submissionRepository.remove(submission);
  }
}
