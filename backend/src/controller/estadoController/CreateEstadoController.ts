import {Request, Response} from "express";
import { CreateEstadosService } from "../../service/estadoService/CreateEstadosServie";


export class CreateEstadoController{
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const service = new CreateEstadosService();

        const result = await service.execute({name});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);

    }
}