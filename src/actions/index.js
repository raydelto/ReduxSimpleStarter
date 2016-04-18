export function selectBook(book){
  //console.log('A book has been selected' , book.title);
//returns an action (object with type property)
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
