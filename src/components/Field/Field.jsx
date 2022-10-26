import css from './Field.module.css';
import PropTypes from 'prop-types';

const Field = ({
  type,
  name,
  pattern,
  title,
  required,
  label,
  value,
  onChange,
}) => {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Field;

Field.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
