import { Button } from 'components';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/authOperations';

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './authForm.styled';

const AuthForm = () => {
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
      type: 'mail',
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
      <h1>Signup</h1>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialValues}
        // validationSchema={validationSchemaForm}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            {fieldData.map(({ type, name, placeholder, label }) => (
              <StyledInputContainer key={name}>
                <StyledLabel>{label}</StyledLabel>
                <StyledInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <StyledError name={name} component={'div'} />
              </StyledInputContainer>
            ))}
            <Button type="submit" text="Register" />
          </StyledForm>
        )}
      </Formik>
    </section>
  );
};

export default AuthForm;
