import { getRepository } from "typeorm";
import { Dados } from "../entities/Dados";


type DadosRequest = {
    estado: string;
    volumeDeChuva: number;
    grauDeChuva: string;
}

export class CreateDados {
    async execute({estado,volumeDeChuva,grauDeChuva}: DadosRequest): Promise<Dados> {
        const repo = getRepository(Dados);

        if (volumeDeChuva <= 0.2) {
            grauDeChuva = "Sem Chuva";
        }
        else if (volumeDeChuva > 0.2 && volumeDeChuva <= 5.0) {
            grauDeChuva = "Chuva Fraca";
        }
        else if (volumeDeChuva >= 5.1 &&
            volumeDeChuva <= 25) {
            grauDeChuva = "Chuva Moderada";
        }
        else if (volumeDeChuva > 25) {
            grauDeChuva = "Chuva Forte";
        }

        const dados = repo.create({
            estado,
            volumeDeChuva,
            grauDeChuva: grauDeChuva
        })

        await repo.save(dados)

        return dados;
    }
}