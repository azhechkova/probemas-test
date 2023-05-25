import { Link } from 'react-router-dom';

import NavMenu from '../NavMenu';
import Button from '../../Atoms/Button';
import NavLink from '../../Atoms/NavLink';

import Logo from '../../../../assets/images/logo.png';

import styles from './index.module.scss';
import Select from '../../Atoms/Select';
import { currency } from '../../../../constants';
import CurrencyOption from '../../Atoms/CurrencyOption';

const Header = () => {
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
          <Select options={selectOptions} />
          <NavLink to="/">Sign Up</NavLink>
          <Button>Log In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
