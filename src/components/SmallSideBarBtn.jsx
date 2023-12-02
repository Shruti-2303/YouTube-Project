import React from 'react'

const SmallSideBarBtn = ({icon , text}) => {
  return (
    <div className="py-4 px-2 hover:bg-gray-200 rounded-lg flex flex-col items-center gap-1">
        <div className='text-xl'>{icon}</div>
        <div className='text-[10px]'>{text}</div>
    </div>
  )
}

export default SmallSideBarBtn