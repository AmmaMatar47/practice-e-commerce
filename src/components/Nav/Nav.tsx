import { Link } from 'react-router';
// import styles from './Nav.module.scss'

import Logo from '../../ui/Logo/Logo';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
