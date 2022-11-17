import { useDispatch, useSelector } from 'react-redux';

import { itemsFilter, Button, ContactsItem } from '../index';
import { getContacts, getFilter } from 'redux/selectors';

import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteItem = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <section>
      <h2>Contacts</h2>
      <ul className={css.list}>
        {!contacts?.length ? (
          <span className={css.span}>Your contacts list is empty!</span>
        ) : (
          itemsFilter(contacts, filter).map(contact => (
            <li id={contact.id} key={contact.id} className={css.item}>
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
