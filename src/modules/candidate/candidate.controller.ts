import { CreateCandidateDto } from './candidate.dto';
import { CreateLocationDto } from './../location/location.dto';
import { CandidateService } from './candidate.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Candidate } from './candidate.entity';

@Controller('/candidate')
export class CandidateController {
  constructor(private candidateService: CandidateService) {}

  @Get('/sanity-check')
  sanityCheck() {
    return this.candidateService.sanityCheck();
  }

  @Get()
  getCandidates(): Promise<Candidate[]> {
    return this.candidateService.getAllActive();
  }

  @Post()
  createCandidate(
    @Body('candidate') candidate: CreateCandidateDto,
    @Body('location') location: CreateLocationDto,
    @Body('psychologistId') psychologistId: number,
    @Body('tutorId') tutorId: number,
  ): Promise<Candidate> {
    return this.candidateService.saveOne(
      candidate,
      location,
      psychologistId,
      tutorId,
    );
  }

  //TODO: Delete candidate
}
