import React from 'react'
import Book from './Book';
import Favorite from './Favorite';
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

const BookList = () => {
  return (
    <ul className='m-5'>
      {
        BOOKS.map((book) => {
            return <li className='flex items-center justify-between p-5 shadow-md my-5 bg-gray-50' key={book.id}>
                <Book title={book.title} author={book.author}/>
                <Favorite />
            </li>
        })
      }
    </ul>
  )
}

export default BookList
