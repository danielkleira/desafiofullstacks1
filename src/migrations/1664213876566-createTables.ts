import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664213876566 implements MigrationInterface {
    name = 'createTables1664213876566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_b1e0a1bece2f919f1f1bf8ee176"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "eagerId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_33d4fc93803e7192e150216fffb" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_33d4fc93803e7192e150216fffb"`);
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "user_id" TO "eagerId"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_b1e0a1bece2f919f1f1bf8ee176" FOREIGN KEY ("eagerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
