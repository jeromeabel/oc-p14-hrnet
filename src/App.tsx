/**
 * Main application file.
 *
 * Imports React Router DOM and defines the application routes.
 *
 * @module App
 */

import { createBrowserRouter } from 'react-router-dom';

// Shared Layout
import Layout from './pages/Layout';

// Pages
import Home from './pages/Home';
import Add from './pages/Add';
import View from './pages/View';
import NotFound from './pages/NotFound';

/**
 * The main application component.
 * Uses React Router DOM to define routes and render corresponding components.
 *
 * @type {React.Component}
 */
const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'add', element: <Add /> },
      { path: 'view', element: <View /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default App;
