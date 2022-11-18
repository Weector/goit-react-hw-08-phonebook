import { Button } from 'components';
import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from 'components/ContactsForm/ContactsForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const fieldData = [
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

    dispatch(currentUser(user));
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
            <Button type="submit" text="LogIn" />
          </StyledForm>
        )}
      </Formik>
    </section>
  );
};

export default LoginForm;
