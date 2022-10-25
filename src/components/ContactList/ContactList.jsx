const ContactList = ({ contacts, filter, btn }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={btn}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
