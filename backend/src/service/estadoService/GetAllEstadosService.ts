import { getRepository } from "typeorm";
import { Estados } from "../../entities/Estados";



export class GetAllEstadosService{
    async execute(){
        const repo = getRepository(Estados);

        const estado = await repo.find();

        return estado;
    }
}