import { USD_PRICE } from '../../constants';
import Calculator from '../../components/Molecules/Calculator';
import MainLayout from '../../layouts/MainLayout';

import styles from './index.module.scss';

const MainPage = () => {
  return (
    <MainLayout>
      <p className={styles.introText}>
        The price in USD for 1 item is: ${USD_PRICE}
      </p>
      <Calculator />
    </MainLayout>
  );
};

export default MainPage;
