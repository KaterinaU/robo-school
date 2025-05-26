import { Button } from '@/components/button/index';

import styles from './tabs.module.scss';

export const Tabs = ({ options, value, onClick }) => {
  const getTextColorClass = (optionValue) => {
    return value === optionValue ? styles.active : styles.inactive;
  };

  const handleClick = (option) => () => onClick(option);

  return (
    <div className={styles.tabs}>
      {options.map((option) => (
        <Button
          key={option.value}
          variant="text"
          additionalClassname={getTextColorClass(option.value)}
          onClick={handleClick(option)}
          type="button"
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
