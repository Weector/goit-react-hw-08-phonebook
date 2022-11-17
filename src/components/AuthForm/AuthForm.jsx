import { Button } from 'components';
import { Formik } from 'formik';

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './authForm.styled';

function AuthForm() {
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

  const handleSubmitForm = (value, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const user = value;
    console.log(user);
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
}

export default AuthForm;
