import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../redux/books/books"
import Book from "./Book"
import Form from "./Form"

const Books = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  },[])
  const books = useSelector(state => state.books)
  return (
    <>
      {Object.keys(books).map((id) => (
        <Book
          key={id}
          id={id}
          title={books[id][0].title}
          author={books[id][0].author}
        />
      ))}
      <Form/>
    </>
  )
}

export default Books;