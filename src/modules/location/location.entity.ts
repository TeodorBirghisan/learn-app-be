import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  county: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  apartment: string;
}
