import { useGetContactsQuery } from 'redux/auth/authSlice';
import { useState } from 'react';
import { Wrapper } from 'components/App.styled';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsWrapper } from 'components/ContactsList/ContactsList.styled';
import { FilterNames } from 'components/FilterNames/FilterNames';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserTopMenu } from './UserTopMenu.styled';

const UserContactsPage = () => {
  const { data } = useGetContactsQuery();
  const [filteredContacts, setFilteredContacts] = useState(null);

  const handleFilterValue = ({ target: { value } }) => {
    if (value === '') {
      setFilteredContacts(null);
      return;
    }
    const filterContacts = data.filter(({ name }) => {
      const normalizeName = name.toLowerCase();

      return normalizeName.includes(value.toLowerCase());
    });
    setFilteredContacts(filterContacts);
  };

  return (
    <>
      <Wrapper>
        <UserTopMenu>
          <UserMenu />
          <ContactsForm />
        </UserTopMenu>
        <ContactsWrapper>
          <div>
            <h2>Contacts</h2>
            <FilterNames handleFilterValue={handleFilterValue} />
          </div>
          <div>
            <ContactsList filteredContacts={filteredContacts} />
          </div>
        </ContactsWrapper>
      </Wrapper>
    </>
  );
};

export default UserContactsPage;
