import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedPsychologistAndTutor1653750857625
  implements MigrationInterface
{
  name = 'AddedPsychologistAndTutor1653750857625';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "FK_57adb8fc682a3433a6072bed858"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "FK_158915277bd622fcf66dd544ba3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "UQ_57adb8fc682a3433a6072bed858"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "UQ_158915277bd622fcf66dd544ba3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "FK_57adb8fc682a3433a6072bed858" FOREIGN KEY ("assignedPsychologistId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "FK_158915277bd622fcf66dd544ba3" FOREIGN KEY ("assignedTutorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "FK_158915277bd622fcf66dd544ba3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" DROP CONSTRAINT "FK_57adb8fc682a3433a6072bed858"`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "UQ_158915277bd622fcf66dd544ba3" UNIQUE ("assignedTutorId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "UQ_57adb8fc682a3433a6072bed858" UNIQUE ("assignedPsychologistId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "FK_158915277bd622fcf66dd544ba3" FOREIGN KEY ("assignedTutorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD CONSTRAINT "FK_57adb8fc682a3433a6072bed858" FOREIGN KEY ("assignedPsychologistId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
