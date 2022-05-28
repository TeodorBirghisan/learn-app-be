import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [CandidateService],
  controllers: [CandidateController],
  exports: [CandidateService],
})
export class CandidateModule {}
