import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedConsultationCandidateResultAndOrganizer1653749475684 implements MigrationInterface {
    name = 'AddedConsultationCandidateResultAndOrganizer1653749475684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consultation" ADD "consultationResultId" integer`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD CONSTRAINT "UQ_1c9173f03b07b4234552c087477" UNIQUE ("consultationResultId")`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD "consultedCandidateId" integer`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD "organizerId" integer`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD CONSTRAINT "FK_1c9173f03b07b4234552c087477" FOREIGN KEY ("consultationResultId") REFERENCES "consultation_result"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD CONSTRAINT "FK_3df5dc932718246a58c734d4ae5" FOREIGN KEY ("consultedCandidateId") REFERENCES "candidate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultation" ADD CONSTRAINT "FK_32212819354b5280994595fa543" FOREIGN KEY ("organizerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consultation" DROP CONSTRAINT "FK_32212819354b5280994595fa543"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP CONSTRAINT "FK_3df5dc932718246a58c734d4ae5"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP CONSTRAINT "FK_1c9173f03b07b4234552c087477"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP COLUMN "organizerId"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP COLUMN "consultedCandidateId"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP CONSTRAINT "UQ_1c9173f03b07b4234552c087477"`);
        await queryRunner.query(`ALTER TABLE "consultation" DROP COLUMN "consultationResultId"`);
    }

}
