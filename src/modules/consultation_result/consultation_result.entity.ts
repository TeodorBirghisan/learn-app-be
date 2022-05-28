import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ConsultationResult {
  @PrimaryGeneratedColumn()
  id: number;
}
