import { IsNotEmpty } from 'class-validator';

export class CreateConsultationDto {
  @IsNotEmpty() startDate: Date;
  @IsNotEmpty() duration: string;
}
