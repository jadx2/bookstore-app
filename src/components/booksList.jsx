import { connect } from 'react-redux';
import PropType from 'prop-types';
import Book from './book';

const BooksList = (props) => {
  const { books } = props;
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
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      title: PropType.string,
      category: PropType.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
