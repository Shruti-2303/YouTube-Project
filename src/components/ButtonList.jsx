import React from "react";

const ButtonList = ({ name }) => {
  return (
    <div className="m-3">
      <button className="bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default ButtonList;
