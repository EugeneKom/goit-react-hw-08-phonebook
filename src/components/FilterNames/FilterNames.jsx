import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { setFilters } from '../../redux/filterContactsSlice';
// import { useGetContactsQuery } from 'redux/auth/authSlice';

export const FilterNames = ({ handleFilterValue }) => {
  const newId = nanoid();

  return (
    <>
      <label htmlFor={newId}>Find contacts by name</label>
      <input
        type="text"
        id={newId}
        name="filter"
        title="Find contacts by name"
        onChange={evt => handleFilterValue(evt)}
      ></input>
    </>
  );
};

FilterNames.propTypes = {
  filter: PropTypes.string,
};
