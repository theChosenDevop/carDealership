import { Router } from "express";
import { getAllManagers } from "../controllers/manager.controller";

const router = Router();

router.get("/", getAllManagers);

export default router;