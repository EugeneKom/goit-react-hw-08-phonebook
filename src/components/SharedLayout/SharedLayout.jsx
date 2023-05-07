import { Link, Outlet } from 'react-router-dom';
import { NavWrapper } from './NavWrapper.styled';
import { Container } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectToken } from 'components/utils/selectors';

export const SharedLayout = () => {
  const token = useSelector(selectToken);

  return (
    <Container>
      {!token && (
        <>
          <NavWrapper>
            <Link to="register">SignUp</Link>
            <Link to="login">Login</Link>
          </NavWrapper>
        </>
      )}
      <Outlet />
    </Container>
  );
};
