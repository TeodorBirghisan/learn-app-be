import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AbilityTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
