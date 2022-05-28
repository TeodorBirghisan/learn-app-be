import { Controller, Get } from '@nestjs/common';
import { ConsultationService } from './consultation.service';

@Controller('/consultation')
export class ConsultationController {
  constructor(private consultationService: ConsultationService) {}

  @Get()
  getAll() {
    return this.consultationService.sanityCheck();
  }
}
