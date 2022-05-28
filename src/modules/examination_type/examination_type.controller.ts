import { Controller, Get } from '@nestjs/common';
import { ExaminationTypeService } from './examination_type.service';

@Controller('/examination-type')
export class ExaminationTypeController {
  constructor(private examinatinoTypeService: ExaminationTypeService) {}

  @Get()
  getAll() {
    return this.examinatinoTypeService.sanityCheck();
  }
}
