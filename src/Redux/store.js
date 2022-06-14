import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
 books: booksReducer,
  categories:categoryReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
