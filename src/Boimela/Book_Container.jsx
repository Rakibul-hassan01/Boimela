import React, { useState } from 'react'
import Heading from './Heading'
import Search from './Search'
import BookList from './BookList'

const BOOKS = [
  {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
  },
  { id: 2, title: "1984", author: "George Orwell", featured: false },
  {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: false,
  },
  {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
  },
  {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: false,
  },
];
const Book_Container = () => {
  const [searchTerms,setSearchTerms] = useState('');
  const [books,setBooks] = useState(BOOKS);
  const toggleIsFetured = (id) => {
    setBooks(books.map((book)=> book.id === id ? {...book,featured:!book.featured}:book))
  }

  return (
    <div className='p-2 lg:p-10 m-5'>
      {/* Heading  */}
    <Heading headerText={"Boimela"}/>
      {/* Search  */}
      <Search searchTerms={searchTerms} setSearchTerms={setSearchTerms}/>
      {/* BookList  */}
      <BookList books={books} onChangeFetured={toggleIsFetured} searchTerms={searchTerms}/>
    </div>
  )
}

export default Book_Container
