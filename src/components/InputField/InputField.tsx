import styles from './InputField.module.scss';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  disabled: boolean;
}

const InputField = ({
  name,
  label,
  type = 'text',
  placeholder,
  formik,
  disabled,
}: InputFieldProps) => {
  return (
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
};

export default InputField;
