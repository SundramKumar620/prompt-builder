import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";

import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/project.controller";

const router = Router();

router.use(authMiddleware);

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:id", getProject);

router.patch("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;