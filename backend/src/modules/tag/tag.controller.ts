import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from './tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.tagService.findBySlug(slug);
  }

  @Post()
  create(@Body() createTagDto: Partial<Tag>) {
    return this.tagService.create(createTagDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTagDto: Partial<Tag>) {
    return this.tagService.update(+id, updateTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}