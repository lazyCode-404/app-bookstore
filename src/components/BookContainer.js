import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookContent from './Book';

const BookContainer = () => {
  const data = useSelector((state) => state.booksReducer);
  const books = data;
  return (
    <div className="main-container">
      {/* {books.map((book) => (
        <div key={book.id}>
          <li className="books-content">
            {book.title}
            {' by '}
            {book.author}
            {' - '}
            {book.category}
          </li>
          <button type="button" id={book.id} onClick={
            () => dispatch(deleteBook(book.id))
          }>Remove</button>
        </div>
      ))} */}
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
