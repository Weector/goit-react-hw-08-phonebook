import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from 'redux/auth/authOperations';

import { EmailIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';
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
  Spinner,
} from '@chakra-ui/react';
import { selectLoading } from 'redux/selectors';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleSubmitForm = e => {
    e.preventDefault();
    const { name, password, email } = e.currentTarget.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(signUpUser(user));
    e.target.reset();
  };

  return (
    <Box
      w="400px"
      p="6"
      boxShadow="2xl"
      rounded="md"
      mx="auto"
      mt="20"
      textAlign="center"
      border="1px solid lightblue"
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="telegram.100"
          colorScheme="telegram"
          size="xl"
          textAlign="center"
        />
      ) : (
        <form action="submit" onSubmit={handleSubmitForm}>
          <Stack spacing="3">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  outline="1px solid lightblue"
                  name="name"
                  type="name"
                  placeholder="User Name"
                  aria-label="Name"
                />
              </InputGroup>
            </FormControl>
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
              Sign Up
            </Button>
            <FormControl>
              <FormHelperText textAlign="center">
                Create new account and enjoy!
              </FormHelperText>
            </FormControl>
          </Stack>
        </form>
      )}
    </Box>
  );
};
export default SignUpForm;
