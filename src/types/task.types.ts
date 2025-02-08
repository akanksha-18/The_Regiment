export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
}

export interface TaskState {
  tasks: Task[];
  filter: TaskStatus | 'ALL';
  loading: boolean;
  error: string | null;
}

// src/types/store.types.ts
import { TaskState } from './task.types';

export interface RootState {
  tasks: TaskState;
}