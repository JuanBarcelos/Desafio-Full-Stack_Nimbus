import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Estados } from "./Estados";


@Entity("dadosDaChuva")
export class DadosDaChuva {
    @PrimaryColumn()
    id: string;

    @Column()
    volumeDaChuva: number;

    @Column()
    classificacaoDaChuva: string;

    @Column()
    estado_id: string;

    @ManyToOne(() => Estados,dadosDaChuva => DadosDaChuva)
    estado: Estados;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}