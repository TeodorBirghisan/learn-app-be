import { Module } from '@nestjs/common';
import { ExaminationTypeController } from './examination_type.controller';
import { ExaminationTypeService } from './examination_type.service';

@Module({
  imports: [],
  providers: [ExaminationTypeService],
  controllers: [ExaminationTypeController],
  exports: [ExaminationTypeService],
})
export class ExaminationTypeModule {}
