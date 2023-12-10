import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  // if(!isMenuOpen) return <SmallSideBar/>;
  if(isMenuOpen) return (
    <div className='shadow-xl p-6 min-w-[230px] h-screen z-10 cursor-pointer'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='text-lg font-semibold'>You ›</div>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
    </div>
  )
}

export default SideBar