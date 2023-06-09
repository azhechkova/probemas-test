import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import classNames from 'classnames';

import useClickOutside from '../../../hooks/useClickOutside';

import { ReactComponent as ArrowSvg } from '../../../assets/images/arrow.svg';

import styles from './index.module.scss';

const Select = ({ options, onSelect, value, isStatic, classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectClassnames = classNames(styles.select, {
    [styles.selectOpen]: isOpen,
    [styles.staticSelect]: isStatic,
  });
  const valueClassnames = classNames(styles.trigger, {
    [classes.trigger]: classes.trigger,
  });

  const selectedOption =
    options.find(option => option.value === value) || options[0];

  const onClose = () => setIsOpen(false);

  const onChange = newValue => {
    onSelect(newValue);

    if (!isStatic) onClose();
  };

  const onToggle = () => setIsOpen(prev => !prev);

  useClickOutside(selectRef, () => !isStatic && setIsOpen(false));

  return (
    <div className={selectClassnames} ref={selectRef}>
      <button className={valueClassnames} onClick={onToggle} type="button">
        <selectedOption.label />
        <ArrowSvg className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.options}>
          <ul>
            {options.map(option => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => onChange(option.value)}
                  className={styles.optionButton}
                >
                  <option.label isSelected={value === option.value} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Select.defaultProps = {
  classes: {},
  isStatic: false,
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isStatic: PropTypes.bool,
  classes: PropTypes.object,
};

export default Select;
