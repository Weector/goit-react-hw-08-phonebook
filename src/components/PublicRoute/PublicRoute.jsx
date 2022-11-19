import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

const PublicRoute = ({
  Component,
  redirectTo = '/login',
  restricted = false,
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
