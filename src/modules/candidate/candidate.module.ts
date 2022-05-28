import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { Module } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import { UserModule } from '../user/user.module';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate]), UserModule, LocationModule],
  providers: [CandidateService],
  controllers: [CandidateController],
  exports: [CandidateService],
})
export class CandidateModule {}
