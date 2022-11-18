import LogOut from 'components/LogOut/LogOut';
// import { useSelector } from 'react-redux';
// import { isLoggedInSelector } from 'redux/selectors';
import { Navigation, NavItem } from './navigator.styled';

const Navigator = () => {
  // const isLogedIn = useSelector(isLoggedInSelector);
  return (
    <Navigation>
      <NavItem to="/" end>
        SignUp
      </NavItem>
      <NavItem to="/login">SignIn</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>

      <LogOut />
    </Navigation>
  );
};

export default Navigator;
