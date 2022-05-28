import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedExaminationTypeConsultation1653749928851
  implements MigrationInterface
{
  name = 'AddedExaminationTypeConsultation1653749928851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "consultation" ADD "examinationTypeId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "consultation" ADD CONSTRAINT "FK_4b0c310d79d0b3629242d48f1d1" FOREIGN KEY ("examinationTypeId") REFERENCES "examination_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "consultation" DROP CONSTRAINT "FK_4b0c310d79d0b3629242d48f1d1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "consultation" DROP COLUMN "examinationTypeId"`,
    );
  }
}
