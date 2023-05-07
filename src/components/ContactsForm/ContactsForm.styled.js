import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  padding: 25px;
  font-size: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  input {
    margin-bottom: 10px;
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
