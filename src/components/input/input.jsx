import styles from './Input.module.scss'; // Подключаем SCSS модуль

export const Input = ({
                        id,
                        type = 'text',
                        placeholder,
                        register,
                        error,
                        label,
                        ...rest
                      }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...(register && register(id))} // Интеграция с react-hook-form
        {...rest}
      />

      {error && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
};