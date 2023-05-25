import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import formatCurrencyOptions from '../../../utils/formatCurrencyOptions';
import { getCurrency } from '../../../store/utils';
import { setCurrency } from '../../../store/reducers/app';

import { currency } from '../../../constants';

import NavMenu from '../NavMenu';
import Select from '../../Atoms/Select';

import { ReactComponent as CloseSvg } from '../../../assets/images/close.svg';

import styles from './index.module.scss';
import Button from '../../Atoms/Button';

const MobileMenu = ({ onClose }) => {
  const options = formatCurrencyOptions(currency);
  const selectedCurrency = useSelector(getCurrency);
  const dispatch = useDispatch();

  const onSelect = value => dispatch(setCurrency(value));

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.closeBtnWrap}>
        <button className={styles.closeBtn} onClick={onClose} type="button">
          <CloseSvg />
        </button>
      </div>
      <div className={styles.content}>
        <NavMenu position="vertical" className={styles.navMenu} />
        <div className={styles.selectWrap}>
          <Select
            options={options}
            value={selectedCurrency}
            classes={{ trigger: styles.selectTrigger }}
            onSelect={onSelect}
            isStatic
          />
        </div>

        <div className={styles.buttonWrap}>
          <Button variant="outlined">Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
