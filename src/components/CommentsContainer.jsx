import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';

const commentsData = [
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video"
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video"
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    {
        name : "Shruti Sharma",
        text : "It was a wonderful video.",
        replies : "Yes indeed it is a very nice video",
    },
    

];

const Comment = ({data}) => {
    const { name, text} = data;
    <div>
      <FaCircleUser className="w-6 h-6" />
      <div>{name}</div>  
      <div>{text}</div>
    </div>
};
const CommentsContainer = () => {
  return (
    <div>CommentsContainer</div>
  )
}

export default CommentsContainer