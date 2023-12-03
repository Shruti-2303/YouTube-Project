import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-[420px] h-[500px] mt-10 ml-8 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Shruti Sharma" message="Hi!! Have a nice day"/>
    </div>
  )
}

export default LiveChat