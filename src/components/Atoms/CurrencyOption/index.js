import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const CurrencyOption = ({ currency, isSelected }) => {
  const optionClassnames = classNames(styles.option, {
    [styles.selected]: isSelected,
  });

  return (
    <div className={optionClassnames}>
      <currency.Icon className={styles.icon} />
      <span className={styles.label}>{currency.label}</span>
    </div>
  );
};

CurrencyOption.defaultProps = {
  isSelected: false,
};

CurrencyOption.propTypes = {
  currency: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
};

export default CurrencyOption;
