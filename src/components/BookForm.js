import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
/* eslint-disable react/jsx-key */
const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  const setCategoryState = (e) => {
    setCategory(e);
  };

  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form d-flex">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="enter book name" />
        <select className="select" onChange={(e) => setCategoryState(e.target.value)}>
          <option value="">Select</option>
          <option value="sci-fi">sci-fi</option>
          <option value="romance">romance</option>
          <option value="action">action</option>
        </select>
        <button className="bg-blue add-button" onClick={submitBookToStore} type="button">Add</button>
      </form>
    </div>
  );
};

export default BookForm;
