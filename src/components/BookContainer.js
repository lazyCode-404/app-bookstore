import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'The demon',
      author: 'Micheal',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'City story',
      author: 'Adams',
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
