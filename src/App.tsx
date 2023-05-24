import { createBrowserRouter } from 'react-router-dom';

// Shared Layout
import Layout from './pages/Layout';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Add from './pages/Add';
import View from './pages/View';

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
