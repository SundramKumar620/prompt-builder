import { prisma } from "../config/db";
import type {
  CreateProjectDTO,
  UpdateProjectDTO,
} from "../types/project.types.ts";

class ProjectService {
  static async create(userId: string, data: CreateProjectDTO) {
    return prisma.project.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  static async getAll(userId: string) {
    return prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  static async getById(id: string, userId: string) {
    return prisma.project.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  static async update(
    id: string,
    userId: string,
    data: UpdateProjectDTO
  ) {
    return prisma.project.update({
      where: {
        id,
        userId,
      },
      data,
    });
  }

  static async delete(id: string, userId: string) {
    return prisma.project.delete({
      where: {
        id,
        userId,
      },
    });
  }
}

export default ProjectService;