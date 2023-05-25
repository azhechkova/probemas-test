import { ReactComponent as UsdSvg } from '../assets/images/usd.svg';
import { ReactComponent as EurSvg } from '../assets/images/eur.svg';
import { ReactComponent as GbpSvg } from '../assets/images/gbp.svg';
import { ReactComponent as AudSvg } from '../assets/images/aud.svg';
import { ReactComponent as CadSvg } from '../assets/images/cad.svg';

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
