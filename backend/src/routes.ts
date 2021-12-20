import {Router} from 'express';
import { CreateDadosController } from './Controllers/CreateDadosController';
import { GetAllDadosController } from './Controllers/GetAllDadosController';
import { GetOneDadosController } from './Controllers/GetOneDadosController';

const routes = Router();

routes.post("/dados", new CreateDadosController().handle);
routes.get("/dados", new GetAllDadosController().handle);
routes.get("/dados/:estado", new GetOneDadosController().handle);

export {routes};