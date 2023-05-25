import classNames from 'classnames';
import styles from './index.module.scss';

const CurrencyOption = ({ currency, isSelected }) => {
  const optionClassnames = classNames(styles.option, {
    [styles.selected]: isSelected,
  });

  return (
    <div className={optionClassnames}>
      <currency.icon className={styles.icon} />
      <span className={styles.label}>{currency.value}</span>
    </div>
  );
};

export default CurrencyOption;
