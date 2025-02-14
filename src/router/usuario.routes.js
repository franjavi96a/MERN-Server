import { Router } from "express";
import { metodos as usuarioController } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/usuarios', usuarioController.getUsuarios);

export default router;


