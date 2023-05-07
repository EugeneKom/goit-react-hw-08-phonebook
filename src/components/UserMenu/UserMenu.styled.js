import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 8px;
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  span {
    visibility: hidden;
    width: 100%;
    background-color: gray;
    color: black;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    /* bottom: 125%; */
    left: 185%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover span {
    visibility: visible;
    opacity: 0.7;
  }
`;

export const UserMenuHeader = styled.div`
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const CustomUnderline = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 2px;
  background-color: black;
`;
