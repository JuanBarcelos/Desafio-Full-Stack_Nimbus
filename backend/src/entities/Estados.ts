import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { DadosDaChuva } from "./DadosDaChuva";


@Entity("estados")
export class Estados {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    dadosDaChuva_id: string;

    @OneToMany(()=> DadosDaChuva, estado => Estados, {eager:true})
    dadosDaChuva: DadosDaChuva[];

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}