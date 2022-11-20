import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/auth/authOperations';

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
import { selectLoading } from 'redux/selectors';

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
      bg="gray.100"
      w="400px"
      p="6"
      boxShadow="md"
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
          color="facebook.700"
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
                  bgColor="white"
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
                  bgColor="white"
                  name="password"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
              </InputGroup>
            </FormControl>
            <Divider borderColor="gray.300" />
            <Button
              type="submit"
              variant="solid"
              colorScheme="facebook"
              boxShadow="md"
            >
              Login
            </Button>
            <FormControl>
              <FormHelperText textAlign="center">
                Login to see your phonebook, or
                <Link style={{ color: 'darkblue' }} to="/register">
                  <Text color="facebook.500" letterSpacing="wide">
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
