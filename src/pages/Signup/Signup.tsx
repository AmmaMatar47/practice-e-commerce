import styles from './Signup.module.scss';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

const SignUp = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <Logo />
          <label className={styles.label}>
            User name
            <input type='text' placeholder='name...' className={styles.textInputFiled} required />
          </label>

          <label className={styles.label}>
            Email
            <input type='text' placeholder='email...' className={styles.textInputFiled} required />
          </label>

          <label className={styles.label}>
            Password
            <input
              type='password'
              placeholder='password...'
              className={styles.textInputFiled}
              required
            />
          </label>
          <Button>Sign in</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
