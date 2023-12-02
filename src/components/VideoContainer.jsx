import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDOES_API } from '../constants/generalConstants'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const getVideosAPI = async () => {
    const data = await fetch(YOUTUBE_VIDOES_API);
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(()=>{
    getVideosAPI();
  },[])
  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=>(
      <Link key={video.id} to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
      ))}
    </div>
  )
}

export default VideoContainer