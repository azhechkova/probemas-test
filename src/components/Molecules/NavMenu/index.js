import classNames from 'classnames';
import PropTypes from 'prop-types';

import { navRoutes } from '../../../router/routes';

import NavLink from '../../Atoms/NavLink';

import styles from './index.module.scss';

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

NavMenu.defaultProps = {
  position: 'horisontal',
  className: '',
};

NavMenu.propTypes = {
  position: PropTypes.oneOf(['vertical', 'horisontal']),
  className: PropTypes.string,
};

export default NavMenu;
