import UserInfo from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { isLoggedInSelector } from 'redux/selectors';
import { Navigation, NavItem } from './navigation.styled';

const MainNavigation = () => {
  const isLogIn = useSelector(isLoggedInSelector);
  console.log(isLogIn);
  return (
    <Navigation>
      {isLogIn ? (
        <>
          <UserInfo />
        </>
      ) : (
        <>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register"> Sign Up</NavItem>
        </>
      )}
    </Navigation>
  );
};

export default MainNavigation;
