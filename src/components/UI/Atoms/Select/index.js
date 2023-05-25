import { useRef, useState } from 'react';
import classNames from 'classnames';

import useClickOutside from '../../../../hooks/useClickOutside';

import { ReactComponent as ArrowSvg } from '../../../../assets/images/arrow.svg';

import styles from './index.module.scss';

const Select = ({ options, onSelect, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectClassnames = classNames(styles.select, {
    [styles.selectOpen]: isOpen,
  });

  const selectedOption =
    options.find(option => option.value === value) || options[0];

  const onClose = () => setIsOpen(false);
  const onChange = value => {
    onSelect(value);
    onClose();
  };
  const onToggle = () => setIsOpen(prev => !prev);

  useClickOutside(selectRef, () => setIsOpen(false));

  return (
    <div className={selectClassnames} ref={selectRef}>
      <button className={styles.trigger} onClick={onToggle}>
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
                    onClick={() => onChange(option.value)}
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
