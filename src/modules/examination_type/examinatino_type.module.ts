import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ExaminationTypeController } from './examination_type.controller';
import { ExaminationTypeService } from './examination_type.service';
import { ExaminationType } from './examination_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExaminationType])],
  providers: [ExaminationTypeService],
  controllers: [ExaminationTypeController],
  exports: [ExaminationTypeService],
})
export class ExaminationTypeModule {}
