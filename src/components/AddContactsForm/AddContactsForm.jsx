import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import Field from 'components/Field/Field';

import css from './AddContactsForm.module.css';

const AddContactsForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <Field
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        label="Name"
        required
      />

      <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        label="Number"
        required
      />
      <Button type="submit" text="Add contact" />
    </form>
  );
};

AddContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddContactsForm;
