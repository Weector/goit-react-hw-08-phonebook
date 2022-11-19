import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
