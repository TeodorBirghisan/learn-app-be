import { Consultation } from './../consultation/consultation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CandidateAbility } from '../candidate-ability/candidate-ability.entity';
import { Location } from '../location/location.entity';
import { User } from '../user/user.entity';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cnp: string;

  @Column()
  name: string;

  @Column()
  birthDate: Date;

  @Column()
  extraNotes: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @ManyToOne(() => User, (user) => user.candidates)
  assignedPsychologist: User;

  @ManyToOne(() => User, (user) => user.candidates)
  assignedTutor: User;

  @OneToMany(
    () => CandidateAbility,
    (candidateAbility) => candidateAbility.candidate,
  )
  candidateAbilities: CandidateAbility[];

  @OneToMany(
    () => Consultation,
    (consultation) => consultation.consultedCandidate,
  )
  consultations: Consultation[];
}
