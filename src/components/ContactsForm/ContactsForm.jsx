import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  useCreateNewContactMutation,
  useGetContactsQuery,
} from 'redux/auth/authSlice';
import { toast } from 'react-hot-toast';
import { checkNameForMath } from 'components/utils/sharedFunctions';
import { FormStyle } from './ContactsForm.styled';

export const ContactsForm = () => {
  const newId = nanoid();
  const [addContact] = useCreateNewContactMutation();
  const { data } = useGetContactsQuery();

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!checkNameForMath(name, data)) {
      addContact({ name, number });
    } else {
      toast.error(`${name} already exists in your phone book`);
    }

    form.reset();
  };

  return (
    <>
      <FormStyle onSubmit={onSubmitForm}>
        <label htmlFor={newId}>
          <span>Name</span>
        </label>
        <input
          id={newId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={newId}>
          <span>Number</span>
        </label>
        <input
          id={newId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </FormStyle>
    </>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
