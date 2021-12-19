import { getRepository } from "typeorm";
import { Estados } from "../../entities/Estados";



export class DeleteEstadosService {
async execute(id: string){
    const repo = getRepository(Estados);

    if(!(await repo.findOne(id))) {
        return new Error("Estado does not exist");
    }

    await repo.delete(id);
}
}