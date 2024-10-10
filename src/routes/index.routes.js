import { Router } from "express";
import suspeitosRoutes from "./suspeitos.routes.js";

const routes = Router();

// Rota raiz para testes
routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Test Project"})
});

routes.use("/suspeitos", suspeitosRoutes);

export default routes;