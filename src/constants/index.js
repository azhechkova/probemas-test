import MainPage from '../pages/MainPage';

import { ReactComponent as UsdSvg } from '../assets/images/usd.svg';
import { ReactComponent as EurSvg } from '../assets/images/eur.svg';
import { ReactComponent as GbpSvg } from '../assets/images/gbp.svg';
import { ReactComponent as AudSvg } from '../assets/images/aud.svg';
import { ReactComponent as CadSvg } from '../assets/images/cad.svg';

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

export const currency = [
  {
    value: 'usd',
    icon: UsdSvg,
    coef: 1,
  },
  {
    value: 'eur',
    icon: EurSvg,
    coef: 1,
  },
  {
    value: 'gbp',
    icon: GbpSvg,
    coef: 4,
  },
  {
    value: 'aud',
    icon: AudSvg,
    coef: 4,
  },
  {
    value: 'cad',
    icon: CadSvg,
    coef: 4,
  },
];
