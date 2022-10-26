import PropTypes from 'prop-types';

const ContactsItem = ({ name, number }) => {
  return (
    <p>
      {name}: {number}
    </p>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
