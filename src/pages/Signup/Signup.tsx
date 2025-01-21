import styles from './Signup.module.scss';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (values: FormValues) => {
      console.log('submit', values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required').min(3),
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().required('Password is required').min(5),
    }),
  });

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Logo />
          <div className={styles.field}>
            <label className={styles.label}>Username</label>
            <input
              name='username'
              placeholder='name'
              className={styles.textInputFiled}
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username ? (
              <span className={styles.errorsText}>{formik.errors.username}</span>
            ) : null}
          </div>


        <div className={styles.field}>
          <label className={styles.label}>
            Email
            </label>
            <input
              name='email'
              placeholder='example@gmail.com'
              className={styles.textInputFiled}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <span className={styles.errorsText}>{formik.errors.email}</span>
            ) : null}
        </div>
      
        <div className={styles.field}>
          <label className={styles.label}>
            Password
            </label>
            <input
              name='password'
              placeholder='***********'
              className={styles.textInputFiled}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <span className={styles.errorsText}>{formik.errors.password}</span>
            ) : null}
         </div>
          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
