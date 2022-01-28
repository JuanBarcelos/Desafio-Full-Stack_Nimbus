import { config } from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import './database';


config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server is runing..." + port))