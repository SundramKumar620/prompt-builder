import { Router } from "express";
import {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject,
} from "../controllers/project.controller";

const router = Router();

router.post("/", createProject);

router.get("/", getProjects);

router.get("/:id", getProject);

router.patch("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;