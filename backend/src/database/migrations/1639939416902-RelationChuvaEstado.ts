import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationChuvaEstado1639939416902 implements MigrationInterface {
    name = 'RelationChuvaEstado1639939416902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "estados" ADD "dadosDaChuva_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "estado_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "estadoId" character varying`);
        await queryRunner.query(`ALTER TABLE "estados" DROP CONSTRAINT "PK_3d9a9f2658d5086012f27924d30"`);
        await queryRunner.query(`ALTER TABLE "estados" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "estados" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estados" ADD CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "estados" DROP CONSTRAINT "UQ_40d11cb0f409d1271525825ae36"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP CONSTRAINT "PK_8673bebcdfa50966be0e7435df7"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD CONSTRAINT "PK_8673bebcdfa50966be0e7435df7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "volumeDaChuva"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "volumeDaChuva" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD CONSTRAINT "FK_bfb9207719bcfb1a25c6814637f" FOREIGN KEY ("estadoId") REFERENCES "estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP CONSTRAINT "FK_bfb9207719bcfb1a25c6814637f"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "volumeDaChuva"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "volumeDaChuva" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP CONSTRAINT "PK_8673bebcdfa50966be0e7435df7"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" ADD CONSTRAINT "PK_8673bebcdfa50966be0e7435df7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "estados" ADD CONSTRAINT "UQ_40d11cb0f409d1271525825ae36" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "estados" DROP CONSTRAINT "PK_3d9a9f2658d5086012f27924d30"`);
        await queryRunner.query(`ALTER TABLE "estados" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "estados" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estados" ADD CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "estadoId"`);
        await queryRunner.query(`ALTER TABLE "dadosDaChuva" DROP COLUMN "estado_id"`);
        await queryRunner.query(`ALTER TABLE "estados" DROP COLUMN "dadosDaChuva_id"`);
    }

}
