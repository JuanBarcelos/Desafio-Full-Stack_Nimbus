import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Estados1639936038705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"estados",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isUnique: true
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
        await queryRunner.dropTable("estados")
    }

}
