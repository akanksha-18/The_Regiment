import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import TaskFilter from '../components/tasks/TaskFilter';
import TaskList from '../components/tasks/TaskList';
import Button from '../components/common/Button';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <TaskFilter />
        <Link to="/task/new">
          <Button variant="primary">Add Task</Button>
        </Link>
      </div>
      <TaskList />
    </Layout>
  );
};

export default DashboardPage;