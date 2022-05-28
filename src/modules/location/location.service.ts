import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './location.dto';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}
  async sanityCheck(): Promise<string> {
    return 'Hello Location';
  }

  async saveOne(locationCreateDto: CreateLocationDto): Promise<Location> {
    const newLocation: Location =
      this.locationRepository.create(locationCreateDto);

    return this.locationRepository.save(newLocation);
  }
}
