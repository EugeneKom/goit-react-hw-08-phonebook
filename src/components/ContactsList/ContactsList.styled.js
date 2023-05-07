import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 77px;

  ul {
    padding: 0;
  }
  h2 {
    font-size: 32px;
  }
  label {
    margin-right: 10px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 12px;
    padding: 8px;
    padding-left: 16px;

    background-color: white;
    border-radius: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  span {
    margin-right: 8px;

    &:first-child {
      font-size: 16px;
      font-weight: bold;
    }
  }

  button {
    border: none;
    background-color: #8cada6;
    cursor: pointer;
    transition: all 500ms ease 0s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  padding: 6px 12px;
  border-radius: 15px;
  &:hover {
    background-color: rgb(255, 0, 51);
  }
`;
