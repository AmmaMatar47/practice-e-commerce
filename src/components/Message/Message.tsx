import styles from './Message.module.scss';

import Overlay from '../Overlay/Overlay';

const Message = ({
  children,
  icon,
  onClose,
}: {
  children: string | string[] | JSX.Element;
  icon?: JSX.Element;
  onClose: () => void;
}) => {
  return (
    <Overlay closeOverlay={onClose}>
      <div className={styles.messageContainer}>
        {icon}
        <p className={styles.messageText}>{children}</p>
      </div>
    </Overlay>
  );
};

export default Message;
