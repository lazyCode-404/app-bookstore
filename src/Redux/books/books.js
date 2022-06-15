const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
// const GET_BOOKS = 'books/GET_BOOKS';

const initialState = [
  {
    id: 1,
    author: 'Tamara',
    title: 'girl fusion',
    category: '',
  },
  {
    id: 2,
    author: 'Tamara',
    title: '  The church girl',
    category: '',
  },
  {
    id: 3,
    author: 'Tamara,Emmanuel',
    title: 'The girl i Love',
    category: 'novel',
  },
];

// Actions

export const addBook = (book) => ({ type: ADD_BOOK, book });

// export const getBook = (payload) => ({ type: ADD_BOOK, payload });

export const deleteBook = (id) => (
  {
    type: REMOVE_BOOK, id,
  });

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const bookObj = {
        id: state.length + 1,
        author: action.book.author,
        title: action.book.title,
      };
      return [...state, bookObj];
    }

    // case GET_BOOKS:
    //   return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
  // export default reducer;
export default reducer;
