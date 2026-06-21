import { Router } from "express";

import authRoutes from "./auth.routes";
import projectRoutes from "./project.routes";
import promptRoutes from "./prompt.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/projects", projectRoutes);

router.use("/prompts", promptRoutes);

export default router;