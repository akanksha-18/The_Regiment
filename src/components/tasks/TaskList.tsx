import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks, selectFilter } from '../../features/tasks/selectors';
import TaskCard from './TaskCard';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') return true;
    return task.status === filter;
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;