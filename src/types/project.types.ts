export interface CreateProjectDTO {
  title: string;
  description?: string;
  userId: string;
}

export interface UpdateProjectDTO {
  title?: string;
  description?: string;
}