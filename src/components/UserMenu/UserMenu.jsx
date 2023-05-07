import { Logout } from 'components/AuthMenu/Logout';
import { useGetCurrentUserQuery } from 'redux/auth/authSlice';
import { HiOutlineUserCircle } from 'react-icons/hi';
import {
  CustomUnderline,
  Tooltip,
  UserMenuHeader,
  UserMenuStyled,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { data, isLoading } = useGetCurrentUserQuery();

  return (
    !isLoading && (
      <UserMenuStyled>
        <UserMenuHeader>
          <HiOutlineUserCircle />
          <p>{data.name}</p>
          <CustomUnderline />
        </UserMenuHeader>
        <p>Email: {data.email}</p>
        <Tooltip>
          <span>Log out</span>
          <Logout />
        </Tooltip>
      </UserMenuStyled>
    )
  );
};
