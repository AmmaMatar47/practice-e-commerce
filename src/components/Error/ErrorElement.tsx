import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router-dom';
import styles from './ErrorElement.module.scss';

const ErrorElement = () => {
  const error = useRouteError() as Error;
  const loaderError = useLoaderData();

  if (isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className={styles.errorBox}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.2}
        stroke='orangered'
        width='108px'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z'
        />
      </svg>
      <h3 className={styles.errorHeader}>An Error occurred !</h3>
      <p className={styles.errorText}>{loaderError.message}</p>
    </div>
  );
};

export default ErrorElement;
