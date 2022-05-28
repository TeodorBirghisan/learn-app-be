import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedConsultEntities1653744381654 implements MigrationInterface {
  name = 'AddedConsultEntities1653744381654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ability_tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_963461d63df7839908ea98faf21" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "candidate" ("id" SERIAL NOT NULL, "cnp" character varying NOT NULL, "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "extra_notes" character varying NOT NULL, CONSTRAINT "PK_b0ddec158a9a60fbc785281581b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "consultation" ("id" SERIAL NOT NULL, "startDate" TIMESTAMP NOT NULL, "duration" character varying NOT NULL, CONSTRAINT "PK_5203569fac28a4a626c42abe70b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "consultation_result" ("id" SERIAL NOT NULL, "result" character varying NOT NULL, "notes" character varying NOT NULL, CONSTRAINT "PK_ebef0d36b402c87076d0998ce41" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "examination_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_7b3f1dcf7b9ee9459a514579bba" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "examination_type"`);
    await queryRunner.query(`DROP TABLE "consultation_result"`);
    await queryRunner.query(`DROP TABLE "consultation"`);
    await queryRunner.query(`DROP TABLE "candidate"`);
    await queryRunner.query(`DROP TABLE "ability_tag"`);
  }
}
