import { Consultation } from './../consultation/consultation.entity';
import { CandidateAbility } from './../candidate-ability/candidate-ability.entity';
import { IsNotEmpty } from 'class-validator';
import { User } from '../user/user.entity';
import { CreateLocationDto } from '../location/location.dto';

export class CreateCandidateDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() cnp: string;
  @IsNotEmpty() birthDate: string;
  extraNotes: string;
}
