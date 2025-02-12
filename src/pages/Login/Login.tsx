import styles from './Login.module.scss';

import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import * as Yup from 'yup';
import { Link, Navigate } from 'react-router';
import { login } from '../../redux/reducers/user.reducer';

import { LoginPostValues } from '../../types/user';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import InputField from '../../components/InputField/InputField';

const formInitialValues = {
  email: 'nico@gmail.com',
  password: '12345',
};

// Validation rules for sign-up form input fields
const yupSignupValidation = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string().required('Password is required').min(5),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, status } = useAppSelector(store => store.user);

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: values => handleSubmit(values),
    validationSchema: yupSignupValidation,
  });

  const handleSubmit = async (values: LoginPostValues) => {
    await dispatch(login(values));
  };

  return isLoggedIn ? (
    <Navigate to='/' replace={true} />
  ) : (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Logo />

        <InputField
          type='text'
          name='email'
          label='Email'
          placeholder='example@gmail.com'
          formik={formik}
          disabled={status === 'pending'}
        />
        <InputField
          type='password'
          name='password'
          label='Password'
          placeholder='***********'
          formik={formik}
          disabled={status === 'pending'}
        />

        <span className={styles.loginText}>
          create a new account <Link to='/signup'>Sign up</Link>
        </span>
        <Button type='submit'>Login</Button>
      </form>
    </div>
  );
};

export default Login;
