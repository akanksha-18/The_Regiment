import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../../types/task.types';

const initialState: TaskState = {
  tasks: [],
  filter: 'ALL',
  loading: false,
  error: null
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      state.tasks.push({
        ...action.payload,
        id: Date.now().toString()
      });
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<TaskState['filter']>) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, updateTask, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;