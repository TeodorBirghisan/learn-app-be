import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async sanityCheck(): Promise<string> {
    return 'Hello User';
  }
}
