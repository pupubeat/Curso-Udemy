import { Router } from "express";
import { homeControllers } from "../controllers/homeControllers.js";

const router = Router()

// Obtener listado urls
router.get('/', homeControllers.leerUrls)

// Agregar una nueva url
router.post('/', homeControllers)

export default router