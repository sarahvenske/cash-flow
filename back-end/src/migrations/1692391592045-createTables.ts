import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTables1692391592045 implements MigrationInterface {
  name = "CreateTables1692391592045"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "methods" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, CONSTRAINT "UQ_b4119656849178aaae150848365" UNIQUE ("name"), CONSTRAINT "PK_bd1e1f74f71be00abd0d2bc7c33" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "destinationName" character varying NOT NULL, "value" numeric(10,2) NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "userOriginId" uuid, "categoryId" integer, "methodId" integer, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying(120) NOT NULL, "password" character varying NOT NULL, "accountNumber" character varying(10) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "isCompany" boolean NOT NULL DEFAULT 'false', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "transactions" ADD CONSTRAINT "FK_9ebd53ab809523475e40f4bee79" FOREIGN KEY ("userOriginId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "transactions" ADD CONSTRAINT "FK_86e965e74f9cc66149cf6c90f64" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "transactions" ADD CONSTRAINT "FK_f158cd96c48f149f65bf9cfc89a" FOREIGN KEY ("methodId") REFERENCES "methods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transactions" DROP CONSTRAINT "FK_f158cd96c48f149f65bf9cfc89a"`
    )
    await queryRunner.query(
      `ALTER TABLE "transactions" DROP CONSTRAINT "FK_86e965e74f9cc66149cf6c90f64"`
    )
    await queryRunner.query(
      `ALTER TABLE "transactions" DROP CONSTRAINT "FK_9ebd53ab809523475e40f4bee79"`
    )
    await queryRunner.query(`DROP TABLE "categories"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "transactions"`)
    await queryRunner.query(`DROP TABLE "methods"`)
  }
}
