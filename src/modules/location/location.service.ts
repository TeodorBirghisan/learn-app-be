import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  async sanityCheck(): Promise<string> {
    return 'Hello Location';
  }
}
