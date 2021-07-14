import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <div className="card">
      <div className="book-info">
        <p className="book-category">{book.category}</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div className="buttons">
          <button className="btn-transparent" type="button">
            Comments
          </button>
          <span className="divider-info" />
          <button
            className="btn-transparent"
            type="button"
            onClick={() => handleRemoveBook(book)}
          >
            Remove
          </button>
          <span className="divider-info" />
          <button className="btn-transparent" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-progress">
        <div className="percentage">
          <div className="progress-bar" />
          <div className="completed">
            <p className="number">
              {Math.floor(Math.random() * 100)}
              %
            </p>
            <p>completed</p>
          </div>
        </div>
        <span className="divider-progress" />
        <div className="chapter">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter-number">
            Chapter
            {' '}
            {Math.floor(Math.random() * 15)}
          </p>
          <button type="button" className="btn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
