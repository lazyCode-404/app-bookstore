import { useDispatch } from "react-redux"
import { checkStatus } from "../redux/categories/categories";

const Categories = () => {
  const dispatch = useDispatch();

  // handle click method
  const handleClick = () => {
    dispatch(checkStatus())
  }
  return (
    <button className="cat-btn" onClick={handleClick}>Check status</button>
  )
}

export default Categories