import { Controller, Get } from '@nestjs/common';
import { CandidateAbilityService } from './candidate-ability.service';

@Controller('/candidate-ability')
export class CandidateAbilityController {
  constructor(private candidateAbilityService: CandidateAbilityService) {}

  @Get()
  getAll() {
    return this.candidateAbilityService.sanityCheck();
  }
}
