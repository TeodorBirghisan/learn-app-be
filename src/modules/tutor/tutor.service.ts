import { Injectable } from '@nestjs/common';

@Injectable()
export class TutorService {
  async sanityCheck(): Promise<string> {
    return 'Hello Tutor';
  }
}
