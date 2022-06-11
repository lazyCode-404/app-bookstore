import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./books/books";
import categoryReducer from "./categories/categories";

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store