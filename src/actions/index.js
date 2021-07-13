import { CREATE_BOOK, REMOVE_BOOK } from './types';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book.id,
});

export { createBook, removeBook };
