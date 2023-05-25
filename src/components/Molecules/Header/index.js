import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { currency } from '../../../constants';
import { getCurrency } from '../../../store/utils';
import { setCurrency } from '../../../store/reducers/app';
import useWindowSize from '../../../hooks/useWindowSize';
import formatCurrencyOptions from '../../../utils/formatCurrencyOptions';

import NavMenu from '../NavMenu';
import MobileMenu from '../MobileMenu';
import Button from '../../Atoms/Button';
import NavLink from '../../Atoms/NavLink';
import Select from '../../Atoms/Select';

import Logo from '../../../assets/images/logo.png';
import { ReactComponent as MenuSvg } from '../../../assets/images/menu.svg';

import styles from './index.module.scss';

const mobileBreakpoint = 910;

const Header = () => {
  const selectedCurrency = useSelector(getCurrency);
  const dispatch = useDispatch();
  const onSelect = value => dispatch(setCurrency(value));
  const { width } = useWindowSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const selectOptions = formatCurrencyOptions(currency);

  const onOpen = () => setIsMobileMenuOpen(true);
  const onClose = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {width < mobileBreakpoint && (
          <button
            className={styles.mobileButton}
            onClick={onOpen}
            type="button"
          >
            <MenuSvg />
          </button>
        )}
        <nav className={styles.navMenu}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          {width >= mobileBreakpoint && <NavMenu />}
        </nav>
        <div className={styles.rightBlock}>
          {width >= mobileBreakpoint && (
            <>
              <Select
                options={selectOptions}
                value={selectedCurrency}
                onSelect={onSelect}
              />
              <NavLink to="/sign-up">Sign Up</NavLink>
            </>
          )}
          <Button>Log In</Button>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={onClose} />}
    </header>
  );
};

export default Header;
