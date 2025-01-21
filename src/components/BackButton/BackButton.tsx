import styles from './BackButton.module.scss';

import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleClick} className={styles.backBtn}>
      Back
    </button>
  );
};

export default BackButton;
