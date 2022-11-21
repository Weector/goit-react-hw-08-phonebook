import UserInfo from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { selectIsLogin } from 'redux/selectors';

import { NavItem } from './navigation.styled';
import { Box, Button, useColorMode } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';

const MainNavigation = () => {
  const isLogin = useSelector(selectIsLogin);
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      borderBottom="1px solid lightblue"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="3"
      boxShadow="md"
      w="100"
    >
      <Button
        onClick={toggleColorMode}
        colorScheme="telegram"
        ml="5"
        pl="22"
        leftIcon={<SunIcon />}
      ></Button>
      {isLogin ? (
        <>
          <UserInfo />
        </>
      ) : (
        <Box mr="5">
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register"> Sign Up</NavItem>
        </Box>
      )}
    </Box>
  );
};

export default MainNavigation;
