import { Router } from "express";
import { homeControllers } from "../controllers/homeControllers.js";

const router = Router()

router.get('/', homeControllers.leerUrls)

export default router