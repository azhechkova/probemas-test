import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';

import styles from './index.module.scss';

const NavLink = ({ children, to, className, showActive, ...props }) => {
  const getClassname = ({ isActive }) =>
    classNames(styles.link, {
      [styles.activeLink]: isActive,
      [styles.activeDash]: isActive && showActive,
      [className]: className,
    });

  return (
    <Link to={to} className={getClassname} {...props}>
      {children}
    </Link>
  );
};

NavLink.defaultProps = {
  className: '',
  showActive: true,
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  showActive: PropTypes.bool,
};
export default NavLink;
