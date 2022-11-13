import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors.js';
import { deleteContacts } from 'redux/contactsSlice';

import {
  ContactsForm,
  Filter,
  ContactsList,
  sameNameToastAlert,
} from './index.js';

import css from './App.module.css';
import { getFilteredContacts } from 'redux/filterSlice.js';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );

    if (!!sameNameAlert) {
      sameNameToastAlert(item.name);
      return;
    }
    // dispatch(addContacts(item));
  };

  const contactsFilter = e => {
    dispatch(getFilteredContacts(e.currentTarget.value));
  };

  const deleteItem = e => {
    const remainedItems = contacts.filter(
      contact => contact.name !== e.target.name
    );
    dispatch(deleteContacts(remainedItems));
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
