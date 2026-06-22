import type { Request, Response } from "express";
import { verifyGoogleToken } from "../services/google.service";
import { findOrCreateUser } from "../services/auth.service";
import { generateToken } from "../services/jwt.service";

export async function googleLogin(req: Request, res: Response) {
    const { credential } = req.body;

    const payload = await verifyGoogleToken(credential);

    if (!payload?.email) {
        return res.status(401).json({
            message: "Invalid Google Token",
        });
    }

    const user = await findOrCreateUser({
        email: payload.email,
        name: payload.name!,
        image: payload.picture,
    });

    const token = generateToken(user.id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });

    res.json({
        success: true,
        user,
    });
}

export async function getMe(req: any, res: Response) {
    res.json(req.user);
}

export async function logout(req: Request, res: Response) {
    res.clearCookie("token");

    res.json({
        success: true,
    });
}