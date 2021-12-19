import {Request, Response} from "express";
import { DeleteEstadosService } from "../../service/estadoService/DeleteEstadosService";



export class DeleteEstadoController{
    async handle(request: Request, response: Response){
        const{id} = request.params;

        const service = new DeleteEstadosService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}