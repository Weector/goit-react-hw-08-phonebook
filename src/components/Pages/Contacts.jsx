import { ContactsForm, ContactsList, Filter } from 'components';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function Contacts() {
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
      <ToastContainer />
    </>
  );
}

export default Contacts;
