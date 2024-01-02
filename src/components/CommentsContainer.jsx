import { FaCircleUser } from "react-icons/fa6";

const commentsData = [
  {
    name: "John Doe",
    text: "Great content!",
    replies: [
      {
        name: "Alice Johnson",
        text: "Absolutely loved it!",
        replies: [
          {
            name: "Bob Smith",
            text: "Fantastic video!",
            replies: ["Yes, it's really well made."],
          },
        ],
      },
    ],
  },
  {
    name: "Emma Brown",
    text: "Interesting topic!",
    replies: [
      {
        name: "David White",
        text: "I learned a lot from this.",
        replies: [
          {
            name: "Sophie Clark",
            text: "Thanks for sharing!",
            replies: [
              {
                name: "Liam Anderson",
                text: "I agree, very informative.",
                replies: ["Definitely worth watching."],
              },
            ],
          },
        ],
      },
      {
        name: "Olivia Davis",
        text: "Well explained!",
        replies: [
          {
            name: "Charlie Miller",
            text: "Clear and concise.",
            replies: ["Yes, the presenter did a great job."],
          },
        ],
      },
    ],
  },
  {
    name: "Grace Wilson",
    text: "Nice work!",
    replies: ["Yes, enjoyed every bit of it."],
  },
  {
    name: "Daniel Harris",
    text: "Awesome video!",
    replies: ["Yes indeed, loved the content."],
  },
  {
    name: "Eva Moore",
    text: "Well done!",
    replies: ["Great job on the production!"],
  },
  {
    name: "Oscar Taylor",
    text: "Superb!",
    replies: ["Kudos to the team."],
  },
  {
    name: "Mia Turner",
    text: "Fantastic presentation!",
    replies: ["I couldn't agree more."],
  },
  {
    name: "Noah Walker",
    text: "Thoroughly enjoyed it!",
    replies: ["Yes, it was a delightful watch."],
  },
  {
    name: "Ava Hill",
    text: "Bravo!",
    replies: ["Looking forward to more content like this."],
  },
  {
    name: "Carter Brooks",
    text: "Incredible content!",
    replies: ["Absolutely, top-notch quality."],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 items-center text-sm">
      <FaCircleUser className="w-8 h-8" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div>
        {comment.name && comment.text && <Comment key={index} data={comment} />}
        {comment.replies && (
          <div className="pl-5 border border-l-black">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="w-full py-8">
      <div className="font-bold text-2xl">Comments:</div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
