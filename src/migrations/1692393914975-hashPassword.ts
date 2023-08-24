import { MigrationInterface, QueryRunner } from "typeorm"

export class HashPassword1692393914975 implements MigrationInterface {
  name = "HashPassword1692393914975"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT 'false'`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "isCompany" SET DEFAULT false`
    )
  }
}
