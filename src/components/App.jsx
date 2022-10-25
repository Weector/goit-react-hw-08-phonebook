import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactsForm from './AddContactsForm/AddContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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
      name: inputNameData,
      number: inputNumberData,
    }));

    form.reset();
  };

  contactsFilter = e => {
    const inputFilterData = e.currentTarget.value;
    this.setState({
      filter: inputFilterData,
    });
  };

  deleteBtn = e => {
    console.log(e);
    this.state.contacts.filter(contact => console.log(contact.id));

    // this.setState({
    //   co,
    // });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactsForm onSubmit={this.handelSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.contactsFilter} value={filter} />
        <ContactList contacts={contacts} filter={filter} btn={this.deleteBtn} />
      </div>
    );
  }
}

export const App = () => {
  return <PhoneBook />;
};
