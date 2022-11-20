import UserInfo from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { selectIsLogin } from 'redux/selectors';
import { Navigation, NavItem } from './navigation.styled';

const MainNavigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Navigation>
      {isLogin ? (
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
