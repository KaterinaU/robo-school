import * as yup from 'yup';

const nameRegex = /^[А-Яа-яЁё\s-]+$/;
const phoneRegex = /^\+7\d{10}$/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа')
    .matches(nameRegex, 'Только русские буквы'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(phoneRegex, 'Неверный формат телефона'),
  email: yup.string().required('Email обязателен').email('Неверный формат email'),
});
