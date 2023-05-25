import classNames from 'classnames';
import PropTypes from 'prop-types';

import { navRoutes } from '../../../router/routes';

import NavLink from '../../Atoms/NavLink';

import styles from './index.module.scss';

const NavMenu = ({ position, className, onClick }) => {
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
            onClick={onClick}
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
  onClick: () => {},
};

NavMenu.propTypes = {
  position: PropTypes.oneOf(['vertical', 'horisontal']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavMenu;
