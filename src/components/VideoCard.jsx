import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  const{channelTitle, thumbnails, title} = snippet;
  return (
    <div className='p-2 w-72'>
        <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
        <div>{title}</div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCounts}</div>
    </div>
  )
}

export default VideoCard