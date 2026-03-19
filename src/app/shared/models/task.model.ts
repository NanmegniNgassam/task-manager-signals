export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export enum CompletionStatus {
  ALL = 'Toutes',
  DONE = 'Completées',
  IN_PROGRESS = 'Actives',
}
