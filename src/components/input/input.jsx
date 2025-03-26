import styles from './input.module.scss';

export const Input = ({ id, type = 'text', placeholder, error, label, inputRef, ...rest }) => {
  const getInputClassName = (baseClass, errorClass, error) => {
    if (error) {
      return `${baseClass} ${errorClass}`;
    }
    return baseClass;
  };

  const inputClassName = getInputClassName(styles.input, styles.error, error);

  return (
    <div className={styles.inputWrapper}>
      {Boolean(label) && <label className={styles.label}>{label}</label>}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        ref={inputRef}
        {...rest}
      />

      {Boolean(error) && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
