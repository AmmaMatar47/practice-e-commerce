import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return <Button onClick={handleClick}>Back</Button>;
};

export default BackButton;
