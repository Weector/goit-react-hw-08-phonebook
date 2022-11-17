import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';

import { fetchContacts } from 'redux/contacts/contactsOperations.js';

import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register.jsx';
import Contacts from './Pages/Contacts.jsx';
import Login from './Pages/Login.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
