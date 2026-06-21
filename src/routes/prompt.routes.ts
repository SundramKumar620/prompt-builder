import { Router } from "express";
import {
    generatePrompt,
    improvePrompt,
    getPromptHistory,
} from "../controllers/prompt.controller";

const router = Router();

router.post("/generate", generatePrompt);

router.post("/improve", improvePrompt);

router.get("/:projectId", getPromptHistory);

export default router;