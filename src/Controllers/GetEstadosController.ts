import {Request, Response} from 'express';
import { GetEstados } from '../service/GetEstados';

export class GetEstadosController{
    async handle(req: Request, res: Response){
        const service = new GetEstados();

        const dados = await service.execute();

        return res.json(dados);
    }
}