import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { Outlet,useLocation } from 'react-router-dom'


const Body = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  

  useEffect(()=>{
    console.log("My current path is ",currentPath); 
  },[currentPath])
  return (
    <div className='flex'>       
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body;