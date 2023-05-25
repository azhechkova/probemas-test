import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.module.scss';

const NavLink = ({ children, to, className, showActive = true }) => {
  const getClassname = ({ isActive }) =>
    classNames(styles.link, {
      [styles.activeLink]: isActive,
      [styles.activeDash]: isActive && showActive,
      [className]: className,
    });

  return (
    <Link to={to} className={getClassname}>
      {children}
    </Link>
  );
};

export default NavLink;
