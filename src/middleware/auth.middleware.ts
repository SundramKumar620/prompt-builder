import type { NextFunction, Request, Response } from "express";

export default function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message,
    });
}