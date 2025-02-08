
import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';
import { TaskState } from '../types/task.types';


export interface RootState {
  tasks: TaskState;
}


const rootReducer = combineReducers<RootState>({
  tasks: taskReducer,

});


export type AppReducer = typeof rootReducer;

export default rootReducer;
export type AppThunk<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState
) => ReturnType;

export type AppDispatch = (
  action: any
) => any;

export const isThunk = (action: any): action is AppThunk => {
  return typeof action === 'function';
};


export type Selector<T> = (state: RootState) => T;


export type ActionCreator<T> = (...args: any[]) => { type: string; payload: T };