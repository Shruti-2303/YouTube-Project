import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const commentsData = [
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: [
      {
        name: "Shruti Sharma",
        text: "It was a wonderful video.",
        replies: [],
      },
    ],
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: [
      {
        name: "Shruti Sharma",
        text: "It was a wonderful video.",
        replies: [
          {
            name: "Shruti Sharma",
            text: "It was a wonderful video.",
            replies: [],
          },
        ],
      },
      {
        name: "Shruti Sharma",
        text: "It was a wonderful video.",
        replies: [
          {
            name: "Shruti Sharma",
            text: "It was a wonderful video.",
            replies: [],
          },
        ],
      },
      {
        name: "Shruti Sharma",
        text: "It was a wonderful video.",
        replies: [],
      },
    ],
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
  {
    name: "Shruti Sharma",
    text: "It was a wonderful video.",
    replies: "Yes indeed it is a very nice video",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex">
      <FaCircleUser className="w-12 h-12" />
      <div className="px-3">
        <p className="font-bold">name</p>
        <p>Comment</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="ml-5">
      <div className="font-bold text-2xl">Comments:</div>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
