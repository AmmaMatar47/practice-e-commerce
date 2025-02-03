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
        <li className={styles.btnsContainer}>
          <Link to='login'>
            <Button btnClassName='secondaryBtn'>Login</Button>
          </Link>
          <Link to='signup'>
            <Button>Sign up</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
