import { CreateConsultationResultDto } from './consultation_result.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultationResult } from './consultation_result.entity';

@Injectable()
export class ConsultationResultService {
  constructor(
    @InjectRepository(ConsultationResult)
    private consultationRepository: Repository<ConsultationResult>,
  ) {}

  async sanityCheck(): Promise<string> {
    return 'Hello Consultation Result';
  }

  async saveOne(
    consultationResultDto: CreateConsultationResultDto,
  ): Promise<ConsultationResult> {
    const newConsultationResult: ConsultationResult =
      this.consultationRepository.create({
        notes: consultationResultDto.notes,
        result: consultationResultDto.result,
      });

    return this.consultationRepository.save(newConsultationResult);
  }
}
