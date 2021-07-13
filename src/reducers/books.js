import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const booksReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case CREATE_BOOK:
      newState = [...newState, action.payload];
      return newState;
    case REMOVE_BOOK:
      return newState.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
