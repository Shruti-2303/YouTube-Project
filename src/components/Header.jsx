import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { HiMicrophone } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_LOGO } from '../constants/imageConstants';
const Header = () => {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col shadow-lg'>
      <div className='flex col-span-1'>
        <RxHamburgerMenu className='w-6 h-6 text-[#030303] mt-4 ml-6 font-thin cursor-pointer' onClick={()=>handleToggleSidebar()}/>
        <img className="w-24 h-5 mt-5 ml-7" src={YOUTUBE_LOGO}
        alt="youtube_logo" srcset="" />
      </div>
      <div className='flex mt-2 col-span-10'>
        <input type="search" className='rounded-l-full border border-gray-300 w-1/2 h-10 p-3 ml-36' placeholder='Search'/>
        <button className='rounded-r-full border border-gray-300 p-2 h-10 pl-7 w-20 text-black text-lg bg-gray-300'><IoSearchOutline /></button>
        <button className='w-10 h-10 ml-3 bg-gray-200 rounded-full p-2.5'><HiMicrophone className='text-xl'/></button>
      </div>
      <div className='flex mt-4 col-span-1 gap-x-8'>
        <BsCameraVideo className='w-6 h-6'/>
        <BsBell className='w-6 h-6'/>
        <FaCircleUser className='w-6 h-6'/>
      </div>
    </div>
  )
}

export default Header