import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIndexToDateTransactions1692801465456 implements MigrationInterface {
    name = 'AddIndexToDateTransactions1692801465456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT 'false'`);
        await queryRunner.query(`CREATE INDEX "IDX_d66471a99dd3836e1528d39a1e" ON "transactions" ("date") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_d66471a99dd3836e1528d39a1e"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT false`);
    }

}
