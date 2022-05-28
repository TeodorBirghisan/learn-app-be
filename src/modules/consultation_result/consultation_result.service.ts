import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsultationResultService {
  async sanityCheck(): Promise<string> {
    return 'Hello Consultation Result';
  }
}
