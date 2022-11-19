import { Formik } from 'formik';
import { Form } from 'formik';
import Button from 'components/Button/Button';
import { validationSchemaForm } from './validation Schema';
import { useDispatch, useSelector } from 'react-redux';
import toastAlert from 'components/Notification/sameNameToastAlert';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';
import InputForm from 'components/InputForm/InputForm';

const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
      type: 'phone',
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
          <Form>
            <InputForm
              fieldData={fieldData}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Button type="submit" text="Add Contact" />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactsForm;
