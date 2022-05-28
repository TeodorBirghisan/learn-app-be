import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedNullableFields1653759861517 implements MigrationInterface {
  name = 'AddedNullableFields1653759861517';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "location" ALTER COLUMN "number" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "location" ALTER COLUMN "apartment" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "candidate" ALTER COLUMN "extraNotes" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "candidate" ALTER COLUMN "extraNotes" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "location" ALTER COLUMN "apartment" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "location" ALTER COLUMN "number" SET NOT NULL`,
    );
  }
}
