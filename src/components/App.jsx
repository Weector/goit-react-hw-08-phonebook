import { Component } from 'react';

import { nanoid } from 'nanoid';
import css from './App.module.css';

import { ContactsForm, Filter, ContactsList } from './index.js';

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
      alert(`${item.name} is already in contacts!`);
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
      </div>
    );
  }
}

export default App;
