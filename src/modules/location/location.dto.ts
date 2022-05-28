import { IsNotEmpty } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty() country: string;
  @IsNotEmpty() county: string;
  @IsNotEmpty() city: string;
  @IsNotEmpty() street: string;
  number: string;
  apartment: string;
}
