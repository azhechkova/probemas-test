import { useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowSvg } from '../../../../assets/images/arrow.svg';

import styles from './index.module.scss';

const Select = ({ options, onSelect, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectClassnames = classNames(styles.select, {
    [styles.selectOpen]: isOpen,
  });

  const selectedOption =
    options.find(option => option.value === value) || options[0];

  return (
    <div className={selectClassnames}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <selectedOption.label />
        <ArrowSvg className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.options}>
          <ul>
            {options.map(option => {
              return (
                <li key={option.value}>
                  <button
                    onClick={() => onSelect(option.value)}
                    className={styles.optionButton}
                  >
                    <option.label isSelected={value === option.value} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
