import { TutorController } from './tutor.controller';
import { Module } from '@nestjs/common';
import { TutorService } from './tutor.service';

@Module({
  imports: [],
  providers: [TutorService],
  controllers: [TutorController],
  exports: [TutorService],
})
export class TutorModule {}
