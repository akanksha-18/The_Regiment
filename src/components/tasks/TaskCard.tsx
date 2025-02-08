import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../types/task.types';
import StatusBadge from '../common/StatusBadge';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Link
      to={`/task/${task.id}`}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
        <StatusBadge status={task.status} />
      </div>
    </Link>
  );
};

export default TaskCard;