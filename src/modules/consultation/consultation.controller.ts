import { CreateConsultationDto } from './consultaton.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Consultation } from './consultation.entity';
import { ConsultationService } from './consultation.service';
import { CreateConsultationResultDto } from '../consultation_result/consultation_result.dto';
import { ConsultationResult } from '../consultation_result/consultation_result.entity';

@Controller('/consultation')
export class ConsultationController {
  constructor(private consultationService: ConsultationService) {}

  @Get('/sanity-check')
  sanityCheck() {
    return this.consultationService.sanityCheck();
  }

  @Get()
  getConsultations(): Promise<Consultation[]> {
    return this.consultationService.getAllActive();
  }

  @Delete()
  deleteConsultation(
    @Body(
      'consultationId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    consultationId: number,
  ): Promise<number> {
    return this.consultationService.updateIsDeleted(consultationId);
  }

  @Post()
  createConsultation(
    @Body('consultation') consultation: CreateConsultationDto,
    @Body('organizerId') organizerId: number,
    @Body('candidateId') candidateId: number,
    @Body('examinationTypeId') examinationTypeId: number,
  ): Promise<Consultation> {
    return this.consultationService.saveOne(
      consultation,
      candidateId,
      organizerId,
      examinationTypeId,
    );
  }

  @Post('/result')
  createRegistrationResult(
    @Body('result')
    result: CreateConsultationResultDto,
    @Body('consultationId')
    consultationId: number,
  ): Promise<Consultation> {
    return this.consultationService.saveConsultationResult(
      result,
      consultationId,
    );
  }
}
