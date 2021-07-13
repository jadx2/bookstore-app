import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { filter, handleFilterChange } = props;

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
        <select
          name="filter"
          id="filter"
          onChange={handleFilterChange}
          value={filter}
        >
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
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
