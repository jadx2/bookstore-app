import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'My first book',
      category: 'Drama',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'My second book',
      category: 'Comedy',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'My third book',
      category: 'Suspense',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
