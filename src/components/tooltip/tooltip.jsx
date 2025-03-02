import styles from './Tooltip.module.scss';

export const Tooltip = ({ text, icon }) => {
  return (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltipTrigger}>{icon}</div>
      <div className={styles.tooltipContent}>{text}</div>
    </div>
  );
};
