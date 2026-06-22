import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/jwt.service";
import { prisma } from "../config/db";

export default async function authMiddleware(
  req: any,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const payload: any = verifyToken(token);

  const user = await prisma.user.findUnique({
    where: {
      id: payload.userId,
    },
  });

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  req.user = user;

  next();
}