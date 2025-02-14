import styles from './Message.module.scss';

import Overlay from '../Overlay/Overlay';
import { useAppDispatch } from '../../hooks/storeHooks';
import { closeToast } from '../../redux/reducers/global.reducer';

const Message = ({
  children,
  icon,
  onClose,
}: {
  children: string | string[] | JSX.Element;
  icon?: JSX.Element;
  onClose: () => void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Overlay
      closeOverlay={() => {
        onClose();
        dispatch(closeToast());
      }}
    >
      <div className={styles.messageContainer}>
        {icon}
        <p className={styles.messageText}>{children}</p>
      </div>
    </Overlay>
  );
};

export default Message;
