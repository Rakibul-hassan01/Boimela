import { Heart } from 'lucide-react'
import React from 'react'

const Favorite = ({book,onChangeFetured}) => {
  return (
      <button onClick={() => onChangeFetured(book.id)} className='p-5 bg-slate-300 rounded-md cursor-pointer'>
        <Heart color={`${book.featured ? 'Yellow': 'Black'}`}/> 
      </button>
  )
}

export default Favorite
