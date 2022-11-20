import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/contactsOperations';
import { selectContactsItem } from 'redux/selectors';
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

const ContactsForm = () => {
  const contacts = useSelector(selectContactsItem);
  const dispatch = useDispatch();
  const toast = useToast();

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (!!sameNameAlert) {
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
                pattern="^[a-zA-Zа-яА-Я-іїєьїʼ]+(([' -][a-zA-Zа-яА-Я-іїєьʼ ])?[a-zA-Zа-яА-Я-іїєьʼ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces"
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
                type="tel"
                placeholder="+38(098)765-43-21"
                aria-label="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
    </Box>
  );
};

export default ContactsForm;
