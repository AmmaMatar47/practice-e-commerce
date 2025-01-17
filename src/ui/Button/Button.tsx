import styles from './Button.module.scss';

const Button = ({ children }: { children: string }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
