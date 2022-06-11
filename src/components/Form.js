import { useState } from "react"
import { addBooks } from "../redux/books/books";
import shortid from 'shortid';
import { useDispatch } from "react-redux";

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if(title !== '' && author !== ''){
    const book = {
      item_id: shortid.generate(),
      title,
      author,
      category:'',
    }
    dispatch(addBooks(book));
    setAuthor('')
    setTitle('')
  }
  }
  return (
    <div className="form-section">
    <h4>ADD NEW BOOK</h4>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='book title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type='text' placeholder='Author' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      <button className="form-btn">Add book</button>
    </form>
    </div>
  )
}
export default Form;