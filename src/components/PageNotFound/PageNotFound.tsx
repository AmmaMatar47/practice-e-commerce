import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Page not found !</h2>
      <p>
        go to
        <Link to='/' className={styles.link}>
          Home
        </Link>
        page
      </p>
    </div>
  );
};

export default PageNotFound;
