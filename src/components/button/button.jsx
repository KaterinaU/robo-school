export const Button = ({ children, variant, additionalClassname, ...rest }) => {
  const createButtonVariant = () => {
    switch (true) {
      case variant === 'text':
        return `${styles.text}`;
      case variant === 'dark':
        return `${styles.button} ${styles.dark}`;
      default:
        return styles.button;
    }
  };

  const createButtonClassname = () => {
    const baseClassname = `${createButtonVariant()}`;

    if (additionalClassname) {
      return `${baseClassname} ${additionalClassname}`;
    }

    return baseClassname;
  };

  return (
    <button className={createButtonClassname()} {...rest}>
      {children}
    </button>
  );
};