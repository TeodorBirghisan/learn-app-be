import { CreateCandidateDto } from './candidate.dto';
import { Candidate } from './candidate.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from '../location/location.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { LocationService } from '../location/location.service';
import { Location } from '../location/location.entity';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
    private userService: UserService,
    private locationService: LocationService,
  ) {}

  async sanityCheck(): Promise<string> {
    return 'Hello Candidate';
  }

  async getAllActive(): Promise<Candidate[]> {
    return this.candidateRepository.find({
      where: {
        isDeleted: false,
      },
      relations: ['assignedPsychologist', 'assignedTutor', 'location'],
    });
  }

  async findOneByCnp(cnp: string): Promise<Candidate> {
    const candidate: Candidate = await this.candidateRepository.findOne({
      where: {
        cnp,
      },
    });

    return candidate;
  }

  async findOneById(id: number): Promise<Candidate> {
    const candidate: Candidate = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });

    return candidate;
  }

  async updateIsDeleted(candidateId: number): Promise<void> {
    const candidateToUpdate: Candidate = await this.findOneById(candidateId);

    if (!candidateToUpdate) {
      throw new HttpException(
        'Candidate does not exist!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (candidateToUpdate.isDeleted === true) {
      throw new HttpException(
        'Candidate alerady deleted!',
        HttpStatus.BAD_REQUEST,
      );
    }

    candidateToUpdate.isDeleted = true;

    await this.candidateRepository.save(candidateToUpdate);
  }

  async saveOne(
    candidateCreateDto: CreateCandidateDto,
    locationCreateDto: CreateLocationDto,
    psychologistId: number,
    tutorId: number,
  ): Promise<Candidate> {
    if (
      !candidateCreateDto ||
      !locationCreateDto ||
      !psychologistId ||
      !tutorId
    ) {
      throw new HttpException(
        'Cannot create Candidate',
        HttpStatus.BAD_REQUEST,
      );
    }

    const candidate: Candidate = await this.findOneByCnp(
      candidateCreateDto.cnp,
    );

    if (candidate) {
      throw new HttpException(
        'Candidate with this cnp already exists',
        HttpStatus.CONFLICT,
      );
    }

    const location: Location = await this.locationService.saveOne(
      locationCreateDto,
    );

    const psychologist: User = await this.userService.findOneById(
      psychologistId,
    );

    const tutor: User = await this.userService.findOneById(tutorId);

    const newCandidate: Candidate = this.candidateRepository.create({
      cnp: candidateCreateDto.cnp,
      name: candidateCreateDto.name,
      birthDate: candidateCreateDto.birthDate,
      extraNotes: candidateCreateDto.extraNotes,
      location: location,
      assignedPsychologist: psychologist,
      assignedTutor: tutor,
      isDeleted: false,
    });

    return await this.candidateRepository.save(newCandidate);
  }
}
