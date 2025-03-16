import styles from './Input.module.scss';

export const Input = ({ id, type = 'text', placeholder, register, error, label, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...(register && register(id))}
        {...rest}
      />

      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
