import { string, object } from 'yup';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const nameRegExp =
  /^[a-zA-Zа-яА-Я-іїєьїʼ]+(([' -][a-zA-Zа-яА-Я-іїєьʼ ])?[a-zA-Zа-яА-Я-іїєьʼ]*)*$/;

export const validationSchemaForm = object().shape({
  name: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces!'
    )
    .required('This is a required field!'),

  number: string()
    .matches(
      phoneRegExp,
      'Must be digits and can contain spaces, dashes, parentheses, start with + and min length 5 symbol'
    )
    .required('This is a required field!'),
});
