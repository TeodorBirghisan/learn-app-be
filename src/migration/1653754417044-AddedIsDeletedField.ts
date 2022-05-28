import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedIsDeletedField1653754417044 implements MigrationInterface {
  name = 'AddedIsDeletedField1653754417044';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "examination_type" ADD "isDeleted" boolean NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "consultation" ADD "isDeleted" boolean NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ADD "isDeleted" boolean NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "isDeleted"`);
    await queryRunner.query(
      `ALTER TABLE "consultation" DROP COLUMN "isDeleted"`,
    );
    await queryRunner.query(
      `ALTER TABLE "examination_type" DROP COLUMN "isDeleted"`,
    );
  }
}
