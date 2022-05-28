import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConsultationResultController } from './consultation_result.controller';
import { ConsultationResultService } from './consultation_result.service';
import { ConsultationResult } from './consultation_result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultationResult])],
  providers: [ConsultationResultService],
  controllers: [ConsultationResultController],
  exports: [ConsultationResultService],
})
export class ConsultationResultModule {}
