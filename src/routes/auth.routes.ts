import { Router } from "express";
import {
    googleLogin,
    getMe,
    logout,
} from "../controllers/auth.controller";

const router = Router();

router.get("/google", googleLogin);

router.get("/me", getMe);

router.post("/logout", logout);

export default router;