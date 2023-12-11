import React from "react";
import { Tooltip } from "antd";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  const formatViewCount = (viewCount) => {
    const numericViewCount = parseFloat(viewCount);

    if (isNaN(numericViewCount)) {
      return "Invalid View Count";
    }

    if (numericViewCount >= 1000000) {
      return (numericViewCount / 1000000).toFixed(1) + "M";
    } else if (numericViewCount >= 1000) {
      return (numericViewCount / 1000).toFixed(1) + "K";
    } else {
      return numericViewCount.toString();
    }
  };

  return (
    <div className="p-2 w-full min-h-full">
      <div className="bg-gray-50 shadow-lg rounded-xl hover:bg-gray-200">
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <div className="p-2 text-sm">
          {title.length > 55 ? (
            <Tooltip
              placement="bottom"
              title={title}
              overlayInnerStyle={{ width: "500px", color: "black" }}
              color={"white"}
            >
              <div>{title.slice(0, 55) + "..."}</div>
            </Tooltip>
          ) : (
            <div>{title}</div>
          )}
          <div className="text-gray-600">{channelTitle}</div>
          <div className="text-gray-600">
            {formatViewCount(statistics.viewCount)} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
