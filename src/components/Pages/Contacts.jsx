import { Box } from '@chakra-ui/react';
import { ContactsForm, ContactsList, Filter } from 'components';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Contacts = () => {
  return (
    <Box
      display="flex"
      gap="20"
      my="60px"
      mx="80px"
      justifyContent="center"
      position="relative"
    >
      <Box
        bgColor="gray.100"
        p="10"
        alignItems="center"
        rounded="lg"
        boxShadow="lg"
        maxH="360px"
        position="sticky"
        top="50px"
        left="0"
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
