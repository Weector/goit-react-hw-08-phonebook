import PropTypes from 'prop-types';

const ContactsItem = ({ name, number, phone }) => {
  return (
    <p>
      {name}: {number || phone}
    </p>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
