import CurrencyOption from '../components/UI/Atoms/CurrencyOption';

const formatCurrencyOptions = options =>
  options.map(currency => ({
    value: currency.value,
    label: props => <CurrencyOption currency={currency} {...props} />,
  }));

export default formatCurrencyOptions;
