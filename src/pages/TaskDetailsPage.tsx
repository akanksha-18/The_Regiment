import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTaskById } from '../features/tasks/selectors';
import { deleteTask } from '../features/tasks/taskSlice';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import StatusBadge from '../components/common/StatusBadge';

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector(selectTaskById(id!));

  if (!task) {
    return (
      <Layout>
        <div>Task not found</div>
      </Layout>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
      navigate('/');
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
          <p className="text-gray-600 mb-4">{task.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
            <StatusBadge status={task.status} />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={() => navigate('/')}>
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate(`/task/edit/${task.id}`)}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default TaskDetailsPage;