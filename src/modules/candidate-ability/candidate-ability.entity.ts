import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AbilityTag } from '../ability_tag/ability_tag.entity';
import { Candidate } from '../candidate/candidate.entity';

@Entity()
export class CandidateAbility {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Candidate, (candidate) => candidate.candidateAbilities)
  @JoinColumn()
  candidate: Candidate;

  @ManyToOne(() => AbilityTag, (abilityTag) => abilityTag.candidateAbilities)
  @JoinColumn()
  abilityTag: AbilityTag;
}
