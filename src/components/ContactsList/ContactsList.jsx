import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { itemsFilter, ContactsItem } from '../index';
import { selectContactsItem, selectFilter, selectToken } from 'redux/selectors';
import {
  deleteContact,
  updateContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

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
  Stack,
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
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ContactsList = () => {
  const contacts = useSelector(selectContactsItem);
  const filter = useSelector(selectFilter);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  const deleteItem = e => {
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

    dispatch(updateContact(contact));

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
                <Th pl="8">Delete</Th>
                <Th pl="10">Edit</Th>
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
                        <Button
                          type="button"
                          variant="outline"
                          colorScheme="facebook"
                          boxShadow="md"
                          pl="22px"
                          mr="1"
                          leftIcon={<EditIcon />}
                        />
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent
                          ml="460px"
                          maxW="210px"
                          mt="-55"
                          mr="30px"
                        >
                          <Box
                            bg="gray.100"
                            p="1"
                            boxShadow="md"
                            rounded="md"
                            textAlign="center"
                          >
                            <PopoverCloseButton
                              mr="-3"
                              mt="-1"
                              color="facebook.700"
                            />
                            <PopoverBody>
                              <form onSubmit={handleFormSumbit}>
                                <Stack spacing="3">
                                  <Editable
                                    defaultValue={contact.name}
                                    bgColor="white"
                                    rounded="md"
                                    color="facebook.700"
                                  >
                                    <EditablePreview />
                                    <EditableInput name="name" />
                                  </Editable>
                                  <Editable
                                    defaultValue={contact.number}
                                    bgColor="white"
                                    rounded="md"
                                    color="facebook.700"
                                  >
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
                                </Stack>
                              </form>
                            </PopoverBody>
                          </Box>
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
