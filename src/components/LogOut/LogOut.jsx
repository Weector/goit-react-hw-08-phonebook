import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { userSelector } from 'redux/selectors';

const LogOut = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{user.email}</span>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};

export default LogOut;
