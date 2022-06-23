import bookForm from '../components/bookForm';
import bookList from '../components/bookList';
import Header from '../components/header';
/* eslint-disable react/jsx-key */
const Books = () => (
  <div>
    <Header />
    <BookList />
    <BookForm />
  </div>
);

export default Books;
