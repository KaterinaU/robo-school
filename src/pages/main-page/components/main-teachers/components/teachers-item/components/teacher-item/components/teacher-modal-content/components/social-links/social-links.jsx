import styles from './social-links.module.scss';

export const SocialLinks = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className={styles.socialLinks}>
      {links.map(({ href, imagePath: IconComponent }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          {IconComponent ? <IconComponent /> : null}
        </a>
      ))}
    </div>
  );
};
