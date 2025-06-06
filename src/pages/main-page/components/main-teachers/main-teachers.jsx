import { Container } from '@/components/container';

import { Teachers } from './components/teachers-item/index';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  return (
    <section className={styles.teachers}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Профессиональные тренеры</h2>
          <Teachers />
        </div>
      </Container>
    </section>
  );
};
