import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitBook = (e) => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ id: Math.floor(Math.random() * 100000), title, category });
    this.setState({ title: '', category: '' });
  };

  render() {
    const { title, category } = this.state;

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
      <form onSubmit={this.submitBook}>
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
              value={title}
            />
          </label>
        </div>
        <div>
          <label htmlFor="categories">
            Categories:
            <select
              name="category"
              id="categories"
              onChange={this.handleChange}
              value={category}
            >
              <option defaultValue>Choose a category</option>
              {categories.map((categoryValue) => (
                <option key={categoryValue} value={categoryValue}>
                  {categoryValue}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Add book</button>
        </div>
      </form>
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
