import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Task, TaskStatus } from '../types/task.types';
import { selectTaskById } from '../features/tasks/selectors';
import { useTaskActions } from '../hooks/useTaskActions';
import Layout from '../components/layout/Layout';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Button from '../components/common/Button';

type TaskFormData = Omit<Task, 'id'>;

const TaskFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const task = useSelector(id ? selectTaskById(id) : () => undefined);
  const { createTask, editTask } = useTaskActions();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TaskFormData>({
    defaultValues: task || {
      title: '',
      description: '',
      dueDate: '',
      status: 'PENDING' as TaskStatus
    }
  });

  const onSubmit = (data: TaskFormData) => {
    if (id && task) {
      editTask({ ...data, id });
    } else {
      createTask(data);
    }
  };

  const statusOptions = [
    { value: 'PENDING', label: 'Pending' },
    { value: 'IN_PROGRESS', label: 'In Progress' },
    { value: 'COMPLETED', label: 'Completed' }
  ];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">
            {id ? 'Edit Task' : 'Create New Task'}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Title"
              {...register('title', { required: 'Title is required' })}
              error={errors.title?.message}
            />

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                className={`w-full px-3 py-2 border rounded ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={4}
                {...register('description', {
                  required: 'Description is required'
                })}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <Input
              type="date"
              label="Due Date"
              {...register('dueDate', { required: 'Due date is required' })}
              error={errors.dueDate?.message}
            />

            <Select
              label="Status"
              options={statusOptions}
              {...register('status')}
            />

            <div className="flex justify-end space-x-2 mt-6">
              <Button
                type="button"
                variant="secondary"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {id ? 'Update Task' : 'Create Task'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default TaskFormPage;