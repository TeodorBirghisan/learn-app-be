import { IsNotEmpty } from 'class-validator';

export class CreateCandidateDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() cnp: string;
  @IsNotEmpty() birthDate: string;
  extraNotes: string;
}
