import React from 'react'
import Book from './Book';
import Favorite from './Favorite';


const BookList = ({books,searchTerms,onChangeFetured}) => {
  let rows = [];
  books.forEach((book) => {
     if(book.title.toLowerCase().indexOf(searchTerms.toLowerCase()) === -1) {
      return;
     }
     rows.push(<li className='flex items-center justify-between p-5 shadow-md my-5 bg-gray-50' key={book.id}>
      <Book title={book.title} author={book.author}/>
      <Favorite onChangeFetured={onChangeFetured} book={book}/>
  </li>)
  })
  return (
    <ul className='m-5'>
      {
        rows
      }
    </ul>
  )
}

export default BookList
