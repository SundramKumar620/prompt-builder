import type { Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import PromptService from "../services/prompt.service";

export const generatePrompt = asyncHandler(async (req: any, res: Response) => {
  const { projectId, idea } = req.body;

  const prompt = await PromptService.generate(projectId, idea);

  res.status(201).json(
    new ApiResponse(201, prompt, "Prompt generated")
  );
});

export const getPromptHistory = asyncHandler(async (req: any, res: Response) => {
  const prompts = await PromptService.history(req.params.projectId);

  res.json(
    new ApiResponse(200, prompts)
  );
});

export const improvePrompt = asyncHandler(async () => {});