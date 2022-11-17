import { Formik } from 'formik';
// import { nanoid } from 'nanoid';

import Button from 'components/Button/Button';
import { validationSchemaForm } from './validation Schema';
import { useDispatch, useSelector } from 'react-redux';
import toastAlert from 'components/Notification/sameNameToastAlert';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';

import {
  StyledForm,
  StyledLabel,
  StyledError,
  StyledInput,
  StyledInputContainer,
} from './ContactsForm.styled';

const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const generateId = nanoid();

  const initialValues = {
    name: '',
    number: '',
  };

  const fieldData = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'John Snow',
      label: 'Name',
    },
    {
      type: 'number',
      name: 'number',
      placeholder: '+38(098)123-45-67',
      label: 'Phone number',
    },
  ];

  const makeContactItem = item => {
    const sameNameAlert = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );
    if (!!sameNameAlert) {
      toastAlert(item.name);
      return;
    }
    dispatch(addContact(item));
  };

  const handleSubmitForm = (value, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    makeContactItem(value);
    resetForm();
    setSubmitting(false);
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialValues}
        validationSchema={validationSchemaForm}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            {fieldData.map(({ type, name, placeholder, label }) => (
              <StyledInputContainer key={name}>
                <StyledLabel>{label}</StyledLabel>
                <StyledInput
                  // id={generateId}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <StyledError name={name} component={'div'} />
              </StyledInputContainer>
            ))}
            <Button type="submit" text="Add Contact" />
          </StyledForm>
        )}
      </Formik>
    </section>
  );
};

export default ContactsForm;
