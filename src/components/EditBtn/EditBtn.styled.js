import styled from 'styled-components';

export const EditBtnStyled = styled.button`
  display: flex;
  padding: 8px;
  margin-left: 8px;
  border-radius: 50%;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &:hover {
    background-color: gray;
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    margin-bottom: 14px;
  }
  button {
    font-family: monospace;
    margin-top: 16px;
    padding: 6px;
    cursor: pointer;
    border: 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

    border-radius: 10px;
    transition: 500ms;

    &:hover {
      background-color: #a9a9a9;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);

      transform: scale(1.1);
    }
  }
`;
