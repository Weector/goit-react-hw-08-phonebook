import { Td } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ContactsItem = ({ name, number }) => {
  return (
    <>
      <Td>{name}</Td>
      <Td>{number}</Td>
    </>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
