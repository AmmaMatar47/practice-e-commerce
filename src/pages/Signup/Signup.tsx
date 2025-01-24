import styles from './Signup.module.scss';

import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';

import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router';
import { createUser, resetStatus } from '../../redux/reducers/user.reducer';

import { PostUser } from '../../types/user';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Message from '../../components/Message/Message';
import { useEffect } from 'react';

interface FormikInputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  formik: any;
  disabled: boolean;
}

const FormikInputField = ({
  name,
  label,
  type = 'text',
  placeholder,
  formik,
  disabled,
}: FormikInputFieldProps) => (
  <div className={styles.field}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.textInputFiled}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id={name}
      disabled={disabled}
    />
    {formik.errors[name] && formik.touched[name] ? (
      <span className={styles.errorsText}>{formik.errors[name]}</span>
    ) : null}
  </div>
);

const formInitialValues = {
  name: '',
  email: '',
  password: '',
  avatar: 'https://cdn.pfps.gg/pfps/5533-roronoa-zoro.png',
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
  const { user, status, error } = useAppSelector(store => store.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: values => handleSubmit(values),
    validationSchema: yupSignupValidation,
  });

  const handleSubmit = (values: PostUser) => {
    dispatch(createUser({ params: 'users', body: values }));
  };

  const handleCloseErrorMessage = () => {
    dispatch(resetStatus());
  };

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(resetStatus());
      navigate('/');
    }
  }, [status, dispatch, navigate]);

  return user === null ? (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Link to='/'>
          <Logo />
        </Link>

        <FormikInputField
          type='text'
          name='name'
          label='Username'
          placeholder='name'
          formik={formik}
          disabled={status === 'pending'}
        />

        <FormikInputField
          type='text'
          name='email'
          label='Email'
          placeholder='example@gmail.com'
          formik={formik}
          disabled={status === 'pending'}
        />

        <FormikInputField
          type='password'
          name='password'
          label='Password'
          placeholder='***********'
          formik={formik}
          disabled={status === 'pending'}
        />

        {status === 'failed' && error && (
          <Message
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.2}
                stroke='orangered'
                className={styles.errorIcon}
                width='108px'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z'
                />
              </svg>
            }
            onClose={handleCloseErrorMessage}
          >
            {error}
          </Message>
        )}

        <span className={styles.loginText}>
          Already had existing account? <Link to='/login'>login</Link>
        </span>
        <Button type='submit'>Sign in</Button>
      </form>
    </div>
  ) : (
    <Message onClose={() => navigate(-1)}>You are already signed in.</Message>
  );
};

export default SignUp;
