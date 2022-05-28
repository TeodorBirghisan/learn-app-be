import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidateAbilityService {
  async sanityCheck(): Promise<string> {
    return 'Hello Candidate Ability';
  }
}
