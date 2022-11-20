import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register.jsx';
import Contacts from './Pages/Contacts.jsx';
import Login from './Pages/Login.jsx';
import { selectIsLogin } from 'redux/selectors.js';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/authOperations.js';

import { PrivateRoute } from './PrivateRoute/PrivateRoute.jsx';
import PublicRoute from './PublicRoute/PublicRoute.jsx';
import MainNavigation from './Navigation/Navigation.jsx';
import { Box } from '@chakra-ui/react';

const App = () => {
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    isLogin && dispatch(refreshCurrentUser());
  }, [dispatch, isLogin]);

  return (
    <Box>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={
              <PublicRoute Component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute Component={<Register />} redirectTo="/contacts" />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
