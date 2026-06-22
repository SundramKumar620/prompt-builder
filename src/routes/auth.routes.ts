import { Router } from "express";
import {
  googleLogin,
  getMe,
  logout,
} from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

router.post("/google", googleLogin);

router.get("/me", authMiddleware, getMe);

router.post("/logout", logout);

export default router;