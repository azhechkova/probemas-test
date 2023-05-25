import { Navigate, createBrowserRouter } from 'react-router-dom';

import { routes } from '../constants';

const formatRoutes = routes.map(route => ({
  path: route.path,
  element: route.element,
}));

const router = createBrowserRouter([
  ...formatRoutes,
  { path: '*', element: <Navigate to="/" /> },
]);

export default router;
