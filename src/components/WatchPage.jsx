import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex'>
      <div>
        <iframe width="720" height="405" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl mt-10 ml-20'></iframe>
      </div>
      <div>
        <LiveChat/>
      </div>
    </div>
  )
}

export default WatchPage