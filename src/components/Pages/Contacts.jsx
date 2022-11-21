import { Box } from '@chakra-ui/react';
import { ContactsForm, ContactsList, Filter } from 'components';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Contacts = () => {
  return (
    <Box
      display={['block', 'block', 'flex']}
      gap="20"
      my={['3', '3', '10']}
      justifyContent="center"
      position="relative"
      p="3"
    >
      <Box
        p="6"
        alignItems="center"
        rounded="lg"
        boxShadow="lg"
        maxH="360px"
        position={['unset', 'unset', 'sticky']}
        top="50px"
        left="0"
        border="1px solid lightblue"
      >
        <ContactsForm />
        <Filter />
      </Box>
      <Box>
        <ContactsList />
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default Contacts;
