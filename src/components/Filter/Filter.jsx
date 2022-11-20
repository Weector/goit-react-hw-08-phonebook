import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Input, Box } from '@chakra-ui/react';

import { getFilteredContacts } from 'redux/filter/filterSlice';

const generateID = nanoid();

const Filter = () => {
  const dispatch = useDispatch();

  const contactsFilter = e => {
    dispatch(getFilteredContacts(e.currentTarget.value));
  };
  return (
    <Formik>
      <Box
        bg="gray.100"
        rounded="md"
        mx="auto"
        mt="5"
        textAlign="center"
        color="facebook.700"
        textTransform="uppercase"
        fontWeight="black"
      >
        <label htmlFor={generateID}>Find contacts</label>
        <Input
          id={generateID}
          name="filter"
          type="text"
          onChange={contactsFilter}
          placeholder="Ton..."
          bgColor="white"
          mt="3"
        />
      </Box>
    </Formik>
  );
};

export default Filter;
