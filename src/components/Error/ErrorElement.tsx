import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './ErrorElement.module.scss';
import SVG from 'react-inlinesvg';
import errorIcon from '../../assets/icons/error.svg';

const ErrorElement = () => {
  const error = useRouteError() as Error;

  if (isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className={styles.errorBox}>
      <SVG src={errorIcon} />
      <h3 className={styles.errorHeader}>An Error occurred !</h3>
    </div>
  );
};

export default ErrorElement;
