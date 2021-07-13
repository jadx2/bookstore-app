import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { filter, onChange } = props;

  const filters = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <label htmlFor="filter">
        Filter by:
        <select name="filter" id="filter" onChange={onChange} value={filter}>
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
