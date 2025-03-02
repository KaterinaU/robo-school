import { TooltipIcon } from '@/assets/icons';
import { Tooltip } from '@/components/tooltip/';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ benefitItemData: { id, subtitle, description, tooltip } }) => {
  return (
    <div key={id} className={styles.benefitItem}>
      <div className={styles.subtitleContainer}>
        <h3 className={styles.subtitle}>
          {subtitle}
        </h3>
        {tooltip?.length && (
          <Tooltip text={tooltip} icon={<TooltipIcon />} />
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};