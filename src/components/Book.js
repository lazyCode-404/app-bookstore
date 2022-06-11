import { useDispatch } from "react-redux";
import { deleteBooks } from "../redux/books/books"
const Book = ({id, title, author}) => {
const dispatch = useDispatch();
  return (
    <article className='book'>
      <div className="cont-1">
        <h5>Action</h5>
        <h3>{title}</h3>
        <p className="book-info">{author}</p>
        <div className='article-footer'>
          <button>Comments |</button>
          <button onClick={()=> dispatch(deleteBooks(id))}>Remove |</button>
          <button>Edit |</button>
        </div>
      </div>
      <div className="check">
      <div className="Oval-2" />
        <div className="progress">
            <div className="text flex">
            <span className="percent">64%</span>
            <span className="status">Completed</span>
        </div>
      </div>
      </div>
      <div>
        <h6 className="book-info">CURRENT CHAPTER</h6>
        <p className="chapter">Chapter 17</p>
        <button className="book-btn">Update Progress</button>
      </div>
    </article>
  )
}
export default Book;