import { RootState } from '../../types/store.types';
import { Task } from '../../types/task.types';

export const selectTasks = (state: RootState): Task[] => state.tasks.tasks;
export const selectFilter = (state: RootState): string => state.tasks.filter;
export const selectTaskById = (id: string) => (state: RootState): Task | undefined => 
  state.tasks.tasks.find(task => task.id === id);

// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../../features/tasks/taskSlice';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;