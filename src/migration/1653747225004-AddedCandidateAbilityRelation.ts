import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedCandidateAbilityRelation1653747225004
  implements MigrationInterface
{
  name = 'AddedCandidateAbilityRelation1653747225004';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidate" RENAME COLUMN "extra_notes" TO "extraNotes"`,
    );
    await queryRunner.query(
      `CREATE TABLE "candidate_ability" ("id" SERIAL NOT NULL, "candidateId" integer, "abilityTagId" integer, CONSTRAINT "PK_a83a711609a6ed01032cac7accd" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate_ability" ADD CONSTRAINT "FK_2ad926d127a7ebcacfebe6c52a5" FOREIGN KEY ("candidateId") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate_ability" ADD CONSTRAINT "FK_6a84b18834612291ed1ee6c6a0d" FOREIGN KEY ("abilityTagId") REFERENCES "ability_tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidate_ability" DROP CONSTRAINT "FK_6a84b18834612291ed1ee6c6a0d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate_ability" DROP CONSTRAINT "FK_2ad926d127a7ebcacfebe6c52a5"`,
    );
    await queryRunner.query(`DROP TABLE "candidate_ability"`);
    await queryRunner.query(
      `ALTER TABLE "candidate" RENAME COLUMN "extraNotes" TO "extra_notes"`,
    );
  }
}
