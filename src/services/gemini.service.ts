import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export default class GeminiService {
    static async generate(idea: string) {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `
You are an expert AI prompt engineer.

Create a professional Higgsfield AI video prompt.

Return ONLY valid JSON.

Idea:
${idea}

Format:
{
  "title": "",
  "prompt": "",
  "negativePrompt": "",
  "camera": "",
  "lighting": "",
  "lens": "",
  "style": "",
  "colorGrading": "",
  "aspectRatio": "9:16",
  "duration": "8s"
}
      `,
        });

        return JSON.parse(response.text!);
    }
}