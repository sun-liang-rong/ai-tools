import { Controller, Get, Post, Put, Delete, Body, Param, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { AdService } from './ad.service';
import { CreateAdDto } from './ad.dto';
import { UpdateAdDto } from './ad.dto';

@Controller('ads')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('pageSize') pageSize: string = '10',
    @Query('isActive') isActive?: string,
  ) {
    return this.adService.findAll(
      parseInt(page) || 1,
      parseInt(pageSize) || 10,
      isActive !== undefined ? isActive === 'true' : undefined,
    );
  }

  @Get('active')
  async findActive(@Query('position') position?: string) {
    return this.adService.findActive(position);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.adService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createAdDto: CreateAdDto) {
    return this.adService.create(createAdDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAdDto: UpdateAdDto) {
    return this.adService.update(+id, updateAdDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.adService.remove(+id);
  }

  @Post(':id/views')
  @HttpCode(HttpStatus.OK)
  async incrementViews(@Param('id') id: string) {
    return this.adService.incrementViews(+id);
  }

  @Post(':id/clicks')
  @HttpCode(HttpStatus.OK)
  async incrementClicks(@Param('id') id: string) {
    return this.adService.incrementClicks(+id);
  }
}
