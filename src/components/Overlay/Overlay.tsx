import Button from '../Button/Button';
import styles from './Overlay.module.scss';

interface OverlayProps {
  children: JSX.Element[] | JSX.Element;
  closeOverlay: () => void;
}

const Overlay = ({ children, closeOverlay }: OverlayProps) => {
  const handleClick = () => {
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
