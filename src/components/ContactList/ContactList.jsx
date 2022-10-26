import PropTypes from 'prop-types';

import itemsFilter from 'components/Filter/filterFunction';
import ContactsItem from 'components/ContacstItem/ContacstItem';
import Button from 'components/Button/Button';

import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteItem }) => {
  return (
    <ul className={css.list}>
      {itemsFilter(contacts, filter).map(contact => (
        <li key={contact.id} className={css.item}>
          <ContactsItem name={contact.name} number={contact.number} />
          <Button
            type="button"
            onClick={deleteItem}
            id={contact.id}
            text="Delete"
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
