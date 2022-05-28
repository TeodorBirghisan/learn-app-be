import { Injectable } from '@nestjs/common';

@Injectable()
export class AbiltiyTagService {
  async sanityCheck(): Promise<string> {
    return 'Hello Ability Tag';
  }
}
