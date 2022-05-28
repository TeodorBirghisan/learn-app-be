import { Module } from '@nestjs/common';
import { ConsultationResultController } from './consultation_result.controller';
import { ConsultationResultService } from './consultation_result.service';

@Module({
  imports: [],
  providers: [ConsultationResultService],
  controllers: [ConsultationResultController],
  exports: [ConsultationResultService],
})
export class ConsultationResultModule {}
