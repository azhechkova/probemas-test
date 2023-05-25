import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

const Button = ({ children, variant, ...props }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.outlinedButton]: variant === 'outlined',
    [styles.filledButton]: variant === 'filled',
  });

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'filled',
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['outlined', 'filled']),
};

export default Button;
