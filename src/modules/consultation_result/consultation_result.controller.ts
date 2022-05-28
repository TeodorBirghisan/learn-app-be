import { ConsultationResultService } from './consultation_result.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/consultation-result')
export class ConsultationResultController {
  constructor(private consultationResultService: ConsultationResultService) {}

  @Get()
  getAll() {
    return this.consultationResultService.sanityCheck();
  }
}
