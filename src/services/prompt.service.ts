import { prisma } from "../config/db";
import GeminiService from "./gemini.service";

export default class PromptService {
    static async generate(projectId: string, idea: string) {
        const aiResponse = await GeminiService.generate(idea);

        const latest = await prisma.prompt.findFirst({
            where: {
                projectId,
            },
            orderBy: {
                version: "desc",
            },
        });

        const version = latest ? latest.version + 1 : 1;

        return prisma.prompt.create({
            data: {
                projectId,
                idea,
                response: aiResponse,
                version,
            },
        });
    }

    static async history(projectId: string) {
        return prisma.prompt.findMany({
            where: {
                projectId,
            },
            orderBy: {
                version: "desc",
            },
        });
    }

    static async improve(
        promptId: string,
        instruction: string
    ) {

        const previous = await prisma.prompt.findUnique({
            where: {
                id: promptId,
            },
        });

        if (!previous) {
            throw new Error("Prompt not found");
        }

        const improved = await GeminiService.improve(
            previous.response,
            instruction
        );

        return prisma.prompt.create({
            data: {
                projectId: previous.projectId,
                version: previous.version + 1,
                idea: previous.idea,
                response: improved,
            },
        });

    }
}

