import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App.tsx';

// Context state management
import { EmployeesProvider } from './context/EmployeesContext.tsx';

// Tailwind setup
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EmployeesProvider>
      <RouterProvider router={App} />
    </EmployeesProvider>
  </React.StrictMode>
);
