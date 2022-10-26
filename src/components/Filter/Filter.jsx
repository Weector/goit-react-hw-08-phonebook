import Field from 'components/Field/Field';
import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  return (
    <Field
      type="text"
      onChange={onChange}
      value={value}
      label="Find contacts by name"
    />
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
