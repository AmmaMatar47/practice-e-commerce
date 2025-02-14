import styles from './Signup.module.scss';

import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import * as Yup from 'yup';
import { Link, Navigate, useNavigate } from 'react-router';
import { createUser, resetStatus } from '../../redux/reducers/user.reducer';

import { PostUser } from '../../types/user';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import InputField from '../../components/InputField/InputField';
import { useEffect } from 'react';

const formInitialValues = {
  name: 'Nicolas',
  email: 'nico@gmail.com',
  password: '12345',
  avatar:
    'https://static.vecteezy.com/system/resources/previews/001/840/618/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
};

// Validation rules for sign-up form input fields
const yupSignupValidation = Yup.object({
  name: Yup.string()
    .required('Username is required')
    .min(3)
    .matches(/^[A-Za-z]+$/, 'Name can only contain english letters.'),
  email: Yup.string().required('Email is required').email('Invalid email address'),
  password: Yup.string().required('Password is required').min(5),
});

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, status, error } = useAppSelector(store => store.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: values => handleSubmit(values),
    validationSchema: yupSignupValidation,
  });

  const handleSubmit = (values: PostUser) => {
    dispatch(createUser(values));
    if (isLoggedIn) {
      dispatch(resetStatus());
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(resetStatus());
  }, []);

  return isLoggedIn ? (
    <Navigate to='/' replace={true} />
  ) : (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Logo />
        <InputField
          type='text'
          name='name'
          label='Username'
          placeholder='name'
          formik={formik}
          disabled={status === 'pending'}
        />
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

        {error && <span className={styles.error}>{error}</span>}

        <span className={styles.loginText}>
          Already had an account? <Link to='/login'>login</Link>
        </span>
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
