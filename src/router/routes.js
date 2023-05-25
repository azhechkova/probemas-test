import MainPage from '../pages/MainPage';

export const navRoutes = [
  { label: 'OSRS Gold', path: '/osrs-gold', element: <MainPage /> },
  { label: 'RS3 Gold', path: '/rs3-gold', element: <MainPage /> },
  { label: 'Sell RS Gold', path: '/sell-rs-gold', element: <MainPage /> },
  { label: 'OSRS Items', path: '/osrs-items', element: <MainPage /> },
  { label: 'OSRS Accounts', path: '/osrs-accounts', element: <MainPage /> },
  { label: 'Reward Chests', path: '/reward-chests', element: <MainPage /> },
];

export const routes = [
  { label: 'Main Page', path: '/', element: <MainPage /> },
  ...navRoutes,
];
