import { Candidate } from './../candidate/candidate.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConsultationResult } from '../consultation_result/consultation_result.entity';
import { User } from '../user/user.entity';
import { ExaminationType } from '../examination_type/examination_type.entity';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  duration: string;

  @OneToOne(() => ConsultationResult)
  @JoinColumn()
  consultationResult: ConsultationResult;

  @ManyToOne(() => Candidate, (candidate) => candidate.consultations)
  consultedCandidate: Candidate;

  @ManyToOne(() => User, (user) => user.consultations)
  organizer: User;

  @ManyToOne(
    () => ExaminationType,
    (examinationType) => examinationType.consultations,
  )
  examinationType: ExaminationType;
}
