import styles from './Button.module.scss';

import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  children: string | JSX.Element;
  btnClassName?:
    | 'primaryBtn'
    | 'secondaryBtn'
    | 'closeBtn'
    | 'paginationRightBtn'
    | 'paginationLeftBtn';
  onClick?: () => void;
  backBtn?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  btnClassName,
  onClick,
  disabled,
  type,
  backBtn = false,
}: ButtonProps) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      className={`${styles.primaryBtn} ${btnClassName === undefined ? '' : styles[btnClassName]}`}
      onClick={backBtn ? handleGoBack : onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
