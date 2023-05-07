import { FiSettings } from 'react-icons/fi';
import {
  useGetContactsQuery,
  useModifyContactMutation,
} from 'redux/auth/authSlice';
import { toast } from 'react-hot-toast';
import { EditBtnStyled, EditForm } from './EditBtn.styled';
import { checkNameForMath } from 'components/utils/sharedFunctions';
import { Modal } from 'components/Modal/Modal';
import useToggle from 'hooks/ToggleModal';

export const EditBtn = ({ id, contactName, contactNumber }) => {
  const [modifyContact] = useModifyContactMutation();
  const { data } = useGetContactsQuery();
  const [open, setOpen] = useToggle();

  const handleCollectData = evt => {
    evt.preventDefault();

    console.log(data.number);

    const name = evt.target.elements.changeName.value;
    const number = evt.target.elements.changeNumber.value;

    if (!checkNameForMath(name, data)) {
      modifyContact({ id, name, number });
    } else {
      toast.error(`${name} already exists in your phone book`);
    }

    setOpen(false);
    evt.target.reset();
  };

  return (
    <EditBtnStyled onClick={() => setOpen()}>
      <Modal open={open} toggle={setOpen}>
        <EditForm onSubmit={handleCollectData}>
          <ul>
            <li>
              <h2>Old name: </h2>
              <p>{contactName}</p>
            </li>
            <li>
              <h2>Former number: </h2>
              <p>{contactNumber}</p>
            </li>
          </ul>
          <label htmlFor="changeName">
            <span>Name</span>
          </label>
          <input
            id="changeName"
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="changeNumber">
            <span>Number</span>
          </label>
          <input
            value={data.number}
            id="changeNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>save changes</button>
        </EditForm>
      </Modal>
      <FiSettings />
    </EditBtnStyled>
  );
};
