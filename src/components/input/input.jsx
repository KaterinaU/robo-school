import { forwardRef } from 'react';

import styles from './input.module.scss';

export const Input = forwardRef(
  ({ id, type = 'text', placeholder, error, label, ...rest }, ref) => {
    const getInputClassName = (baseClass, errorClass, error) => {
      return error ? `${baseClass} ${errorClass}` : baseClass;
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
          ref={ref}
          {...rest}
        />

        {Boolean(error) && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
Input.displayName = 'Input';
