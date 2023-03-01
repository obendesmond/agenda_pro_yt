import React from 'react'
import Icon from './Icon'
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const AgendaSingle = ({agenda}) => {
    const {subject, time, location, description} = agenda
    
  return (
    <div className="flex flex-col mb-5 gap-2 w-full bg-white border-blueColor border-l-[15px] p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="text-lg md:text-xl font-bold">{subject}</p>
        <Icon Icon={MdModeEditOutline} size={20} />
      </div>
      <div className="w-[90%]">
        <p className="text-gray-600">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-[12px]">{time}</p>
          <p className="text-gray-600 text-[12px]">{location}</p>
        </div>
        <Icon Icon={MdDelete} size={20} />
      </div>
    </div>
  );
}

export default AgendaSingle