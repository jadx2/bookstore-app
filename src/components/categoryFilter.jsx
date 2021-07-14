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
      <select
        className="filter"
        name="filter"
        onChange={onChange}
        value={filter}
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
