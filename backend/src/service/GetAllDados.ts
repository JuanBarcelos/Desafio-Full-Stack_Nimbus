import { getRepository } from "typeorm";
import { Dados } from "../entities/Dados";


export class GetAllDadosService{
    async execute(){
        const repo = getRepository(Dados);

        const dados = await repo.find();

        return dados;
    }
}