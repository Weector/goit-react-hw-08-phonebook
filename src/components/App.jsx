import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ContactsForm,
  Filter,
  ContactsList,
  sameNameToastAlert,
} from './index.js';

import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );

    if (!!sameNameAlert) {
      sameNameToastAlert(item.name);
      return;
    }

    item.id = nanoid();
    return setContacts(prev => [...prev, item]);
  };

  const contactsFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteItem = e => {
    const remainedItems = contacts.filter(
      contact => contact.id !== e.target.id
    );

    setContacts([...remainedItems]);
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) localStorage.removeItem('contacts');
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm makeContactItem={makeContactItem} />

      <h2>Contacts</h2>
      <Filter onChange={contactsFilter} value={filter} />
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
