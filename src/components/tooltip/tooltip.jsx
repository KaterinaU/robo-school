import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons/TooltipIcon';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text }) => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsShowTooltip(false);
  };

  return (
    <span
      className={styles.tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TooltipIcon />

      {isShowTooltip && <span className={styles.tooltipContent}>{text}</span>}
    </span>
  );
};
