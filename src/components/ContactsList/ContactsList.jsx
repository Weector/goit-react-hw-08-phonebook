import { useDispatch, useSelector } from 'react-redux';

import { itemsFilter, ContactsItem } from '../index';
import { getContacts, getFilter, tokenSelector } from 'redux/selectors';

import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import {
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  const deleteItem = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <section>
      {!contacts?.length ? (
        <span>Your contacts list is empty!</span>
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
              </Tr>
            </Thead>
            <Tbody>
              {itemsFilter(contacts, filter).map(contact => (
                <Tr id={contact.id} key={contact.id}>
                  <ContactsItem name={contact.name} number={contact.number} />
                  <Td>
                    <IconButton
                      type="button"
                      onClick={deleteItem}
                      id={contact.id}
                      text="Delete"
                      variant="solid"
                      colorScheme="facebook"
                      boxShadow="md"
                      icon={<DeleteIcon />}
                    />
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
