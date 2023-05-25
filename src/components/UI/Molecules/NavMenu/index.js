import NavLink from '../../Atoms/NavLink';

import { navRoutes } from '../../../../constants';

import styles from './index.module.scss';

const NavMenu = () => (
  <ul className={styles.navList}>
    {navRoutes.map(route => (
      <li key={route.path}>
        <NavLink to={route.path}>{route.label}</NavLink>
      </li>
    ))}
  </ul>
);

export default NavMenu;
