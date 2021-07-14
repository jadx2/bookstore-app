import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitBook = (e) => {
    e.preventDefault();
    const { title, author, category } = this.state;
    const { createBook } = this.props;
    createBook({
      id: Math.floor(Math.random() * 100000),
      title,
      author,
      category,
    });
    this.setState({ title: '', author: '', category: '' });
  };

  render() {
    const { title, author, category } = this.state;

    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    return (
      <div className="new-book">
        <h2 className="new-book-heading">ADD NEW BOOK</h2>
        <form className="book-form" onSubmit={this.submitBook}>
          <input
            className="field input"
            type="text"
            required
            name="title"
            id="title"
            onChange={this.handleChange}
            value={title}
            placeholder="Book title"
          />
          <input
            className="field input"
            type="text"
            name="author"
            required
            id="author"
            onChange={this.handleChange}
            value={author}
            placeholder="Book author"
          />
          <select
            className="field select"
            name="category"
            required
            id="categories"
            onChange={this.handleChange}
            value={category}
          >
            <option selected value="">
              Category
            </option>
            {categories.map((categoryValue) => (
              <option key={categoryValue} value={categoryValue}>
                {categoryValue}
              </option>
            ))}
          </select>
          <button type="submit" className="btn">
            ADD BOOK
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
