import { useDispatch, useSelector } from 'react-redux';

import { itemsFilter, ContactsItem } from '../index';
import { selectContactsItem, selectFilter, selectToken } from 'redux/selectors';

import {
  deleteContact,
  updateContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactsList = () => {
  const contacts = useSelector(selectContactsItem);
  const filter = useSelector(selectFilter);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  const deleteItem = e => {
    console.log('delete', e.target.id);
    dispatch(deleteContact(e.target.id));
  };

  const handleFormSumbit = e => {
    e.preventDefault();

    const { name, number, button } = e.currentTarget.elements;

    const contact = {
      name: name.defaultValue,
      number: number.defaultValue,
      id: button.id,
    };
    const contactId = e.currentTarget.elements.button.id;

    console.log('object :>> ', contact);
    console.log('object :>> ', e.currentTarget.elements.button.id);
    dispatch(updateContact(contact, contactId));

    e.target.reset();
  };

  return (
    <section>
      {!contacts?.length ? (
        <Box
          rounded="lg"
          border="1px"
          borderColor="gray.100"
          w="2xl"
          boxShadow="lg"
          color="facebook.700"
          textAlign="center"
          fontWeight="medium"
        >
          <Text>Your contacts list is empty!</Text>
        </Box>
      ) : (
        <TableContainer
          rounded="lg"
          border="1px"
          borderColor="gray.100"
          w="2xl"
          boxShadow="lg"
          color="facebook.700"
          textTransform="capitalize"
        >
          <Table variant="striped" colorScheme="gray">
            <TableCaption>Your contacts book</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone number</Th>
                <Th>Delete</Th>
                <Th>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemsFilter(contacts, filter).map(contact => (
                <Tr id={contact.id} key={contact.id}>
                  <ContactsItem name={contact.name} number={contact.number} />
                  <Td>
                    <Button
                      type="button"
                      onClick={deleteItem}
                      id={contact.id}
                      variant="outline"
                      colorScheme="facebook"
                      boxShadow="md"
                      pl="22px"
                      leftIcon={<DeleteIcon />}
                    />
                  </Td>
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                        <Button>Trigger</Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverCloseButton />
                          <PopoverBody>
                            <form onSubmit={handleFormSumbit}>
                              <Editable defaultValue={contact.name}>
                                <EditablePreview />
                                <EditableInput name="name" />
                              </Editable>
                              <Editable defaultValue={contact.number}>
                                <EditablePreview />
                                <EditableInput name="number" />
                              </Editable>
                              <Button
                                name="button"
                                type="submit"
                                colorScheme="facebook"
                                id={contact.id}
                              >
                                Edit
                              </Button>
                            </form>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </section>
  );
};

export default ContactsList;
