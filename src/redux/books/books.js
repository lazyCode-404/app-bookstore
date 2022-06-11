const REMOVE = 'REMOVE';
const DISPLAY = 'DISPLAY'
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W1RT9D7Mwtti9RBvC75J/books'

const displayData = (book) => ({
  type: DISPLAY,
  book
})

// remove books action
export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// fetch books 
export const fetchBooks = () => (dispatch) => {
  fetch(url)
  .then(res => res.json())
  .then(data => dispatch(displayData(data)))
}
// add books
  export const addBooks =(book) => async  (dispatch) => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
    .then(()=>dispatch(fetchBooks()))
 };

 // delete books function

 export const deleteBooks =(id) => async  (dispatch) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({id}),
  })
  .then(()=>dispatch(fetchBooks()))
};

// books reducer 
const reducer = (state = {}, action) => {
  switch(action.type) {
    case DISPLAY:
      return action.book
    default:
      return state;
  }
}

export default reducer;