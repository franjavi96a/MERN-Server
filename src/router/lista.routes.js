import { Router } from "express";
import { metodos as listaController } from "../controllers/lista.controller.js";

const router = Router();

router.get('/', listaController.getListaUsuarios);

export default router;


