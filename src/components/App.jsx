import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { LoginMenu } from './AuthMenu/LoginMenu';
import { UserContactsPage } from '../pages/UserContactsPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { Title } from './TItle/Title';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Title />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <AuthMenu />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginMenu />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <UserContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <PrivateRoute>
              <UserContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
