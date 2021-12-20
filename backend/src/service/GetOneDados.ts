import { getRepository } from "typeorm";
import { Dados } from "../entities/Dados";


export class GetOneDadosService{
    async execute(estado: string){
        const repo = getRepository(Dados);

        const dados = await repo.find({ where: { estado: estado } });

        return dados;
    }
}