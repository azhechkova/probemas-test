import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

const Button = ({ children, variant, type, ...props }) => {
  const buttonClasses = classNames(styles.button, {
    [styles.outlinedButton]: variant === 'outlined',
    [styles.filledButton]: variant === 'filled',
  });

  return (
    <button className={buttonClasses} type="button" {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'filled',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['outlined', 'filled']),
  type: PropTypes.string,
};

export default Button;
