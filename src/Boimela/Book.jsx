import React from 'react'

const Book = ({title,author}) => {
  return (
    <div>
      <h2 className='text-xl font-bold my-2'>{title}</h2>
      <p className='text-md text-gray-500'>{author}</p>
    </div>
  )
}

export default Book
