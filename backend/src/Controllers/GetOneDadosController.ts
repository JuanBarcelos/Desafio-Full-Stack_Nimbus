import { GetOneDadosService } from "../service/GetOneDados";
import {Request, Response} from "express";

export class GetOneDadosController{
    async handle(req: Request, res: Response){
        const {estado} = req.params;

        const service = new GetOneDadosService();
        const result = await service.execute(estado);

        if(result instanceof Error){
            return res.status(400).json(Error);
        }

        return res.status(200).json(result);
    }
}