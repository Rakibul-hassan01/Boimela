import React from 'react'

const Search = ({searchTerms,setSearchTerms}) => {
  return (
    <div className='m-5'>
      <input  value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} className='w-full p-4 border-2 outline-none shadow-md' type="text" placeholder='Search Books...' />
    </div>
  )
}

export default Search
