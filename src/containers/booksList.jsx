import { connect } from 'react-redux';
<<<<<<< HEAD:src/components/booksList.jsx
import PropTypes from 'prop-types';
import Book from './book';
import { removeBook } from '../actions/index';
=======
import PropType from 'prop-types';
import Book from '../components/book';
>>>>>>> milestone2:src/containers/booksList.jsx

const BooksList = (props) => {
  const { books, removeBook } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
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
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
