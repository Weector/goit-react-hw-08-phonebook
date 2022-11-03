import PropTypes from 'prop-types';

import { itemsFilter, Button, ContactsItem } from '../index';

import css from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, deleteItem }) => {
  return (
    <ul className={css.list}>
      {!contacts.length ? (
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
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
