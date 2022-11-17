import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { getFilteredContacts } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

import css from './Filter.module.css';

const generateID = nanoid();

const Filter = () => {
  const dispatch = useDispatch();

  const contactsFilter = e => {
    dispatch(getFilteredContacts(e.currentTarget.value));
  };
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
