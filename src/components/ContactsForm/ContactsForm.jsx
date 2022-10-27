import { string, object } from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

import Button from 'components/Button/Button';

import css from './ContactsForm.module.css';

const ContactsFormik = ({ makeContactItem }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const fieldData = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'John Snow',
      label: 'Name',
    },
    {
      type: 'tel',
      name: 'number',
      placeholder: '+38(098)123-45-67',
      label: 'Number',
    },
  ];

  const handleSubmitForm = (value, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    makeContactItem(value);
    resetForm();
    setSubmitting(false);
  };

  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const nameRegExp =
    /^[a-zA-Zа-яА-Я-іїєьїʼ]+(([' -][a-zA-Zа-яА-Я-іїєьʼ ])?[a-zA-Zа-яА-Я-іїєьʼ]*)*$/;

  const validationSchemaForm = object().shape({
    name: string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
        nameRegExp,
        'Name may contain only letters, apostrophe, dash and spaces!'
      )
      .required('This is a required field!'),

    number: string()
      .matches(
        phoneRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses, start with + and min length 5 symbol'
      )
      .required('This is a required field!'),
  });

  const generateId = nanoid();

  return (
    <Formik
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validationSchema={validationSchemaForm}
    >
      {({ handleChange, handleBlur }) => (
        <Form className={css.form}>
          {fieldData.map(({ type, name, placeholder, label }) => (
            <div key={name} className={css.inputContainer}>
              <label htmlFor={generateId} className={css.label}>
                {label}
              </label>
              <Field
                className={css.input}
                id={generateId}
                type={type}
                name={name}
                placeholder={placeholder}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <ErrorMessage
                name={name}
                component={'div'}
                className={css.error}
              />
            </div>
          ))}
          <Button type="submit" text="Add Contact" />
        </Form>
      )}
    </Formik>
  );
};

export default ContactsFormik;
