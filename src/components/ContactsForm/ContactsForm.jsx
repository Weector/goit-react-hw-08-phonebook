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
} from '@chakra-ui/react';
import { InfoIcon, PhoneIcon } from '@chakra-ui/icons';

const ContactsForm = () => {
  const contacts = useSelector(selectContactsItem);
  const dispatch = useDispatch();

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (!!sameNameAlert) {
      return;
    }
    dispatch(addContact(item));
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
                outline="1px solid lightblue"
                colorScheme="telegram"
                name="name"
                type="name"
                placeholder="Tony Stark"
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
                outline="1px solid lightblue"
                colorScheme="telegram"
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
            colorScheme="telegram"
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
