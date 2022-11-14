import PropTypes from 'prop-types';

const ContactsItem = ({ name, phone }) => {
  return (
    <p>
      {name}: {phone}
    </p>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
