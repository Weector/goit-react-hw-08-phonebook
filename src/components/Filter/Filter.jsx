import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { getFilteredContacts } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Box } from '@chakra-ui/react';

const generateID = nanoid();

const Filter = () => {
  const dispatch = useDispatch();

  const contactsFilter = e => {
    dispatch(getFilteredContacts(e.currentTarget.value));
  };
  return (
    <Formik>
      <Box
        bg="brand.lightGrey"
        w="40%"
        p={4}
        color="brand.primaryBlue"
        borderWidth="1px"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        mt="2"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <label htmlFor={generateID}>Find contacts by name</label>
        <Input
          id={generateID}
          name="filter"
          type="text"
          onChange={contactsFilter}
          placeholder="Joh..."
          size="md"
          width="300px"
          borderColor="brand.lightBlue"
        />
      </Box>
    </Formik>
  );
};

export default Filter;
