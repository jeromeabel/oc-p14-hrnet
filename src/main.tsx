/**
 * Entry point of the application.
 *
 * Imports necessary dependencies and sets up the root component of the application.
 *
 * @module main
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// Main router
import App from './App.tsx';

// Context state management
import { EmployeesProvider } from './context/EmployeesContext.tsx';

// Tailwind setup
import './styles/index.css';

/**
 * Root component of the application.
 * Renders the main App component within necessary providers and strict mode.
 *
 * @type {React.Component}
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EmployeesProvider>
      <RouterProvider router={App} />
    </EmployeesProvider>
  </React.StrictMode>
);
