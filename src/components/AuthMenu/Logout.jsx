import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from 'redux/auth/authSlice';
import { setLoginCredentials } from 'redux/loginSlice';
import { FiLogOut } from 'react-icons/fi';
import { SvgButton } from './Logout.styled';

export const Logout = () => {
  const [logout] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        dispatch(setLoginCredentials(null));
      })
      .catch(error => console.log(`logout error,${error}`));
  };
  return (
    <SvgButton onClick={handleLogout}>
      <FiLogOut />
    </SvgButton>
  );
};
