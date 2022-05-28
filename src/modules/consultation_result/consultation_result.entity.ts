import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ConsultationResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  result: string;

  @Column()
  notes: string;
}
