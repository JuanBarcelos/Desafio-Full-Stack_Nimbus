import { Request, Response } from "express";
import { GetAllEstadosService } from "../../service/estadoService/GetAllEstadosService";



export class GetAllEstadoController{
    async handle(request: Request, response: Response){
        const service = new GetAllEstadosService();

        const estado = await service.execute();

        return response.json(estado);
    }
}