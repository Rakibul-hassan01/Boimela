import React from 'react'
import Heading from './Heading'
import Search from './Search'
import BookList from './BookList'
const Book_Container = () => {
  return (
    <div className='p-2 lg:p-10 m-5'>
      {/* Heading  */}
    <Heading headerText={"Boimela"}/>
      {/* Search  */}
      <Search />
      {/* BookList  */}
      <BookList />
    </div>
  )
}

export default Book_Container
