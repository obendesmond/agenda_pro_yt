import React from 'react'

const Icon = ({Icon, color, click}) => {
  return (
    <div onClick={click} className='hover:bg-greyColor p-2 rounded-full cursor-pointer'>
        <Icon color={color} size={25} />
    </div>
  )
}

export default Icon