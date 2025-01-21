import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  btnClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ children, btnClassName, onClick, disabled, type }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${btnClassName === undefined ? '' : styles[btnClassName]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
