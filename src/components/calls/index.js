import React, { useState } from "react";
import Header from './../common/header'
import Sidebar from './../common/sidebar'
import LeftFold from './left-fold'
import RightFold from './right-fold'

import "./calls.css";
function Calls() {
    const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className='calls-container'> 
        <Header/>
    <div className='calls-body'>
        <div className='calls-sidebar'>
            <Sidebar/>
        </div>
        <div className='calls-leftFold'>
            <LeftFold onSelectChat={setSelectedChat} />
        </div>
        <div className='calls-rightFold'>
            <RightFold selectedChat={selectedChat} />
        </div>
    </div>
    
    </div>

  )
}

export default Calls