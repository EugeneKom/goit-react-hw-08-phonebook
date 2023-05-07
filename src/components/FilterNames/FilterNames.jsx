import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
  handleFilterValue: PropTypes.func,
};
