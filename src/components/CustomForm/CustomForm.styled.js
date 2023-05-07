import styled from 'styled-components';

export const FormWrapper = styled.form`
  font-family: 'Cedarville Cursive', cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  margin: 0 auto;
  width: 330px;
  height: 310px;
  margin-top: 10px;
  color: rgb(85, 26, 139);

  /* border: 1px solid rgb(85, 26, 139); */
  padding: 5px 20px 20px;
  border-radius: 15px;
  box-shadow: 1px 0 0 1px rgb(85, 26, 139);
  input {
    font-family: cursive;
    padding: 4px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 1px 0 2px 0 rgb(85, 26, 139);
    color: rgb(85, 26, 139);
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  button {
    font-family: 'Cedarville Cursive', cursive;
    margin: 0 auto;
    margin-top: 12px;
    padding: 6px;
    font-size: 16px;
    width: 130px;
    cursor: pointer;
    border: 0;
    box-shadow: 1px 0 2px 0 rgb(85, 26, 139);

    border-radius: 10px;
    transition: 500ms;

    &:hover {
      background-color: rgb(207, 203, 184);
      border: 0;
      box-shadow: 1px 0 2px 0 rgb(85, 26, 139);
    }
    &:active {
      background-color: blueviolet;
    }
  }
`;
