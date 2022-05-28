import { Injectable } from '@nestjs/common';

@Injectable()
export class ExaminationTypeService {
  async sanityCheck(): Promise<string> {
    return 'Hello Examination Type';
  }
}
