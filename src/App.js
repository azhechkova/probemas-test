import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import router from './router';
import { store } from './store/store';

import './assets/styles/index.scss';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
