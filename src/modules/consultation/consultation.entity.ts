import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  duration: string;

  //TODO: Add ConsultationResult
  //TODO: Add Candidate
}
