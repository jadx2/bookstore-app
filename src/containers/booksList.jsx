import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/categoryFilter';
import Book from '../components/book';
import Avatar from '../assets/images/avatar.svg';

const BooksList = (props) => {
  const {
    books, removeBook, filter, changeFilter,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) => book.category === filter || filter === 'All',
  );

  return (
    <>
      <nav className="navbar">
        <div className="left-navbar">
          <h1>Bookstore CMS</h1>
          <p>BOOKS</p>
          <CategoryFilter onChange={handleFilterChange} filter={filter} />
        </div>
        <figure className="avatar">
          <img src={Avatar} alt="Avatar" />
        </figure>
      </nav>
      <div className="list-container">
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
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
  changeFilter: PropTypes.func.isRequired,
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
