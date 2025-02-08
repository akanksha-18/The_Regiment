import React from 'react';
import { TaskStatus } from '../../types/task.types';

interface StatusBadgeProps {
  status: TaskStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusStyles = {
    PENDING: 'bg-red-100 text-red-800',
    IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
    COMPLETED: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`px-2 py-1 rounded text-sm ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;