import { Controller, Get, Post, Put, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './submission.dto';
import { UpdateSubmissionDto } from './submission.dto';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('pageSize') pageSize: string = '10',
    @Query('status') status?: string,
  ) {
    return this.submissionService.findAll(
      parseInt(page) || 1,
      parseInt(pageSize) || 10,
      status,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.submissionService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionService.create(createSubmissionDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSubmissionDto: UpdateSubmissionDto) {
    return this.submissionService.update(+id, updateSubmissionDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.submissionService.remove(+id);
  }
}
