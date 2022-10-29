import { Component } from 'react';

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

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  makeContactItem = item => {
    const sameNameAlert = this.state.contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );

    if (!!sameNameAlert) {
      sameNameToastAlert(item.name);
      return;
    }

    this.setState(prev => {
      item.id = nanoid();
      return {
        contacts: [...prev.contacts, item],
      };
    });
  };

  contactsFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteItem = e => {
    const remainedItems = this.state.contacts.filter(
      contact => contact.id !== e.target.id
    );

    this.setState({
      contacts: remainedItems,
    });
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    if (this.state.contacts.length === 0) localStorage.removeItem('contacts');
  }

  render() {
    const { filter, contacts } = this.state;
    const { makeContactItem, contactsFilter, deleteItem } = this;
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
  }
}

export default App;
