import styled from 'styled-components';

export const NavWrapper = styled.nav`
  font-family: 'Cedarville Cursive';
  color: rgb(85, 26, 139);
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 30px;
  a {
    font-size: 35px;
    text-decoration: none;
    padding: 18px;
    border-radius: 18px;
    width: 120px;
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px;
    &:hover {
      box-shadow: -1px -1px 0 0;
    }
  }
`;
