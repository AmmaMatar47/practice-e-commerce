import { Link } from 'react-router';
import styles from './Nav.module.scss';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.listContainer}>
        <li>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
        <li>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
