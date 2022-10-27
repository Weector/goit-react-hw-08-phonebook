import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from '../ContactsForm/ContactsForm.module.css';

const generateID = nanoid();

const Filter = ({ onChange, value }) => {
  return (
    <Formik>
      <>
        <label className={css.label} htmlFor={generateID}>
          Find contacts by name
        </label>
        <Field
          className={css.input}
          id={generateID}
          name="filter"
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Joh..."
        />
      </>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
