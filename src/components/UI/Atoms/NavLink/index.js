import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.module.scss';

const NavLink = ({ children, to }) => {
  const getClassname = ({ isActive }) =>
    classNames(styles.link, {
      [styles.activeLink]: isActive,
    });

  return (
    <Link to={to} className={getClassname}>
      {children}
    </Link>
  );
};

export default NavLink;
