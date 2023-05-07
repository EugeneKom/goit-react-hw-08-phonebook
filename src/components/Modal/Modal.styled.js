import styled from 'styled-components';

const ModalWrapper = styled.div`
  font-family: monospace;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: transparent;
  width: 25%;
  border-radius: 15px;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const CloseButton = styled.span`
  float: right;
  font-size: 28px;
  transform: scale(1);
  transition: transform 1s;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #000;
    cursor: pointer;
  }
`;

export const StyledModal = {
  ModalWrapper,
  ModalBody,
  CloseButton,
};
