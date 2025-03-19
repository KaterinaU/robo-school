import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';

import teachersData from '../../../../../api/teachers.json';

import styles from './teachers-item.module.scss';

export const Teachers = () => {

  return (
    <section className={styles.teachers}>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: `.${styles.navButtonNext}`,
          prevEl: `.${styles.navButtonPrev}`,
        }}
        scrollbar={{ draggable: true, dragSize: 260}}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {teachersData.map((teacher) => (
          <SwiperSlide key={teacher.id}>
            <div className={styles.teacherCard}>
              <img
                src={teachersImages[teacher.imageName]}
                alt={teacher.name}
                className={styles.teacherPhoto}
              />
              {/* Имя и описание */}
              <div className={styles.discr}>
              <h3 className={styles.teacherName}>{teacher.name}</h3>
              <p className={styles.teacherDesc}>{teacher.desc}</p>
              <Button variant='text'>Подробнее</Button>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.navButton} ${styles.navButtonNext}`} />
      <div className={`${styles.navButton} ${styles.navButtonPrev}`} />
    </section>
  );
};