import {
  Button,
  Divider,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Icon,
  FormHelperText,
} from '@chakra-ui/react';

// import InputForm from 'components/InputForm/InputForm';
// import {
//   StyledError,
//   StyledForm,
//   StyledInput,
//   StyledInputContainer,
//   StyledLabel,
// } from 'components/ContactsForm/ContactsForm.styled';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { currentUser } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  // const initialValues = {
  //   email: '',
  //   password: '',
  // };

  // const fieldData = [
  //   {
  //     type: 'email',
  //     name: 'email',
  //     placeholder: 'www@www.ww',
  //     label: 'Email',
  //   },
  //   {
  //     type: 'password',
  //     name: 'password',
  //     placeholder: '*******',
  //     label: 'Password',
  //   },
  // ];

  // const handleSubmitForm = (value, { setSubmitting, resetForm }) => {
  //   console.log(value);
  //   setSubmitting(true);
  //   dispatch(currentUser(value));
  //   resetForm(value);
  //   setSubmitting(false);
  // };
  const handleSubmitForm = e => {
    e.preventDefault();
    const { password, email } = e.currentTarget.elements;
    console.log('email :>> ', email.value);
    console.log('password :>> ', password.value);
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(currentUser(user));
    e.target.reset();
  };
  return (
    <form action="submit" onSubmit={handleSubmitForm}>
      <Stack spacing="3">
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" />} />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>
        <Divider />
        <Button
          type="submit"
          variant="solid"
          colorScheme="facebook"
          boxShadow="md"
          // _hover={{ boxShadow: 'lg' }}
        >
          Log in
        </Button>
        <FormControl>
          <FormHelperText textAlign="center">
            Log In to see your phonebook, or
            <Link style={{ color: 'darkblue' }} to="/register">
              {' '}
              click here to create new account!
            </Link>
          </FormHelperText>
        </FormControl>
      </Stack>
    </form>
    // <Box boxSize="sm">
    //   <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
    //     {({ handleChange, handleBlur }) => (
    //       <Form>
    //         <InputForm
    //           fieldData={fieldData}
    //           handleChange={handleChange}
    //           handleBlur={handleBlur}
    //         />
    //         <Button
    //           type="submit"
    //           variant="solid"
    //           colorScheme="facebook"
    //           boxShadow="lg"
    //         >
    //           Log in
    //         </Button>
    //       </Form>
    //     )}
    //   </Formik>
    // </Box>
  );
};

export default LoginForm;
