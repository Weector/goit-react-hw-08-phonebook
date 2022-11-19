import { useDispatch, useSelector } from 'react-redux';

import { itemsFilter, Button, ContactsItem } from '../index';
import { getContacts, getFilter, tokenSelector } from 'redux/selectors';

import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

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
      <h2>Contacts</h2>
      <ul>
        {!contacts?.length ? (
          <span>Your contacts list is empty!</span>
        ) : (
          itemsFilter(contacts, filter).map(contact => (
            <li id={contact.id} key={contact.id}>
              <ContactsItem name={contact.name} number={contact.number} />
              <Button
                type="button"
                onClick={deleteItem}
                id={contact.id}
                text="Delete"
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default ContactsList;
