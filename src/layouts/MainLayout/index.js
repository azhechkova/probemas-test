import PropTypes from 'prop-types';

import Header from '../../components/Molecules/Header';
import styles from './index.module.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
