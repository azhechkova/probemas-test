import { ReactComponent as UsdSvg } from '../assets/images/usd.svg';
import { ReactComponent as EurSvg } from '../assets/images/eur.svg';
import { ReactComponent as GbpSvg } from '../assets/images/gbp.svg';
import { ReactComponent as AudSvg } from '../assets/images/aud.svg';
import { ReactComponent as CadSvg } from '../assets/images/cad.svg';

export const CURRENCY = [
  {
    value: 'usd',
    label: 'USD',
    Icon: UsdSvg,
    coef: 1,
  },
  {
    value: 'eur',
    label: 'EUR',
    Icon: EurSvg,
    coef: 1.1,
  },
  {
    value: 'gbp',
    label: 'GBP',
    Icon: GbpSvg,
    coef: 1.4,
  },
  {
    value: 'aud',
    label: 'AUD',
    Icon: AudSvg,
    coef: 0.65,
  },
  {
    value: 'cad',
    label: 'CAD',
    Icon: CadSvg,
    coef: 0.74,
  },
];

export const USD_PRICE = 10;
