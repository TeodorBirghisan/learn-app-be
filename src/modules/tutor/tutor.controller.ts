import { Controller, Get } from '@nestjs/common';
import { TutorService } from './tutor.service';

@Controller('/tutor')
export class TutorController {
  constructor(private tutorService: TutorService) {}

  @Get()
  getAll() {
    return this.tutorService.sanityCheck();
  }
}
