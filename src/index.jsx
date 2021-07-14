import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100000),
      title: 'Ulises',
      author: 'James Joyce',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: 'Dracula',
      author: 'Bram Stoker',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: 'Alice in Wonderland',
      author: 'Lewis Carrol',
      category: 'Kids',
    },
  ],
  filter: 'All',
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
