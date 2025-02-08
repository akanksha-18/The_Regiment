import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import TaskDetailsPage from '../pages/TaskDetailsPage';
import TaskFormPage from '../pages/TaskFormPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/task/:id" element={<TaskDetailsPage />} />
      <Route path="/task/new" element={<TaskFormPage />} />
      <Route path="/task/edit/:id" element={<TaskFormPage />} />
    </Routes>
  );
};

export default AppRoutes;