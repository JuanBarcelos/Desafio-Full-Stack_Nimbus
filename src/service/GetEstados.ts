import { getRepository } from "typeorm";
import { Dados } from "../entities/Dados";


export class GetEstados{
    async execute(){
        const repo = getRepository(Dados);

        const dados = await repo.find({select:["estado"]});

        return dados;
    }
}