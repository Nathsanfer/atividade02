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

export default suspeitosRoutes;