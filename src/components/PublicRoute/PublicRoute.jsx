import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';

const PublicRoute = ({
  Component,
  redirectTo = '/login',
  restricted = false,
}) => {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
