import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { itemsFilter, ContactsItem } from '../index';
import {
  selectContactsSortedMemoized,
  selectFilter,
  selectToken,
} from 'redux/selectors';
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
  FormControl,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  Switch,
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
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons';

const ContactsList = () => {
  const [category, setCategory] = useState('name');
  const contacts = useSelector(selectContactsSortedMemoized(category));
  const filter = useSelector(selectFilter);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  const deleteItem = e => {
    dispatch(deleteContact(e.currentTarget.id));
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

  const sortByName = e => {
    const sortSwitch = e.target.checked;
    !sortSwitch ? setCategory('name') : setCategory('revers');
  };

  return (
    <section>
      {!contacts?.length ? (
        <Box
          border="1px solid lightblue"
          rounded="lg"
          w={['100%', '100%', '590px']}
          boxShadow="lg"
          textAlign="center"
          fontWeight="medium"
        >
          <Text>Your contacts list is empty!</Text>
        </Box>
      ) : (
        <TableContainer
          border="1px solid lightblue"
          rounded="lg"
          w={['100%', '100%', '595px']}
          boxShadow="lg"
          textTransform="capitalize"
        >
          <Table variant="striped" colorScheme="telegram">
            <TableCaption>Your contacts book</TableCaption>
            <Thead>
              <Tr>
                <Th display="flex" alignItems="center" p="2">
                  Name
                  <FormControl onChange={sortByName} w="10" ml="2">
                    <Switch id="sortContacts" />
                  </FormControl>
                  <ArrowUpIcon />
                  <ArrowDownIcon />
                </Th>
                <Th p="1">Phone</Th>
                <Th p="1" w="1">
                  Delete
                </Th>
                <Th p="2" w="1">
                  Edit
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemsFilter(contacts, filter).map(contact => (
                <Tr id={contact.id} key={contact.id}>
                  <ContactsItem name={contact.name} number={contact.number} />
                  <Td p="1">
                    <Button
                      type="button"
                      onClick={deleteItem}
                      id={contact.id}
                      variant="outline"
                      colorScheme="telegram"
                      boxShadow="md"
                      p="0"
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                  <Td p="1">
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          type="button"
                          variant="outline"
                          colorScheme="telegram"
                          boxShadow="md"
                          mr="1"
                          p="0"
                        >
                          <EditIcon />
                        </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent mr="180px" maxW="240px" mt="-1">
                          <Box
                            outline="1px solid lightblue"
                            p="1"
                            boxShadow="md"
                            rounded="md"
                            textAlign="center"
                            bgColor="inherit"
                          >
                            <PopoverCloseButton
                              mr="-3"
                              mt="-1"
                              color="lightblue"
                            />
                            <PopoverBody>
                              <form onSubmit={handleFormSumbit}>
                                <Stack spacing="3">
                                  <Editable
                                    defaultValue={contact.name}
                                    rounded="md"
                                    outline="1px solid lightblue"
                                  >
                                    <EditablePreview />
                                    <EditableInput name="name" />
                                  </Editable>
                                  <Editable
                                    defaultValue={contact.number}
                                    rounded="md"
                                    outline="1px solid lightblue"
                                  >
                                    <EditablePreview />
                                    <EditableInput name="number" />
                                  </Editable>

                                  <Button
                                    name="button"
                                    type="submit"
                                    colorScheme="telegram"
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
