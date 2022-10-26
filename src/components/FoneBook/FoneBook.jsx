import { Component } from 'react';

import { nanoid } from 'nanoid';

import { AddContactsForm, Filter, ContactList } from '../index.js';

import css from './FoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handelSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputNameData = form.elements.name.value;
    const inputNumberData = form.elements.number.value;

    if (inputNameData === this.state.name) {
      return alert(`${inputNameData} is already in contacts!`);
    }

    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { id: nanoid(), name: inputNameData, number: inputNumberData },
      ],
    }));

    form.reset();
  };

  contactsFilter = e => {
    const inputFilterData = e.currentTarget.value;
    this.setState({
      filter: inputFilterData,
    });
  };

  deleteItem = e => {
    const btnId = e.target.id;
    const remainedItems = this.state.contacts.filter(
      contact => contact.id !== btnId
    );

    this.setState({
      contacts: [...remainedItems],
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const { handelSubmit, contactsFilter, deleteItem } = this;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <AddContactsForm onSubmit={handelSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={contactsFilter} value={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteItem={deleteItem}
        />
      </div>
    );
  }
}

export default PhoneBook;
