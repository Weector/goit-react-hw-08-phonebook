import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/authOperations';
import { selectLoading } from 'redux/selectors';

import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  FormHelperText,
  Box,
  Text,
  Spinner,
} from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const handleSubmitForm = e => {
    e.preventDefault();

    const { password, email } = e.currentTarget.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(currentUser(user));

    e.target.reset();
  };

  return (
    <Box
      border="1px solid lightblue"
      w="400px"
      p="6"
      boxShadow="2xl"
      rounded="md"
      mx="auto"
      mt="20"
      textAlign="center"
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          colorScheme="telegram"
          size="xl"
          textAlign="center"
        />
      ) : (
        <form action="submit" onSubmit={handleSubmitForm}>
          <Stack spacing="3">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  outline="1px solid lightblue"
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  outline="1px solid lightblue"
                  name="password"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
              </InputGroup>
            </FormControl>
            <Divider borderColor="telegram.100" />
            <Button
              type="submit"
              variant="solid"
              colorScheme="telegram"
              boxShadow="md"
            >
              Login
            </Button>
            <FormControl>
              <FormHelperText textAlign="center">
                Login to see your phonebook, or
                <Link style={{ color: 'darkblue' }} to="/register">
                  <Text color="telegram.500" letterSpacing="wide">
                    click here to Sign Up!
                  </Text>
                </Link>
              </FormHelperText>
            </FormControl>
          </Stack>
        </form>
      )}
    </Box>
  );
};

export default LoginForm;
