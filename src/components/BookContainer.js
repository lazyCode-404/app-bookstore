import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'how to become a milionaire',
      author: 'shepherd bushiri',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'parach daily',
      author: 'shepherd bushiri',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
