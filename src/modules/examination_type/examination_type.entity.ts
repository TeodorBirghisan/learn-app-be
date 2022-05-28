import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExaminationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
