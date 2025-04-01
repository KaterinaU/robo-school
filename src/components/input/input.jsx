import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, label, register, error, ...rest }) => {
  const getInputClassName = () => {
    if (error) {
      return `${styles.input} ${styles.error}`;
    }
    return styles.input;
  };

  return (
    <div className={styles.inputWrapper}>
      {Boolean(label) && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={getInputClassName()}
        {...register}
        {...rest}
      />
      {Boolean(error) && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
