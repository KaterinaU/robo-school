import { useSwiper } from 'swiper/react';

import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';

import styles from './swiper-nav-buttons.module.scss';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.navigationWrapper}>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={() => swiper.slideNext()}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};
