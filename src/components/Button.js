import React from 'react'
import CircularIcon from './CircularIcon';

const Button = ({text, onClick, Icon}) => {
  return (
    <div
      onClick={onClick}
      className="bg-blueColor flex flex-row gap-5 items-center justify-between px-5 py-2 rounded-full cursor-pointer"
    >
      <p className='text-white'>{text}</p>
      {Icon && <CircularIcon Icon={Icon} />}
    </div>
  );
}

export default Button