import { useEffect, useRef } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import teachersData from '@/api/teachers.json';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { useWindowSize } from '@/hooks/useWindowSize';

import { TeacherItem } from './teachers/teacher-item';

import styles from './teachers.module.scss';

export const Teachers = () => {
  const swiperRef = useRef(null);
  const scrollbarRef = useRef(null);

  const { isMobile } = useWindowSize();

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
  };

  const handleSlide = (direction) => {
    if (!swiperRef.current) return;
    if (direction === 'prev') swiperRef.current.slidePrev();
    if (direction === 'next') swiperRef.current.slideNext();
  };

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      swiperRef.current.update();
    }
  }, [isMobile]);

  return (
    <div className={styles.teachersWrapper}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={isMobile ? 20 : 40}
        slidesPerView={isMobile ? 'auto' : 3}
        onBeforeInit={handleSwiperInit}
        scrollbar={{
          el: scrollbarRef.current,
          draggable: true,
        }}
      >
        {teachersData.map((teacher) => (
          <SwiperSlide key={teacher.id} className={styles.slide}>
            <TeacherItem teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controls}>
        <div ref={scrollbarRef} className={styles.scrollbar}></div>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={() => handleSlide('prev')}>
            <ArrowLeftIcon />
          </button>
          <button className={styles.arrow} onClick={() => handleSlide('next')}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
