import { ConsultationResultModule } from './../consultation_result/consultation_result.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import { CandidateModule } from '../candidate/candidate.module';
import { UserModule } from '../user/user.module';
import { ExaminationTypeModule } from '../examination_type/examinatino_type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consultation]),
    CandidateModule,
    UserModule,
    ExaminationTypeModule,
    ConsultationResultModule,
  ],
  providers: [ConsultationService],
  controllers: [ConsultationController],
  exports: [ConsultationService],
})
export class ConsulationModule {}
