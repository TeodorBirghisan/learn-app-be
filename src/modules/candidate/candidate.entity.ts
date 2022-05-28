import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbilityTag } from '../ability_tag/ability_tag.entity';
import { Location } from '../location/location.entity';

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

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  //TODO: Add AbilityTags
}
