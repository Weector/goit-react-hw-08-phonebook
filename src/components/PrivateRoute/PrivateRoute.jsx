import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? children : <Navigate to={redirectTo} />;
};
