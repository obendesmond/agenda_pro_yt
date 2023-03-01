import React from 'react'

const Icon = ({Icon, color, click, size}) => {
  return (
    <div onClick={click} className='hover:bg-greyColor p-2 rounded-full cursor-pointer'>
        <Icon color={color} size={size || 25} />
    </div>
  )
}


export default Icon