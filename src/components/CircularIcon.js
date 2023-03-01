import React from 'react'

const CircularIcon = ({Icon}) => {
  return (
    <span className='bg-white p-2 cursor-pointer rounded-full hover:drop-shadow-md'>
        <Icon size={25} />
    </span>
  )
}

export default CircularIcon