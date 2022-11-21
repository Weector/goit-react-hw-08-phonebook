import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Input, Box, Text } from '@chakra-ui/react';

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
        rounded="md"
        mx="auto"
        mt="5"
        textAlign="center"
        textTransform="uppercase"
        fontWeight="black"
      >
        <Text color="telegram.500" htmlFor={generateID}>
          Find contacts
        </Text>
        <Input
          id={generateID}
          name="filter"
          type="text"
          onChange={contactsFilter}
          placeholder="Ton..."
          mt="3"
          outline="1px solid lightblue"
        />
      </Box>
    </Formik>
  );
};

export default Filter;
