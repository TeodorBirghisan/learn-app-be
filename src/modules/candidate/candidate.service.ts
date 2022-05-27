import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidateService {
  async sanityCheck(): Promise<string> {
    return 'Hello Candidate';
  }
}
