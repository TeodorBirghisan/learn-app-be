import { Consultation } from './../consultation/consultation.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ExaminationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isDeleted: boolean;

  @OneToMany(() => Consultation, (consultation) => consultation.examinationType)
  consultations: Consultation[];
}
