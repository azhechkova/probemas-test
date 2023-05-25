import { RouterProvider } from 'react-router-dom';

import router from './router';

import './assets/styles/index.scss';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
