import { selectToken } from 'components/utils/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectToken);

  return isAuth ? children : <Navigate to="/" />;
};
