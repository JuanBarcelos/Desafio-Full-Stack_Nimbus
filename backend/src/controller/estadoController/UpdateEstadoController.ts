import {Request, Response} from "express";
import { UpdateEstadosService } from "../../service/estadoService/UpdateEstadosService";




export class UpdateEstadoController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        const{name} = request.body;

        const service = new UpdateEstadosService();

        const result = await service.execute({id, name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}