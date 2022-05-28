import { IsNotEmpty } from 'class-validator';

export class CreateConsultationResultDto {
  @IsNotEmpty() result: string;
  notes: string;
}
