import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon }) => {
  return (
    <div className={styles.tooltipContainer}>
      <div className={styles.tooltipTrigger}>{icon}</div>
      <div className={styles.tooltipContent}>{text}</div>
    </div>
  );
};
