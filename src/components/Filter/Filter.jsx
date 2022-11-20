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
        bg="gray.100"
        rounded="md"
        mx="auto"
        mt="5"
        textAlign="center"
        color="facebook.700"
        textTransform="uppercase"
        _hover={{ bg: 'gray.200' }}
        fontWeight="black"
      >
        <label htmlFor={generateID}>Find contacts</label>
        <Input
          id={generateID}
          name="filter"
          type="text"
          onChange={contactsFilter}
          placeholder="Sir..."
          bgColor="white"
          mt="3"
          // size="md"
          // width="300px"
          // borderColor="brand.lightBlue"
        />
      </Box>
    </Formik>
  );
};

export default Filter;
