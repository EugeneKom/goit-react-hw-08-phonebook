import styled from 'styled-components';

export const SvgButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: transparent;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 500ms ease 0s;
  :hover {
    background-color: rgb(169, 169, 169);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
  }
`;
