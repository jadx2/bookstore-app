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
      title: 'My first book',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: 'My second book',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: 'My third book',
      category: 'History',
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
