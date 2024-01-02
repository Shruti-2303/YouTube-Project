import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessages } from "../constants/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      console.log("Api Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(15),
        })
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="h-[30%]">
      <div className="w-full h-[95%] text-sm p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="flex py-1 items-center justify-between w-full rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shruti Sharma",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-[84%] px-2 py-1 text-sm outline-none border border-black rounded"
        />
        <button className="w-[15%] text-gray rounded px-1 py-1 text-sm bg-green-300 border border-green-800">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
