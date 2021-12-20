import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("DadosMeteriologicos")
export class Dados{

    @PrimaryColumn()
    id: string;

    @Column()
    estado: string;

    @Column()
    volumeDeChuva: number;

    @Column()
    grauDeChuava: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}