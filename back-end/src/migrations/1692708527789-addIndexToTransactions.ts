import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIndexToTransactions1692708527789 implements MigrationInterface {
    name = 'AddIndexToTransactions1692708527789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT 'false'`);
        await queryRunner.query(`CREATE INDEX "IDX_86e965e74f9cc66149cf6c90f6" ON "transactions" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f158cd96c48f149f65bf9cfc89" ON "transactions" ("methodId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_f158cd96c48f149f65bf9cfc89"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_86e965e74f9cc66149cf6c90f6"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT false`);
    }

}
