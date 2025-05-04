import { useEffect, useRef } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import teachersData from '@/api/teachers.json';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/index';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';

import { TeacherItem } from './components/teacher-item/teacher-item';

import styles from './teachers.module.scss';

export const Teachers = () => {
  const swiperRef = useRef(null);
  const scrollbarRef = useRef(null);

  const { isMobile } = useWindowSize();

  const initSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const createSlideChangeHandler = (direction) => () => {
    if (!swiperRef.current) {
      return;
    }
    if (direction === 'prev') {
      swiperRef.current.slidePrev();
    }
    if (direction === 'next') {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      const swiper = swiperRef.current;
      swiper.params.scrollbar.el = scrollbarRef.current;

      if (!swiper.scrollbar.el) {
        swiper.scrollbar.init();
      }

      swiper.scrollbar.updateSize();
    }
  }, []);

  return (
    <Container>
      <div className={styles.teachersWrapper}>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={isMobile ? 20 : 40}
          slidesPerView={isMobile ? 'auto' : 3}
          onBeforeInit={initSwiper}
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
            <button className={styles.arrow} onClick={createSlideChangeHandler('prev')}>
              <ArrowLeftIcon />
            </button>
            <button className={styles.arrow} onClick={createSlideChangeHandler('next')}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
