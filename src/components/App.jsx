import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register.jsx';
import Contacts from './Pages/Contacts.jsx';
import Login from './Pages/Login.jsx';
import { isLoggedInSelector, tokenSelector } from 'redux/selectors.js';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/authOperations.js';
import Navigator from './Navigator/Navigator.jsx';

const App = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(refreshCurrentUser());
  }, [token, dispatch]);

  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={isLoggedIn ? <Navigate to="contacts" /> : <Register />}
          />
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="contacts" /> : <Login />}
          />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
