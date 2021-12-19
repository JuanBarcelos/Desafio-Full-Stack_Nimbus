import { getRepository } from "typeorm";
import { Estados } from "../../entities/Estados";




type EstadoUpdateRequest = {
    id: string;
    name: string;
}

export class UpdateEstadosService{
    async execute({id, name}: EstadoUpdateRequest){
        const repo = getRepository(Estados);

        const estado = await repo.findOne(id);

        if(!estado){
            return new Error("Estado does not exist");
        }

        estado.name = name ? name : estado.name;

        await repo.save(estado);

        return estado;
        
    }
}