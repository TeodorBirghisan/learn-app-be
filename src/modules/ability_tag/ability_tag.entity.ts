import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Candidate } from '../candidate/candidate.entity';

@Entity()
export class AbilityTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
