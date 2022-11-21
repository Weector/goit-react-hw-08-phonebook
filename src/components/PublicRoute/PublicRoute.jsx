import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';

const PublicRoute = ({
  Component,
  redirectTo = '/contacts',
  restricted = false,
}) => {
  const isLogin = useSelector(selectIsLogin);

  const shouldRedirect = restricted && isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
