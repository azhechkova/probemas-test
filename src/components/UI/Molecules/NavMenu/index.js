import NavLink from '../../Atoms/NavLink';

import { navRoutes } from '../../../../constants';

import styles from './index.module.scss';
import classNames from 'classnames';

const NavMenu = ({ position, className }) => {
  const listClassnames = classNames(styles.navList, {
    [styles.listVertical]: position === 'vertical',
    [className]: className,
  });

  return (
    <ul className={listClassnames}>
      {navRoutes.map(route => (
        <li key={route.path}>
          <NavLink
            to={route.path}
            className={styles.navItem}
            showActive={position !== 'vertical'}
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
