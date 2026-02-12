import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto, UpdateToolDto, QueryToolDto } from './tool.dto';

@Controller('tools')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Get()
  async findAll(@Query() query: QueryToolDto) {
    return this.toolService.findAll(query);
  }

  @Get('search')
  async search(
    @Query('keyword') keyword: string,
    @Query('page') page: string = '1',
    @Query('pageSize') pageSize: string = '12',
    @Query('category_id') category_id?: string,
  ) {
    return this.toolService.search(
      keyword,
      parseInt(page) || 1,
      parseInt(pageSize) || 12,
      category_id ? parseInt(category_id) : undefined,
    );
  }
  @Get('home')
  async findHomeTools() {
    return this.toolService.findHomeTools();
  }
  @Get('count')
  async getToolsCount() {
    return this.toolService.getToolsCount();
  }
  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('includeCategory') includeCategory?: string,
  ) {
    return this.toolService.findOne(+id, includeCategory === 'true');
  }

  @Get('slug/:slug')
  async findBySlug(
    @Param('slug') slug: string, // 工具别名
    @Query('includeCategory') includeCategory?: string, // 是否包含分类信息
  ) {
    return this.toolService.findBySlug(slug, includeCategory === 'true');
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolService.update(+id, updateToolDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.toolService.remove(+id);
  }

  @Post(':id/views')
  @HttpCode(HttpStatus.OK)
  async incrementViews(@Param('id') id: string) {
    return this.toolService.incrementViews(+id);
  }

  @Post(':id/clicks')
  @HttpCode(HttpStatus.OK)
  async incrementClicks(@Param('id') id: string) {
    return this.toolService.incrementClicks(+id);
  }
}
