import { Module } from '@nestjs/common';
import { CandidateAbilityController } from './candidate-ability.controller';
import { CandidateAbilityService } from './candidate-ability.service';

@Module({
  imports: [],
  providers: [CandidateAbilityService],
  controllers: [CandidateAbilityController],
  exports: [CandidateAbilityService],
})
export class CandidateAbilityModule {}
