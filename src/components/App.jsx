import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';

import { ContactsForm, Filter, ContactsList, toastAlert } from './index.js';

import css from './App.module.css';
import { getFilteredContacts } from 'redux/filterSlice.js';
import { addContact, deleteContact, fetchContacts } from 'redux/operation.js';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (!!sameNameAlert) {
      toastAlert(item.name);
      return;
    }
    dispatch(addContact(item));
  };

  const contactsFilter = e => {
    dispatch(getFilteredContacts(e.currentTarget.value));
  };

  const deleteItem = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm makeContactItem={makeContactItem} />

      <h2>Contacts</h2>
      <Filter contactsFilter={contactsFilter} value={filter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteItem={deleteItem}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
