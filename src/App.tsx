/**
 * Main application file.
 *
 * Imports React Router DOM and defines the application routes.
 *
 * @module App
 */

import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

// Shared Layout
import Layout from './pages/Layout';

// Pages (Lazy Loading)
// import Home from './pages/Home';
const HomeLazy = lazy(() => import('./pages/Home'));
const AddLazy = lazy(() => import('./pages/Add'));
const ViewLazy = lazy(() => import('./pages/View'));
const NotFoundLazy = lazy(() => import('./pages/NotFound'));

/**
 * The main application component.
 * Uses React Router DOM to define routes and render corresponding components.
 *
 * @type {React.Component}
 */
const App = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <HomeLazy />
            </Suspense>
          ),
        },
        {
          path: 'add',
          element: (
            <Suspense fallback={<Loading />}>
              <AddLazy />
            </Suspense>
          ),
        },
        {
          path: 'view',
          element: (
            <Suspense fallback={<Loading />}>
              <ViewLazy />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: (
            <Suspense fallback={<Loading />}>
              <NotFoundLazy />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: '/oc-p14-hrnet' }
);

export default App;
