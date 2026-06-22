export interface CreateProjectDTO {
  title: string;
  description?: string;
}

export interface UpdateProjectDTO {
  title?: string;
  description?: string;
}