import Button from '../Button/Button';
import styles from './Overlay.module.scss';

interface OverlayProps {
  children: JSX.Element[] | JSX.Element;
  handleOnClick?: () => void;
  closeBtn: boolean;
}

const Overlay = ({ children, handleOnClick, closeBtn }: OverlayProps) => {
  return (
    <>
      {closeBtn ? (
        <Button btnClassName='closeBtn' onClick={handleOnClick}>
          &#10005;
        </Button>
      ) : null}
      <div className={styles.overlayChild}>{children}</div>
      <div className={styles.overlay} onClick={handleOnClick}></div>
    </>
  );
};

export default Overlay;
