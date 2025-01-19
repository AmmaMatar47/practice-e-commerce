import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  btnClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, btnClassName, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${btnClassName === undefined ? '' : styles[btnClassName]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
