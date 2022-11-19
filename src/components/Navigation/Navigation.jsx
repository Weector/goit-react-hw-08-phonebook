import UserInfo from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';
// import { Navigation, NavLink } from './navigation.styled';

const MainNavigation = () => {
  const isLogIn = useSelector(isLoggedInSelector);
  console.log(isLogIn);
  return (
    <nav>
      {isLogIn ? (
        <>
          <NavLink to="/contacts"> Contacts</NavLink>
          <UserInfo />
        </>
      ) : (
        <>
          <NavLink to="/login">SignIn</NavLink>
          <NavLink to="/register"> SignUp</NavLink>
        </>
      )}
    </nav>
  );
};

export default MainNavigation;
