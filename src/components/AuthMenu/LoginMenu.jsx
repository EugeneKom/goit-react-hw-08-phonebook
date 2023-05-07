import { CustomForm } from 'components/CustomForm/CustomForm';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from 'redux/auth/authSlice';
import { setLoginCredentials } from 'redux/loginSlice';

export const LoginMenu = () => {
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const email = evt.target.userEmail.value;
    const password = evt.target.userPassword.value;

    login({ email, password })
      .unwrap()
      .then(({ token }) => dispatch(setLoginCredentials(token)))
      .catch(() => {
        toast.error(`Incorrect data entry`);
      });
  };
  return (
    <CustomForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="userEmail">
        <span>Email</span>
        <input id="userEmail" type="email" name="userEmail" />
      </label>
      <label htmlFor="userPassword">
        <span>Password</span>
        <input id="userPassword" type="password" name="userPassword" />
      </label>
      <button type="submit">Login</button>
    </CustomForm>
  );
};
