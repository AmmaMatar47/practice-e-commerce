import { Link, useNavigate } from 'react-router';
import styles from './Nav.module.scss';

import { useAppSelector } from '../../hooks/storeHooks';
import { useDispatch } from 'react-redux';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { logout } from '../../redux/reducers/user.reducer';
import { useState } from 'react';

const Nav = () => {
  const { user, status } = useAppSelector(store => store.user);
  const [isUserOptions, setIsUserOptions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    localStorage.removeItem('credentials');
    dispatch(logout());
    navigate('login');
  };

  return (
    <nav>
      <ul className={styles.listContainer}>
        <li>
          <Link to='/'>
            <Logo logoSize={4.2} />
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
            <img src={user?.avatar} alt='Profile picture.' className={styles.profilePicture} />
            <button
              className={styles.openOptionsBtn}
              onClick={() => {
                setIsUserOptions(state => !state);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#e8eaed'
                className={`${styles.openOptionsIcons} ${
                  isUserOptions ? styles.userOptionsActive : ''
                }`}
              >
                <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
              </svg>
            </button>

            {isUserOptions ? (
              <ul className={styles.userOptionsList}>
                <li className={styles.userOptionsItems}>
                  <button className={styles.userOptionsBtn} onClick={signOut}>
                    <p>Sign out</p>
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
