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
import { CategoryService } from './category.service';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  QueryCategoryDto,
} from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(@Query() query: QueryCategoryDto) {
    return this.categoryService.findAll(query);
  }

  @Get('tree')
  async findTree() {
    return this.categoryService.findTree();
  }

  @Get('home')
  async findHomeCategories() {
    return this.categoryService.findHomeCategories();
  }
  @Get('categories-tools')
  async findCategoriesAndTools() {
    return this.categoryService.findCategoriesAndTools();
  }
  @Get('nav')
  async findNavCategories() {
    return this.categoryService.findNavCategories();
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string) {
    console.log(slug, 'slug');
    return this.categoryService.findBySlug(slug);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('includeChildren') includeChildren?: string,
  ) {
    return this.categoryService.findOne(+id, includeChildren === 'true');
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
