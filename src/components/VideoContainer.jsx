import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDOES_API } from "../constants/generalConstants";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const VideoContainer = () => {
  //for infinite scrolling
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const getVideosAPI = async () => {
    try {
      setLoading(true);
      const data = await fetch(YOUTUBE_VIDOES_API);
      const json = await data.json();
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error while fetching videos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideosAPI();
  }, []);

  // to handle scrolling
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (windowHeight + scrollTop === documentHeight && !loading) {
      getVideosAPI();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]); // Add and remove scroll event listener

  return (
    <div className="grid grid-cols-4">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      <div className="w-full mx-auto my-20">{loading && <p>Loading...</p>}</div>
    </div>
  );
};

export default VideoContainer;
