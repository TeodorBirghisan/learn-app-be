import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CandidateAbility } from '../candidate-ability/candidate-ability.entity';
@Entity()
export class AbilityTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => CandidateAbility,
    (candidateAbility) => candidateAbility.abilityTag,
  )
  candidateAbilities: CandidateAbility[];
}
