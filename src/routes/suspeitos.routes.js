import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos em lavagem de dinheiro
let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Gustavo Lima",
        profissao: "Cantor",
        suspeito: true,
        nivel: "Médio"
    }
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeitos
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, suspeito, nivel } = req.body;

    // Validação dos campos nome e profissão
    if (!nome || !profissao) {
        return res.status(400).send({
            message: "O nome ou a profissão do suspeito não foi preenchido!",
        });
    }

    // Validação do nivel
    if (nivel = !"Baixo" || !"Médio" || !"Alto") {
        return res.status(400).send({
            message:
                "O nível de suspeita do candidato não corresponde as alternativas, Baixo, Médio ou Alto"
        });
    }

    // Cadastro de um novo suspeito
    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        profissao,
        suspeito,
        nivel
    };

    // Adiciona o novo candidato ao array de candidatos
    suspeitos.push(novoSuspeito);

    return res.status(201).json({
        message: "Suspeito cadastrado com sucesso!",
        novoSuspeito,
    });
});

export default suspeitosRoutes;