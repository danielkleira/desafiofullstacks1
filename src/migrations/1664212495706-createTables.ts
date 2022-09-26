import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664212495706 implements MigrationInterface {
    name = 'createTables1664212495706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "nome" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" RENAME COLUMN "name" TO "nome"`);
    }

}
