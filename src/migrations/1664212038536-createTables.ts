import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664212038536 implements MigrationInterface {
    name = 'createTables1664212038536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "userId" TO "eagerId"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_b1e0a1bece2f919f1f1bf8ee176" FOREIGN KEY ("eagerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_b1e0a1bece2f919f1f1bf8ee176"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "eagerId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
