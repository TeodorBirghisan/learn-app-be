import { LocationController } from './location.controller';
import { Module } from '@nestjs/common';
import { LocationService } from './location.service';

@Module({
  imports: [],
  providers: [LocationService],
  controllers: [LocationController],
  exports: [LocationService],
})
export class LocationModule {}
