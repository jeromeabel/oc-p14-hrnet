import { createBrowserRouter } from 'react-router-dom';

// Pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Error404 from './pages/Error404';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <Error404 /> },
    ],
  },
]);

export default App;
