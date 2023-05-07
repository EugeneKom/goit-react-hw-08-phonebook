import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im';
import { IconContext } from 'react-icons';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/auth/authSlice';
import { DeleteBtn } from './ContactsList.styled';
import { EditBtn } from 'components/EditBtn/EditBtn';

export const ContactsList = ({ filteredContacts }) => {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const createMarkup = contacts => {
    return contacts.map(({ name, id, number }) => {
      return (
        <li key={id} id={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <DeleteBtn disabled={isFetching} onClick={() => deleteContact(id)}>
            Delete
          </DeleteBtn>
          <EditBtn id={id} contactName={name} contactNumber={number} />
        </li>
      );
    });
  };

  return (
    <>
      {isFetching && (
        <IconContext.Provider
          value={{
            className: 'spinner',
          }}
        >
          <ImSpinner />
        </IconContext.Provider>
      )}
      {!isLoading && contacts && (
        <ul>
          {filteredContacts
            ? createMarkup(filteredContacts)
            : createMarkup(contacts)}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
