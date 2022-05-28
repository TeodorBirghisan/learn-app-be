import { IsNotEmpty } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty() country: string;
  @IsNotEmpty() county: string;
  @IsNotEmpty() city: string;
  @IsNotEmpty() street: string;
  @IsNotEmpty() number: string;
  apartment: string;
}
