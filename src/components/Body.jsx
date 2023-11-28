import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import Header from './Header'
import SmallSideBar from './SmallSideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>       
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body;