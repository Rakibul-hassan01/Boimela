import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Heading = ({headerText}) => {
  return (
    <header className='p-2'>
        <h1 className='text-5xl font-bold m-2'>{headerText ? headerText : "This is Header"}</h1>
    </header>
  )
}

Heading.porpTypes = {
    headerText : PropTypes.string.isRequired
}

export default Heading
