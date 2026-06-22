export interface GeneratePromptDTO {
  projectId: string;
  input: string;
}

export interface ImprovePromptDTO {
  promptId: string;
  instruction: string;
}