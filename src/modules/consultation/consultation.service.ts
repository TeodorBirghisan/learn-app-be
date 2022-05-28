import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsultationService {
  async sanityCheck(): Promise<string> {
    return 'Hello Consultation';
  }
}
