import { Button } from 'components';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/authOperations';
import { Form } from 'formik';
import InputForm from 'components/InputForm/InputForm';

// import {
//   StyledError,
//   StyledForm,
//   StyledInput,
//   StyledInputContainer,
//   StyledLabel,
// } from './authForm.styled';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const fieldData = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'User',
      label: 'User name',
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'www@www.ww',
      label: 'Email',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: '*******',
      label: 'Password',
    },
  ];

  const handleSubmitForm = (user, { setSubmitting, resetForm }) => {
    console.log(user);
    setSubmitting(true);

    dispatch(signUpUser(user));
    resetForm();
    setSubmitting(false);
  };
  return (
    <section>
      <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
        {({ handleChange, handleBlur }) => (
          <Form>
            <InputForm
              fieldData={fieldData}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Button type="submit" text="Register" />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForm;
