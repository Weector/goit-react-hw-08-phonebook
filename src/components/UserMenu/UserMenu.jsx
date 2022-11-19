import { useDispatch, useSelector } from 'react-redux';

import { logOutUser } from 'redux/auth/authOperations';

import { isLoggedInSelector, userSelector } from 'redux/selectors';

const UserMenu = () => {
  const isLogIn = useSelector(isLoggedInSelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    isLogIn && (
      <div>
        <span>{user.email}</span>
        <button type="button" onClick={() => dispatch(logOutUser())}>
          Logout
        </button>
      </div>
    )
  );
};

export default UserMenu;
