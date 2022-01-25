import {Request, Response} from "express";
import { CreateDados } from "../service/CreateDados";

export class CreateDadosController{
    async handle(req: Request, res: Response){
        const{estado,volumeDeChuva,grauDeChuva} = req.body;

        const service = new CreateDados();

        const result = await service.execute({estado,volumeDeChuva,grauDeChuva});

        if(result instanceof Error){
            return res.status(400).json(Error);
        }

        return res.status(200).json(result);
    }
}