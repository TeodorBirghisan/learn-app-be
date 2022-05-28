import { CandidateService } from './candidate.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/candidate')
export class CandidateController {
  constructor(private candidateService: CandidateService) {}

  @Get()
  getAll() {
    return this.candidateService.sanityCheck();
  }
}
