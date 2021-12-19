import { getRepository } from "typeorm";
import { Estados } from "../../entities/Estados";


type EstadoRequest = {
    name: string,
}

export class CreateEstadosService {
    async execute({ name }: EstadoRequest): Promise<Estados | Error> {
        const repo = getRepository(Estados);

        if (await repo.findOne({ name })) {
            return new Error("Estado already exists");
        }

        const estado = repo.create({
            name
        });

        await repo.save(estado);

        return estado;
    }
}