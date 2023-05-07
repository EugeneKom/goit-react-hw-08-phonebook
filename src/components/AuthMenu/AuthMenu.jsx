import { CustomForm } from 'components/CustomForm/CustomForm';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateNewUserMutation } from 'redux/auth/authSlice';
import { setLoginCredentials } from 'redux/loginSlice';

export const AuthMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authUser] = useCreateNewUserMutation();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const name = evt.target.userName.value;
    const email = evt.target.userEmail.value;
    const password = evt.target.userPassword.value;

    await authUser({ name, email, password })
      .unwrap()
      .then(({ token }) => {
        dispatch(setLoginCredentials(token));
      })
      .then(() => navigate('/contacts'))
      .catch(() => {
        toast.error(`Incorrect data entry`);
      });

    evt.target.reset();
  };

  return (
    <>
      <CustomForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="userName">
          <span>Name</span>
          <input id="userName" type="text" name="userName" required />
        </label>
        <label htmlFor="userEmail">
          <span>Email</span>
          <input id="userEmail" type="email" name="userEmail" required />
        </label>
        <label htmlFor="userPassword">
          <span>Password</span>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            required
          />
        </label>
        <button type="submit">Register</button>
      </CustomForm>
    </>
  );
};
