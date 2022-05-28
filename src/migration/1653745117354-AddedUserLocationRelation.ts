import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedUserLocationRelation1653745117354 implements MigrationInterface {
    name = 'AddedUserLocationRelation1653745117354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" ADD "locationId" integer`);
        await queryRunner.query(`ALTER TABLE "candidate" ADD CONSTRAINT "UQ_6bb2b5ccc530e933b3c34dc984d" UNIQUE ("locationId")`);
        await queryRunner.query(`ALTER TABLE "candidate" ADD CONSTRAINT "FK_6bb2b5ccc530e933b3c34dc984d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidate" DROP CONSTRAINT "FK_6bb2b5ccc530e933b3c34dc984d"`);
        await queryRunner.query(`ALTER TABLE "candidate" DROP CONSTRAINT "UQ_6bb2b5ccc530e933b3c34dc984d"`);
        await queryRunner.query(`ALTER TABLE "candidate" DROP COLUMN "locationId"`);
    }

}
