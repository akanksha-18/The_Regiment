import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../features/tasks/taskSlice';
import { selectFilter } from '../../features/tasks/selectors';
import Button from '../common/Button';

const TaskFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const filters = ['ALL', 'PENDING', 'IN_PROGRESS', 'COMPLETED'];

  return (
    <div className="space-x-2">
      {filters.map(filter => (
        <Button
          key={filter}
          variant={currentFilter === filter ? 'primary' : 'secondary'}
          onClick={() => dispatch(setFilter(filter))}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
