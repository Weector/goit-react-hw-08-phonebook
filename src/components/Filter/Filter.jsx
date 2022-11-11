import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

const generateID = nanoid();

const Filter = ({ contactsFilter }) => {
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
          onChange={contactsFilter}
          placeholder="Joh..."
        />
      </>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  contactsFilter: PropTypes.func.isRequired,
};
