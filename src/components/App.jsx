import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';
import '../styles/App.scss';

const App = () => (
  <div className="app">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
