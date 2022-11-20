import { validationSchema } from './validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import toastAlert from 'components/Notification/sameNameToastAlert';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { InfoIcon, PhoneIcon } from '@chakra-ui/icons';
import { Formik } from 'formik';

const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (!!sameNameAlert) {
      toastAlert(item.name);
      return;
    }
    dispatch(addContact(item));
    toast({
      title: 'Contact created.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    const contact = {
      name: name.value,
      number: number.value,
    };
    makeContactItem(contact);
    e.target.reset();
  };

  return (
    <Box>
      <Formik validationSchema={validationSchema}>
        <form action="submit" onSubmit={handleSubmitForm}>
          <Stack spacing="5">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  bgColor="white"
                  name="name"
                  type="name"
                  placeholder="Sirius Black"
                  aria-label="Name"
                />
              </InputGroup>
              <FormErrorMessage validationSchema />
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<PhoneIcon />} />
                <Input
                  bgColor="white"
                  name="number"
                  type="number"
                  placeholder="+38(098)765-43-21"
                  aria-label="Number"
                />
              </InputGroup>
              <FormErrorMessage>number is required.</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              variant="solid"
              colorScheme="facebook"
              boxShadow="md"
            >
              Add contact
            </Button>
            <Divider />
          </Stack>
        </form>
      </Formik>
    </Box>
  );
};

export default ContactsForm;
