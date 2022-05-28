import { Consultation } from './../consultation/consultation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbilityTag } from '../ability_tag/ability_tag.entity';
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

  @OneToOne(() => User)
  @JoinColumn()
  assignedPsychologist: User;

  @OneToOne(() => User)
  @JoinColumn()
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
