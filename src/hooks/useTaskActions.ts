import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask, updateTask, deleteTask } from '../features/tasks/taskSlice';
import { Task } from '../types/task.types';

export const useTaskActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTask = (taskData: Omit<Task, 'id'>) => {
    dispatch(addTask(taskData));
    navigate('/');
  };

  const editTask = (taskData: Task) => {
    dispatch(updateTask(taskData));
    navigate('/');
  };

  const removeTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(taskId));
      navigate('/');
    }
  };

  return {
    createTask,
    editTask,
    removeTask
  };
};
