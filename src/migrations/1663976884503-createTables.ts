import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663976884503 implements MigrationInterface {
    name = 'createTables1663976884503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adm" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_d4dab02cf2667fc5b673741b322" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adm"`);
    }

}
