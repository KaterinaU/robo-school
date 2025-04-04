import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Input } from '@/components/input';

import { schema } from './helpers/schema';

import styles from './main-form.module.scss';

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    return data;
  };
  return (
    <section className={styles.course}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Запишитесь на курс со скидкой 10%</h2>
            <p className={styles.description}>Акция действительна до 10 марта 2022 года</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              type="text"
              placeholder="Имя"
              register={register('name')}
              error={errors.name}
            />
            <Input
              id="phone"
              type="tel"
              placeholder="Телефон"
              register={register('phone')}
              error={errors.phone}
            />
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              register={register('email')}
              error={errors.email}
            />
            <Button variant="secondary" additionalClassname={styles.button}>
              Оформить заявку
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
