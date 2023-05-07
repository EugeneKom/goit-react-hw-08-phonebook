import { FormWrapper } from './CustomForm.styled';

export const CustomForm = ({ onSubmit, children }) => {
  return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
};
