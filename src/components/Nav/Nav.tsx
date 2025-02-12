import { Link, useNavigate } from 'react-router';
import styles from './Nav.module.scss';

import { useAppSelector } from '../../hooks/storeHooks';
import { useDispatch } from 'react-redux';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { logout } from '../../redux/reducers/user.reducer';

const Nav = () => {
  const { user, status } = useAppSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav>
      <ul className={styles.listContainer}>
        <li>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
        {status === 'pending' ? (
          <div className={styles.loadingAvatar} />
        ) : user === null ? (
          <li className={styles.btnsContainer}>
            <Link to='login'>
              <Button btnClassName='secondaryBtn'>Login</Button>
            </Link>
            <Link to='signup'>
              <Button>Sign up</Button>
            </Link>
          </li>
        ) : (
          <div className={styles.userInfoContainer}>
            <p>{user.name}</p>
            <img
              src={user?.avatar}
              alt='Profile picture.'
              className={styles.profilePicture}
              onClick={() => {
                localStorage.removeItem('credentials');
                dispatch(logout());
                navigate('signup');
              }}
            />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
