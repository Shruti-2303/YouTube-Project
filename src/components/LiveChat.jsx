import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName, makeRandomMessages } from '../constants/helper';

const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(()=>{
    const i = setInterval(()=>{
      //Api Polling
      console.log("Api Polling");

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessages(25),
        })
      )
    },2000);

    return () => clearInterval(i);
  },[])
  return (
    <>
      <div className='w-[420px] h-[400px] mt-10 ml-8 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message}/>
          ))}
      </div>

      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{e.preventDefault();
          dispatch(
            addMessage({
            name:"Shruti Sharma",
            message: liveMessage,
          })
          );
          setLiveMessage("");
      }}>
            <input type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
            <button className='px-2 mx-2 bg-green-200'>Send</button>
      </form>
    </>
  )
}

export default LiveChat