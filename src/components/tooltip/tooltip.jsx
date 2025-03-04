import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons/TooltipIcon';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text }) => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const onMouseEnterHandler = () => {
    setIsShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setIsShowTooltip(false);
  };

  return (
    <span
      className={styles.tooltipContainer}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <span className={styles.tooltipTrigger}>
        <TooltipIcon />
      </span>
      {isShowTooltip && <span className={styles.tooltipContent}>{text}</span>}
    </span>
  );
};
