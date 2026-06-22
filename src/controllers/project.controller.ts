import type { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import ProjectService from "../services/project.service";

export const createProject = asyncHandler(async (req: any, res: Response) => {
  const project = await ProjectService.create(req.user.id, req.body);

  res.status(201).json(
    new ApiResponse(201, project, "Project created")
  );
});

export const getProjects = asyncHandler(async (req: any, res: Response) => {
  const projects = await ProjectService.getAll(req.user.id);

  res.json(
    new ApiResponse(200, projects)
  );
});

export const getProject = asyncHandler(async (req: any, res: Response) => {
  const project = await ProjectService.getById(
    req.params.id,
    req.user.id
  );

  res.json(
    new ApiResponse(200, project)
  );
});

export const updateProject = asyncHandler(async (req: any, res: Response) => {
  const project = await ProjectService.update(
    req.params.id,
    req.user.id,
    req.body
  );

  res.json(
    new ApiResponse(200, project, "Updated")
  );
});

export const deleteProject = asyncHandler(async (req: any, res: Response) => {
  await ProjectService.delete(req.params.id, req.user.id);

  res.json(
    new ApiResponse(200, null, "Deleted")
  );
});