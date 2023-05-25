import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

import { getCurrency } from '../../../store/selectors';

import Input from '../../Atoms/Input';
import styles from './index.module.scss';
import { USD_PRICE, CURRENCY } from '../../../constants';
import getItemPrice from '../../../utils/getItemPrice';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const selectedCurrency = useSelector(getCurrency);

  const currencyObj = useMemo(
    () => CURRENCY.find(({ value }) => value === selectedCurrency),
    [selectedCurrency],
  );

  const price = useMemo(
    () => getItemPrice(USD_PRICE, amount, currencyObj?.coef),
    [amount, currencyObj],
  );

  const formatPrice = `${currencyObj.label}: ${price}`;

  return (
    <div className={styles.inputWrap}>
      <Input label="Amount" type="number" value={amount} onChange={setAmount} />
      <Input label="Price" disabled value={formatPrice} />
    </div>
  );
};

export default Calculator;
