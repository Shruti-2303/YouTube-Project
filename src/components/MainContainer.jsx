import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import SmallSideBar from './SmallSideBar';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  const buttonList = ["All","Cricket","Sports","Bollywood","Trailers"];
  return (
    <div className='m-2 flex'>
      {!isMenuOpen && <SmallSideBar/>}
      <div>
        <div className='flex'>
          {buttonList.map((button)=><ButtonList name={button}/>)}
        </div>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer