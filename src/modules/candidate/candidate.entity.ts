import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  extra_notes: string;

  //TODO: Add Location
  //TODO: Add AbilityTags
}
