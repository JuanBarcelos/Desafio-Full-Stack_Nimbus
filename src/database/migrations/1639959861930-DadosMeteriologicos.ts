import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class DadosMeteriologicos1639959861930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"DadosMeteriologicos",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"estado",
                        type:"varchar",
                    },
                    {
                        name:"volumeDeChuva",
                        type:"decimal",
                    },
                    {
                        name:"grauDeChuva",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DadosMeteriologicos");
    }

}
