import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from './categoryFilter';

const BooksList = (props) => {
  const { books, removeBook, filter } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (e) => {
    // console.log(e.target.value);
    changeFilter(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) => book.category === filter || filter === 'All',
  );

  return (
    <>
      <CategoryFilter onChange={handleFilterChange} filter={filter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
