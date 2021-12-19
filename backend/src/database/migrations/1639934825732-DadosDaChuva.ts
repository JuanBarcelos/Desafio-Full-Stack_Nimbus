import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DadosDaChuva1639934825732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "dadosDaChuva",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "volumeDaChuva",
                        type: "decimal",
                    },
                    {
                        name: "classificacaoDaChuva",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dadosDaChuva");
    }

}
