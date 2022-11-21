import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { selectIsLogin, selectUser } from 'redux/selectors';

import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';

const UserMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    isLogin && (
      <Box display="flex" alignItems="center" p="1.5">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" colorScheme="telegram">
              {user.name}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            w="300px"
            textAlign="center"
            mt="3"
            outline="1px solid lightblue"
          >
            <PopoverHeader>{user.email}</PopoverHeader>
          </PopoverContent>
        </Popover>

        <Button
          type="button"
          variant="solid"
          colorScheme="telegram"
          boxShadow="md"
          ml="4"
          onClick={() => dispatch(logOutUser())}
        >
          Logout
        </Button>
      </Box>
    )
  );
};

export default UserMenu;
