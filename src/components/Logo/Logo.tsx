import styles from './Logo.module.scss';

const Logo = ({ logoSize = 3.2 }: { logoSize?: number }) => {
  return (
    <span className={styles.logo} style={{ fontSize: `${logoSize}rem` }}>
      SKIZZi
    </span>
  );
};

export default Logo;
