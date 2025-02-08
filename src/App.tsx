import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;