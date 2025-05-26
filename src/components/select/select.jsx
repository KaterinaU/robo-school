import { useRef, useState } from 'react';

import { ArrowDownIcon } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const selectRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClose = () => {
    setIsSelectOpen(false);
  };

  const handleToggle = () => {
    setIsSelectOpen((prev) => !prev);
  };

  const handleSelect = (selectedValue) => () => {
    onChange(selectedValue);
    handleClose();
  };

  useOutsideClick({
    ref: selectRef,
    handler: handleClose,
    condition: isSelectOpen,
    exceptElementRef: buttonRef,
  });

  const getArrowClassName = () => `${styles.dropdownArrow} ${isSelectOpen ? styles.open : ''}`;

  const getOptionClassName = (optionValue) =>
    `${styles.option} ${optionValue === value ? styles.activeOption : ''}`;

  const activeLabel = options.find((option) => option.value === value)?.label || '';

  return (
    <div className={styles.select} ref={selectRef}>
      <button ref={buttonRef} className={styles.button} onClick={handleToggle} type="button">
        {activeLabel}
        <ArrowDownIcon className={getArrowClassName()} />
      </button>

      {isSelectOpen && (
        <div className={styles.dropdown}>
          {options.map(({ value: optionValue, label }) => (
            <button
              key={optionValue}
              className={getOptionClassName(optionValue)}
              onClick={handleSelect(optionValue)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
