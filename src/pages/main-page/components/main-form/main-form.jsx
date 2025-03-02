import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';

import styles from './main-form.module.scss';

export const MainForm = () => {
  return (
    <section className={styles.course}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Запишитесь на курс со скидкой 10%</h2>
            <p className={styles.description}>Акция действительна до 10 марта 2022 года</p>
          </div>
          <div className={styles.form}>
            <Input
              id="name"
              type="name"
              placeholder="Имя"
              /* register={register}
               error={errors.email}*/
            />
            <Input
              id="phone"
              type="tel"
              placeholder="Телефон"
              /* register={register}
               error={errors.email}*/
            />
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              /* register={register}
               error={errors.email}*/
            />
            <Button variant="secondary">
              Оформить заявку
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
