import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';
import { Ad } from './ad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ad])],
  controllers: [AdController],
  providers: [AdService],
  exports: [AdService],
})
export class AdModule {}
