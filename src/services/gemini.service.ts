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

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT wrap the JSON inside \`\`\`json.
- Do NOT explain anything.
- Do NOT add extra text.

Schema:
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

Idea:
${idea}
`,
    });

    const text = response.text!;

    console.log(text); // <-- Keep this while developing

    const json = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(json);
  }
}