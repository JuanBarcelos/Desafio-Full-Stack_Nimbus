import {Request, Response} from 'express';
import { GetAllDadosService } from '../service/GetAllDados';

export class GetAllDadosController{
    async handle(req: Request, res: Response){
        const service = new GetAllDadosService();

        const dados = await service.execute();

        return res.json(dados);
    }
}