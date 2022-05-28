import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedLocationEntity1653742094149 implements MigrationInterface {
    name = 'AddedLocationEntity1653742094149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "county" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "apartment" character varying NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
