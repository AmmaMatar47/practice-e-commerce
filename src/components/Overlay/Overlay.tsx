import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Overlay.module.scss';

interface OverlayProps {
  children: JSX.Element[] | JSX.Element;
  closeOverlay: () => void;
}

const Overlay = ({ children, closeOverlay }: OverlayProps) => {
  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClick = () => {
    // Unlock scroll on unmount
    document.body.style.overflow = 'auto';
    closeOverlay();
  };

  return (
    <>
      <Button btnClassName='closeBtn' onClick={handleClick}>
        &#10005;
      </Button>
      <div className={styles.overlayChild}>{children}</div>
      <div className={styles.overlay} onClick={handleClick}></div>
    </>
  );
};

export default Overlay;
