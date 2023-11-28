import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, closeSmallMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
        dispatch(closeSmallMenu());
    },[])
  return (
    <div>
        <iframe width="640" height="360" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl mt-10 ml-20'></iframe>
    </div>
  )
}

export default WatchPage