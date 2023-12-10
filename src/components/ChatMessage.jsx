import { FaCircleUser } from 'react-icons/fa6';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex mt-3'>
        <FaCircleUser className="w-6 h-6" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage