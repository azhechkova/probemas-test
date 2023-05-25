import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { currency } from '../../../../constants';
import { getCurrency } from '../../../../store/utils';
import { setCurrency } from '../../../../store/reducers/app';

import NavMenu from '../NavMenu';
import Button from '../../Atoms/Button';
import NavLink from '../../Atoms/NavLink';
import CurrencyOption from '../../Atoms/CurrencyOption';
import Select from '../../Atoms/Select';

import Logo from '../../../../assets/images/logo.png';

import styles from './index.module.scss';

const Header = () => {
  const selectedCurrency = useSelector(getCurrency);
  const dispatch = useDispatch();
  const onSelect = value => dispatch(setCurrency(value));

  const selectOptions = currency.map(currency => ({
    value: currency.value,
    label: props => <CurrencyOption currency={currency} {...props} />,
  }));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navMenu}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <NavMenu />
        </nav>
        <div className={styles.rightBlock}>
          <Select
            options={selectOptions}
            value={selectedCurrency}
            onSelect={onSelect}
          />
          <NavLink to="/sign-up">Sign Up</NavLink>
          <Button>Log In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
