import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware";
import {
  generatePrompt,
  getPromptHistory,
  improvePrompt,
} from "../controllers/prompt.controller";

const router = Router();

router.use(authMiddleware);

router.post("/generate", generatePrompt);

router.post("/improve", improvePrompt);

router.get("/:projectId", getPromptHistory);

export default router;