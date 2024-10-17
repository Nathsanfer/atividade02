import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos em lavagem de dinheiro
let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Gustavo Lima",
        profissao: "Cantor",
        suspeita: "Sim",
        nivel: "Médio"
    }
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeitos
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, suspeita, nivel } = req.body;

    // Validação dos campos nome e profissão
    if (!nome || !profissao) {
        return res.status(400).send({
            message: "O nome ou a profissão do suspeito não foi preenchido!",
        });
    }

    // Validação do nivel
    if (nivel != "Baixo" && nivel != "Médio" && nivel != "Alto") {
        return res.status(400).send({
            message:
                "O nível de suspeita não corresponde as alternativas: Baixo, Médio ou Alto"
        });
    }

    if (suspeita != "Sim" && suspeita != "Não") {
        return res.status(400).send({
            message:
                "A confirmação de se a pessoa é suspeita não foi preenchida"
        });
    }

    // Cadastro de um novo suspeito
    const novoSuspeito = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        profissao,
        suspeita,
        nivel
    };

    // Adiciona o novo suspeito ao array de suspeitos
    suspeitos.push(novoSuspeito);

    return res.status(201).json({
        message: "Suspeito cadastrado com sucesso!",
        novoSuspeito,
    });
});

//Rota para buscar suspeito pelo id

suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspect) => suspect.id == id);

    if (!suspeito) {
        return res.status(404).json({
            message: "Suspeito não encontrado!",
        });
    }
    return res.status(200).json({
        message: "Suspeito encontrado!",
        suspeito,
    })
});

// Rota para atualizar os dados de um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissao, suspeita, nivel } = req.body;

    // Busca um candidato pelo id no array de candidatos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);

    // Verifica se o candidato foi encontrado
    if (!suspeito) {
        return res
            .status(404)
            .json({ message: `Suspeito com id ${id} não encontrado!` });
    }

    // Validação dos campos nome e partido
    if (!nome || !profissao) {
        return res.status(400).send({
            message: "O nome ou a profissão não foi preenchida!",
        });
    }

    suspeito.nome = nome;
    suspeito.profissao = profissao;
    suspeito.suspeita = suspeita;
    suspeito.nivel = nivel;

    return res.status(200).json({
        message: "Dados do suspeito atualizado com sucesso!",
        suspeito,
    });
});

// Rota para deletar os suspeitos
suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspect) => suspect.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    // Remove o suspeito do array de suspeitos
    suspeitos = suspeitos.filter((suspect) => suspect.id != id);
  
    return res.status(200).json({
      message: "O suspeito removido com sucesso!",
      suspeito,
    });
  });


export default suspeitosRoutes;