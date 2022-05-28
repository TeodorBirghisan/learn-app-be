import { Candidate } from './../candidate/candidate.entity';
import { Consultation } from './../consultation/consultation.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column()
  password: string;

  @Column({ nullable: true })
  role: string;

  @OneToMany(() => Consultation, (consultation) => consultation.organizer)
  consultations: Consultation[];

  @OneToMany(() => Candidate, (candidate) => candidate)
  candidates: Candidate[];
}
